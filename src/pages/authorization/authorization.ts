import Block from '../../components/block'
import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field';

import tmpl from '../authorization/authorization.hbs'

import './authorization.scss';

export class AuthorizationPage extends Block {
    constructor() {
        super();
    }

    initChildren() {
        this.children.button = new Button({
            className: 'authorization__button-button',
            name: 'Sign in',
            events: {
                click: function(event: any) {
                    const elem_login = <HTMLInputElement>document.getElementsByName("login")[0]
                    console.log(elem_login.value)
                    
                    const elem_password = <HTMLInputElement>document.getElementsByName("password")[0]
                    console.log(elem_password.value)

                    event.preventDefault();
                }
            }
         });

         this.children.passwordField = new Field({
            className: 'authorization__login-input',
            name: 'password',
            placeholder: 'password'
         });

         this.children.loginField = new Field({
            className: 'authorization__login-input',
            name: 'login',
            placeholder: 'login'
         });
    }
    
    render() {
        return this.compile(tmpl, { })
    }
}