import Block from '../block'
import tmpl from '../../components/button/button.hbs'
import '../../components/button/button.scss'


export class Button extends Block {
   constructor(props) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}