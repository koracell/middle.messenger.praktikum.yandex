import Block from '../../components/block'
import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field';

import tmpl from './registration.hbs'

import './registration.scss';

export class RegistrationPage extends Block {
    constructor() {
        super();
    }

    initChildren() {
        this.children.button = new Button({
            name: 'Create account',
            className: 'registration__button-button',
            events: {
               click: function(event: any) {
                  const elem_first_name = <HTMLInputElement>document.getElementsByName("first_name")[0]
                  console.log(elem_first_name.value)
                  
                  const elem_second_name = <HTMLInputElement>document.getElementsByName("second_name")[0]
                  console.log(elem_second_name.value)

                  const elem_login = <HTMLInputElement>document.getElementsByName("login")[0]
                  console.log(elem_login.value)

                  const elem_email = <HTMLInputElement>document.getElementsByName("email")[0]
                  console.log(elem_email.value)

                  const elem_password = <HTMLInputElement>document.getElementsByName("password")[0]
                  console.log(elem_password.value)

                  const elem_phone = <HTMLInputElement>document.getElementsByName("phone")[0]
                  console.log(elem_phone.value)
                  
                  event.preventDefault();
               }
            }
         });

         this.children.firstNameField = new Field({
            name: 'first_name',
            placeholder: 'first name',
            className: 'registration__firstName-input',
            events: {
               blur: function(event: any) {
                   const value = event.target.value

                   if (/^[A-ZА-Я][A-Za-zА-Яа-я-]{1,20}$/.test(value)) {
                       event.target.classList.remove('input-invalid')
                   } else {
                       event.target.classList.add('input-invalid')
                   }

               }
           }
         });

         this.children.secondNameField = new Field({
            name: 'second_name',
            placeholder: 'second name',
            className: 'registration__secondName-input',
            events: {
               blur: function(event: any) {
                   const value = event.target.value

                   if (/^[A-ZА-Я][A-Za-zА-Яа-я-]{1,20}$/.test(value)) {
                       event.target.classList.remove('input-invalid')
                   } else {
                       event.target.classList.add('input-invalid')
                   }

               }
           }
         });

         this.children.loginField = new Field({
            name: 'login',
            placeholder: 'login',
            className: 'registration__login-input',
            events: {
               blur: function(event: any) {
                   const value = event.target.value

                   if (/^[A-Za-z][A-Za-z0-9_-]{2,20}$/.test(value)) {
                       event.target.classList.remove('input-invalid')
                   } else {
                       event.target.classList.add('input-invalid')
                   }

               }
           }
         });

         this.children.emailField = new Field({
            name: 'email',
            placeholder: 'email',
            className: 'registration__email-input',
            events: {
               blur: function(event: any) {
                   const value = event.target.value

                   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                       event.target.classList.remove('input-invalid')
                   } else {
                       event.target.classList.add('input-invalid')
                   }

               }
           }
         });

         this.children.passwordField = new Field({
            name: 'password',
            placeholder: 'password',
            className: 'registration__password-input',
            events: {
               blur: function(event: any) {
                   const value = event.target.value

                   if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,40}$/.test(value)) {
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
            className: 'registration__phone-input',
            events: {
               blur: function(event: any) {
                   const value = event.target.value

                   if (/^[+0-9][0-9]{8,15}$/.test(value)) {
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