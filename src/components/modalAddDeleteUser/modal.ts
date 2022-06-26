import Block from '../block';
import tmpl from '../../components/modalAddDeleteUser/modal.hbs'
import './modal.scss'

export class ModalAddDeleteUser extends Block {
   constructor(props: any) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}