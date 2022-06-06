import Block from '../../components/block'
import { Field } from '../../components/field/field';
import { Button } from '../../components/button/button';
import { withStore } from '../../utils/Store';

import tmpl from './profile.hbs'
import './profile.scss';

class ProfilePage extends Block {
    constructor() {
        super();
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
            className: 'profile-form__input'
        });

        this .children.emailField = new Field({
            name: 'email',
            placeholder: 'email',
            className: 'profile-form__input'
        });

        this.children.phoneField = new Field({
            name: 'phone',
            placeholder: 'phone',
            className: 'profile-form__input'
        });

        this.children.button = new Button({
            name: 'save',
            className: 'profile-form__button'
        });
    }
    
    render() {
        return this.compile(tmpl, { 
            avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        })
    }
}

const withUser = withStore((state) => ({...state.currentUser}))

export default withUser(ProfilePage)