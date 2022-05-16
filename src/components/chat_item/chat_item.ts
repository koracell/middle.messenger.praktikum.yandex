import Block from '../block';
import tmpl from '../../components/chat_item/chat_item.hbs'
import '../../components/chat_item/chat_item.scss'

interface ChatItemProp {
   image_link: string;
   name: string;
   last_message: string;
}

export class ChatItem extends Block {
   constructor(props: ChatItemProp) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}