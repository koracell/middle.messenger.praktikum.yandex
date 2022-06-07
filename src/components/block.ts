import EventBus from '../utils/event_bus'
import { nanoid } from 'nanoid'

export default class Block {
   static EVENTS = {
     INIT: "init",
     FLOW_CDM: "flow:component-did-mount",
     FLOW_CDU: "flow:component-did-update",
     FLOW_RENDER: "flow:render"
   };
 
   private _element: HTMLElement | null = null;
   props: any;
   eventBus: () => EventBus;
   id = nanoid(6);
   children: Record<string, Block>

   constructor(propsAndChildren: any = {}) {
     const eventBus = new EventBus();
     const { props, children } = this.getChildren(propsAndChildren);
     
     this.children = children;
     
     this.initChildren();

     this.props = this._makePropsProxy(props);
 
     this.eventBus = () => eventBus;
 
     this._registerEvents(eventBus);
     eventBus.emit(Block.EVENTS.INIT);
     eventBus.emit(Block.EVENTS.FLOW_CDM)
   }
 
   _registerEvents(eventBus: EventBus) {
     eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
     eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
     eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
     eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
   }

   getChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};
    
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
 
   _componentDidUpdate(oldProps: any, newProps: any) {
     const response = this.componentDidUpdate(oldProps, newProps);
     if(response) {
       this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
     }
   }
 
    // Может переопределять пользователь
   componentDidUpdate(_oldProps: any, _newProps: any) {
     return true;
   }
 
   setProps = (nextProps: any) => {
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
     
     const newElement = fragment.firstElementChild as HTMLElement;
     

     if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement)
     } 

     this._element = newElement


     this._addEvents();
   }
 
    // Может переопределять пользователь
   render(): DocumentFragment {
     return new DocumentFragment();
   }
 
   getContent() {
     return this.element;
   }
 
   _makePropsProxy(props: any) {
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
 
   _createDocumentElement(tagName: string) {
     return document.createElement(tagName);
   }

   _removeEvents() {
     const events: Record<string, () => void> = this.props.events;

     if (!events || !this._element) {
       return;
     }

     Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener) 
     });
   }

   _addEvents() {
    const events: Record<string, () => void> = this.props.events;

    if (!events) {
      return;
    }
    
    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener) 
     });

   }
 
   show() {
     this.getContent()!.style.display = 'block';
   }
 
   hide() {
     this.getContent()!.style.display = 'none';
   }

   compile(template: any, context: any) {
      // Отображаем сразу в дереве дивы с id
      const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

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
      Object.entries(this.children).forEach(([, child]) => {
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

        stub.replaceWith(child.getContent()!);
      })
      
      return fragment.content;
   }
 }