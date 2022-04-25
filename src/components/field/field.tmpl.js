import fieldTmpl from './field.hbs';

import './field.scss';

export const field = ({name, placeholder, className}) => fieldTmpl({
    name,
    placeholder,
    className
})