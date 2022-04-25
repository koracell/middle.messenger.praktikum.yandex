import buttonTmpl from './button.hbs';

import './button.scss'

export const button = ({name, className}) => buttonTmpl({
    name,
    className
})