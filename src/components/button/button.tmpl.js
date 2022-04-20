import buttonTmpl from './button.hbs';

import './button.scss'

export const button = ({name, klass}) => buttonTmpl({
    name,
    klass
})