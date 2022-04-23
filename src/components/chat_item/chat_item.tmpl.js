import chatTmpl from './chat_item.hbs';

import './chat_item.scss';

export const chat_item = ({name, last_message, date_last_message, image_link}) => chatTmpl({
    name,
    last_message,
    date_last_message,
    image_link
})