import {field} from '../../components/field/field.tmpl'
import {button} from '../../components/button/button.tmpl'
import tmpl from './registration.hbs'

import './registration.scss';

const fields = {
    firstName: {
        name: 'first_name',
        placeholder: 'first name',
        klass: 'registration__firstName-input'
    },
    secondName: {
        name: 'second_name',
        placeholder: 'second name',
        klass: 'registration__secondName-input'
    },
    login: {
        name: 'login',
        placeholder: 'login',
        klass: 'registration__login-input'
    },
    email: {
        name: 'email',
        placeholder: 'email',
        klass: 'registration__email-input'
    },
    phone: {
        name: 'phone',
        placeholder: 'phone',
        klass: 'registration__phone-input'
    },
    password: {
        name: 'password',
        placeholder: 'password',
        klass: 'registration__password-input'
    },
    button: {
        name: 'Create account',
        klass: 'registration__button-button'
    }
}

export const buildHtmlRegistration = () => {
    return tmpl({
        firstNameField: field(fields.firstName),
        secondNameField: field(fields.secondName),
        loginField: field(fields.login),
        emailField: field(fields.email),
        passwordField: field(fields.password),
        phoneField: field(fields.phone),
        button: button(fields.button)
    });
}