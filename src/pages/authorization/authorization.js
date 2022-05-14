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
            name: 'Sign in'
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