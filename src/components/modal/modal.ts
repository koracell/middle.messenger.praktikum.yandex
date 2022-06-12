import Block from '../block';
import tmpl from '../../components/modal/modal.hbs'
import '../../components/modal/modal.scss'

export class Modal extends Block {
   constructor(props: any) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}