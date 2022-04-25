import chatTmpl from './chat_item.hbs';

import './chat_item.scss';

export const chat_item = ({name, lastMessage, dateLastMessage, imageLink}) => chatTmpl({
    name,
    lastMessage,
    dateLastMessage,
    imageLink
})