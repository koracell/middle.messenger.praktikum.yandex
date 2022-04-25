import {field} from '../../components/field/field.tmpl'
import {chat_item} from '../../components/chat_item/chat_item.tmpl'
import {button} from '../../components/button/button.tmpl'
import tmpl from './chats.hbs'
import './chats.scss';

export const buildHtmlChats = () => {
    let chatList = []
    
    chats.list.forEach(function(item, _i, _arr) {
        chatList.push(chat_item(item))
    })



    return tmpl({
        searchField: field(fields.search),
        chatsList: chatList.join(''),
        chat: chat_active,
        messageField: field(fields.message_input),
        messageButton: button(fields.message_button)
    })
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