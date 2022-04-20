import Handlebars from 'handlebars'
import {field} from '../../components/field/field.tmpl'
import {button} from '../../components/button/button.tmpl'
import tmpl from './authorization.hbs'

import './authorization.scss';

const fields = {
    login: {
        name: 'login',
        placeholder: 'login',
        klass: 'authorization__login-input'
    },
    password: {
        name: 'password',
        placeholder: 'password',
        klass: 'authorization__password-input'
    },
    button: {
        name: 'Sign in',
        klass: 'authorization__button-button'
    }
}

export const buildHtmlAuthorization = () => {
    console.log(field(fields.login))

    return tmpl({
        loginField: field(fields.login),
        passwordField: field(fields.password),
        button: button(fields.button)
    });
}