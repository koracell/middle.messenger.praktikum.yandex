import {field} from '../../components/field/field.tmpl'
import {button} from '../../components/button/button.tmpl'
import tmpl from './authorization.hbs'

import './authorization.scss';

const fields = {
    login: {
        name: 'login',
        placeholder: 'login',
        className: 'authorization__login-input'
    },
    password: {
        name: 'password',
        placeholder: 'password',
        className: 'authorization__password-input'
    },
    button: {
        name: 'Sign in',
        className: 'authorization__button-button'
    }
}

export const buildHtmlAuthorization = () => {

    return tmpl({
        loginField: field(fields.login),
        passwordField: field(fields.password),
        button: button(fields.button)
    });
}