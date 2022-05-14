import EventBus from '../utils/event_bus'
import { nanoid } from 'nanoid'
import { Console } from 'console';

export default class Block {
   static EVENTS = {
     INIT: "init",
     FLOW_CDM: "flow:component-did-mount",
     FLOW_CDU: "flow:component-did-update",
     FLOW_RENDER: "flow:render"
   };
 
   _element = null;
   _meta = null;
   props = null;
   eventBus = null;
   id = nanoid(6)
 
   /** JSDoc
    * @param {string} tagName
    * @param {Object} props
    *
    * @returns {void}
    */
   constructor(propsAndChildren = {}) {
     const eventBus = new EventBus();

     const { props, children } = this.getChildren(propsAndChildren);

     this._meta  = {
       props
     };
     
     this.children = children;
     
     this.initChildren();

     this.props = this._makePropsProxy(props);
 
     this.eventBus = () => eventBus;
 
     this._registerEvents(eventBus);
     eventBus.emit(Block.EVENTS.INIT);
   }
 
   _registerEvents(eventBus) {
     eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
     eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
     eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
     eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
   }

   getChildren(propsAndChildren) {
    const children = {};
    const props = {};
    
    Object.entries(propsAndChildren).map(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value) && value.every(v => v instanceof Block)) {
        children[key] = value;
      } else {
        props[key] = value;
      }

    })
    
    return { props, children };
   }
 
   init() {
     this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
   }

   initChildren() {};
 
   _componentDidMount() {
     this.componentDidMount();
   }
 
    // Может переопределять пользователь
   componentDidMount() {}
 
   dispatchComponentDidMount() {
     this.eventBus().emit(Block.EVENTS.FLOW_CDM)
   }
 
   _componentDidUpdate(oldProps, newProps) {
     const response = this.componentDidUpdate(oldProps, newProps);
     if(response) {
       this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
     }
   }
 
    // Может переопределять пользователь
   componentDidUpdate(oldProps, newProps) {
     return true;
   }
 
   setProps = nextProps => {
     if (!nextProps) {
       return;
     }
 
     Object.assign(this.props, nextProps);
   };
 
   get element() {
     return this._element;
   }
 
   _render() {
     const fragment = this.render();

     const newElement = fragment.firstElementChild;

     if (this._element) {
       this._element.replaceWith(newElement)
     } 

     this._element = newElement
   }
 
    // Может переопределять пользователь
   render() {}
 
   getContent() {
     return this.element;
   }
 
   _makePropsProxy(props) {
     const self = this;
     
     return new Proxy(props, {
       get(target, prop) {
         const value = target[prop];
         return typeof value === 'function' ? value.blind(target) : value;
       },
       set(target, prop, value) {
         target[prop] = value;
         self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
         return true;
       },
       deleteProperty() {
         throw new Error('Нет доступа')
       }
     })
   }
 
   _createDocumentElement(tagName) {
     return document.createElement(tagName);
   }
 
   show() {
     this.getContent().style.display = 'block';
   }
 
   hide() {
     this.getContent().style.display = 'none';
   }

   compile(template, context) {
      // Отображаем сразу в дереве дивы с id
      const fragment = this._createDocumentElement('template');

      Object.entries(this.children).forEach(([key, child]) => {
        if (Array.isArray(child)) {
          context[key] = child.map(ch => `<div data-id="id-${ch.id}"></div>`);

          return;
        }
        
        context[key] = `<div data-id="id-${child.id}"></div>`;
      });

      const htmlString = template(context);
      fragment.innerHTML = htmlString;

      // Находим div с нужным контентом и меняем в нем содержимое
      Object.entries(this.children).forEach(([key, child]) => {
        if (Array.isArray(child)) {
          child.forEach((ch) => {
            const stub = fragment.content.querySelector(`[data-id="id-${ch.id}"]`)
            
            if (!stub) {
              return;
            }

            stub.replaceWith(ch.getContent());
          })
        }

        const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`)

        if (!stub) {
          return;
        }

        stub.replaceWith(child.getContent());
      })
      
      return fragment.content;
   }
 }