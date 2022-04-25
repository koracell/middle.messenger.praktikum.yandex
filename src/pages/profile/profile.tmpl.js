import {field} from '../../components/field/field.tmpl'
import {button} from '../../components/button/button.tmpl'
import tmpl from './profile.hbs'
import './profile.scss';

const fields = {
    first_name: {
        name: 'first_name',
        placeholder: 'first_name',
        className: 'profile-form__input'
    },
    second_name: {
        name: 'seasecond_namerch',
        placeholder: 'second_name',
        className: 'profile-form__input'
    },
    display_name: {
        name: 'display_name',
        placeholder: 'display_name',
        className: 'profile-form__input'
    },
    login: {
        name: 'login',
        placeholder: 'login',
        className: 'profile-form__input'
    },
    email: {
        name: 'email',
        placeholder: 'email',
        className: 'profile-form__input'
    },
    phone: {
        name: 'phone',
        placeholder: 'phone',
        className: 'profile-form__input'
    },
    button: {
        name: 'save',
        className: 'profile-form__button'
    }
}


export const buildHtmlProfile = () => {
    return tmpl({
        firstNameField: field(fields.first_name),
        secondNameField: field(fields.second_name),
        displayNameField: field(fields.display_name),
        loginField: field(fields.login),
        emailField: field(fields.email),
        phoneField: field(fields.phone),
        button: button(fields.button),
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    })
}