import fieldTmpl from './field.hbs';

import './field.scss';

export const field = ({name, placeholder, klass}) => fieldTmpl({
    name,
    placeholder,
    klass
})