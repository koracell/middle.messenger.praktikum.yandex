import Block from '../../components/block'
import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field'
import { ChatItem } from '../../components/chat_item/chat_item'

import tmpl from './chats.hbs'
import './chats.scss';

export class ChatsPage extends Block {
    constructor() {
        super();
    }

    initChildren() {
        let chatList = []
    
        chats.list.forEach(function(item, _i, _arr) {
            chatList.push(new ChatItem(item))
        })

        this.children.searchField = new Field({
            name: 'search',
            placeholder: 'search',
            className: 'chats-search__input'
         });

        this.children.chatsList = chatList;
    }
    
    render() {
        return this.compile(tmpl, { 
            chat: chat_active
         })
    }
}

// TODO: вынести в отдельный файл

const fields = {
    search: {
        name: 'search',
        placeholder: 'search',
        className: 'chats-search__input'
    },
    message_input: {
        name: 'message',
        placeholder: 'message',
        className: 'chat-view__form-message-input'
    },
    message_button: {
        name: 'send',
        className: 'chat-view__form-message-button'
    }
}

//  TODO в дальнейшем будем получать список по api сервера из базы данных. 
const chats = {
    list: [
        {name: 'Andre', last_message: 'Whatsapp nigga? How are you? Whatsapp nigga? How are you?', date_last_message: '10:49', image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {name: 'Violla', last_message: 'Whatsapp nigga? How are you?', date_last_message: '11:49', image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {name: 'Violla', last_message: 'Whatsapp nigga? How are you?', date_last_message: '11:49', image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {name: 'Violla', last_message: 'Whatsapp nigga? How are you?', date_last_message: '11:49', image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {name: 'Violla', last_message: 'Whatsapp nigga? How are you?', date_last_message: '11:49', image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {name: 'Violla', last_message: 'Whatsapp nigga? How are you?', date_last_message: '11:49', image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
        {name: 'Violla', last_message: 'Whatsapp nigga? How are you?', date_last_message: '11:49', image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
    ]
}

const chat_active = {
    name: 'Silvestor Stalone',
    messages: [
        {content_type: 'text', body: 'Привет всем. Тут всплыл один вопрос. Есть ли Луна? Привет всем. Тут всплыл один вопрос. Есть ли Луна?'},
        {content_type: 'text', body: 'Привет всем. Конечно есть, я на ней играл в футбол. Привет всем. Конечно есть, я на ней играл в футбол. Привет всем. Конечно есть, я на ней играл в футбол.'},
        {content_type: 'image', body: 'https://ilounge.ua/files/uploads/new_4/sravnenie-apple-watch-6-i-se-6.jpg'},
    ],
    image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
}