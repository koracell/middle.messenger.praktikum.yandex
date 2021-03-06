import Block from '../../components/block'
import { Field } from '../../components/field/field';
import { Button } from '../../components/button/button';

import tmpl from './profile.hbs'
import './profile.scss';
import UserController from '../../controllers/UserController';
import Router from '../../utils/Router';

import Validator from '../../utils/validator';

export default class ProfilePage extends Block {
    constructor(propsStore: any) {
        super(propsStore);
    }

    initChildren() {
        this.children.firstNameField = new Field({
            name: 'first_name',
            placeholder: 'first_name',
            className: 'profile-form__input',
        });

        this.children.secondNameField = new Field({
            name: 'second_name',
            placeholder: 'second_name',
            className: 'profile-form__input'
        });

        this.children.displayNameField = new Field({
            name: 'display_name',
            placeholder: 'display_name',
            className: 'profile-form__input'
        });

        this.children.loginField = new Field({
            name: 'login',
            placeholder: 'login',
            className: 'profile-form__input',
            events: {
                blur: function(event: any) {
                    const value = event.target.value

                    if ((new Validator).testLogin(value)) {
                        event.target.classList.remove('input-invalid')
                    } else {
                        event.target.classList.add('input-invalid')
                    }

                }
            }
        });

        this .children.emailField = new Field({
            name: 'email',
            placeholder: 'email',
            className: 'profile-form__input',
            events: {
                blur: function(event: any) {
                    const value = event.target.value

                    if ((new Validator).testEmail(value)) {
                        event.target.classList.remove('input-invalid')
                    } else {
                        event.target.classList.add('input-invalid')
                    }

                }
            }
        });

        this.children.phoneField = new Field({
            name: 'phone',
            placeholder: 'phone',
            className: 'profile-form__input',
            events: {
                blur: function(event: any) {
                    const value = event.target.value

                    if ((new Validator).testPhone(value)) {
                        event.target.classList.remove('input-invalid')
                    } else {
                        event.target.classList.add('input-invalid')
                    }

                }
            }
        });

        this.children.button = new Button({
            name: 'save',
            className: 'profile-form__button',
            events: {
                click: function(event: any) {
                    const first_name = <HTMLInputElement>document.getElementsByName("first_name")[0]
                    const second_name = <HTMLInputElement>document.getElementsByName("second_name")[0]
                    const display_name = <HTMLInputElement>document.getElementsByName("display_name")[0]
                    const login = <HTMLInputElement>document.getElementsByName("login")[0]
                    const email = <HTMLInputElement>document.getElementsByName("email")[0]
                    const phone = <HTMLInputElement>document.getElementsByName("phone")[0]

                    const user = {
                        first_name: first_name.value,
                        second_name: second_name.value,
                        display_name: display_name.value,
                        login: login.value,
                        email: email.value,
                        phone: phone.value
                    }

                    UserController.update(user).then(() => {
                        Router.__instance.go('/profile')
                    })
                }
            }
        });

        this.children.buttonChangeAvatar = new Button({
            name: 'save',
            className: 'profile-form__button',
            events: {
                click: function(event: any) {
                    const avatar_input = document.querySelector('#file_avatar');
                    const formData = new FormData();
                    formData.append('avatar', avatar_input.files[0])
                    

                    UserController.updateAvatar(formData).then(() => {
                        console.log('Avatar updated')
                    })

                    event.preventDefault();
                }
            }
        });

        this.children.oldPasswordField = new Field({
            name: 'old_password',
            placeholder: 'old password',
            className: 'old-password-form__input',
            events: {
                blur: function(event: any) {
                    const value = event.target.value

                    if ((new Validator).testPassword(value)) {
                        event.target.classList.remove('input-invalid')
                    } else {
                        event.target.classList.add('input-invalid')
                    }

                }
            }
        });

        this.children.newPasswordField = new Field({
            name: 'new_password',
            placeholder: 'new password',
            className: 'new-password-form__input',
            events: {
                blur: function(event: any) {
                    const value = event.target.value

                    if ((new Validator).testPassword(value)) {
                        event.target.classList.remove('input-invalid')
                    } else {
                        event.target.classList.add('input-invalid')
                    }

                }
            }
        });

        this.children.buttonChangePassword = new Button({
            name: 'save',
            className: 'password-form__button',
            events: {
                click: function(event: any) {
                    const old_password = <HTMLInputElement>document.getElementsByName("old_password")[0]
                    const new_password = <HTMLInputElement>document.getElementsByName("new_password")[0]

                    const data_password = {
                        oldPassword: old_password.value,
                        newPassword: new_password.value,
                    }
                    
                    UserController.updatePassword(data_password).then(() => {
                        console.log('Password updated')
                    })

                    event.preventDefault();
                }
            }
        });

    
    }

    componentDidMount() {
        this.children.firstNameField.setValue(this.props?.user?.first_name)
        this.children.secondNameField.setValue(this.props?.user?.second_name)
        this.children.displayNameField.setValue(this.props?.user?.display_name)
        this.children.loginField.setValue(this.props?.user?.login)
        this.children.emailField.setValue(this.props?.user?.email)
        this.children.phoneField.setValue(this.props?.user?.phone)
    }


    
    render() {
        return this.compile(tmpl, { 
            avatar: 'https://ya-praktikum.tech/api/v2/resources/' + this.props.user.avatar
        })
    }
}