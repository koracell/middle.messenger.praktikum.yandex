import Block from '../../components/block'
import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field';
import AuthController from '../../controllers/AuthController';
import Router from '../../utils/Router';
import Validator from '../../utils/validator';
import store from '../../utils/Store';

import tmpl from '../authorization/authorization.hbs'

import './authorization.scss';

export class AuthorizationPage extends Block {
    constructor() {
        super();
        if (store?.getState()?.currentUser) {
            return Router.__instance.go('/chats')            
        }
    }
    

    initChildren() {
        this.children.button = new Button({
            className: 'authorization__button-button',
            name: 'Sign in',
            events: {
                click: function(event: any) {
                    const elem_login = <HTMLInputElement>document.getElementsByName("login")[0]
                    const elem_password = <HTMLInputElement>document.getElementsByName("password")[0]

                    const user = {
                        login: elem_login.value,
                        password: elem_password.value 
                    }
                    
                    AuthController.signIn(user)

                    event.preventDefault();
                }
            }
         });

         this.children.logout = new Button({
            name: 'Logout',
            className: 'registration__button-button',
            events: {
               click: function(event: any) {
                  AuthController.logout();
                  
                  event.preventDefault();
               }
            }
         });

         this.children.passwordField = new Field({
            className: 'authorization__login-input',
            name: 'password',
            placeholder: 'password',
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

         this.children.loginField = new Field({
            className: 'authorization__login-input',
            name: 'login',
            placeholder: 'login',
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
    }
    
    render() {
        return this.compile(tmpl, { })
    }
}