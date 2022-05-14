import Block from '../block';
import tmpl from '../../components/chat_item/chat_item.hbs'
import '../../components/chat_item/chat_item.scss'


export class ChatItem extends Block {
   constructor(props) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}