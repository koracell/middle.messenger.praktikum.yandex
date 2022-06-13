import Block from '../block';
import tmpl from '../modalAddDeleteUser/modal.hbs'
import '../modalAddDeleteUser/modal.scss'

export class ModalAddUser extends Block {
   constructor(props: any) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}