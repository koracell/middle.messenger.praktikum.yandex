import Block from '../block';
import tmpl from '../modalChangeAvatar/modal.hbs'

export class ModalChangeAvatar extends Block {
   constructor(props: any) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}