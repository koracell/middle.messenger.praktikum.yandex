import Handlebars from 'handlebars'
import {field} from '../../components/field/field.tmpl'
import {button} from '../../components/button/button.tmpl'
import tmpl from './registration.hbs'

import './registration.scss';

const fields = {
    login: {
        name: 'login',
        placeholder: 'login',
        klass: 'registration__login-input'
    },
    password: {
        name: 'password',
        placeholder: 'password',
        klass: 'registration__password-input'
    },
    button: {
        name: 'Sign in',
        klass: 'registration__button-button'
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