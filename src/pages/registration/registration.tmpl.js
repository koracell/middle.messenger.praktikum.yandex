import {field} from '../../components/field/field.tmpl'
import {button} from '../../components/button/button.tmpl'
import tmpl from './registration.hbs'

import './registration.scss';

const fields = {
    firstName: {
        name: 'first_name',
        placeholder: 'first name',
        class: 'registration__firstName-input'
    },
    secondName: {
        name: 'second_name',
        placeholder: 'second name',
        class: 'registration__secondName-input'
    },
    login: {
        name: 'login',
        placeholder: 'login',
        class: 'registration__login-input'
    },
    email: {
        name: 'email',
        placeholder: 'email',
        class: 'registration__email-input'
    },
    phone: {
        name: 'phone',
        placeholder: 'phone',
        class: 'registration__phone-input'
    },
    password: {
        name: 'password',
        placeholder: 'password',
        class: 'registration__password-input'
    },
    button: {
        name: 'Create account',
        class: 'registration__button-button'
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