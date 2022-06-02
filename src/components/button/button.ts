import Block from '../block'
import tmpl from '../../components/button/button.hbs'
import '../../components/button/button.scss'

interface ButtonProps {
   name: string;
   className: string;
   events?: any;
}

export class Button extends Block {
   constructor(props: ButtonProps) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}