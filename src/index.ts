import { renderDOM } from './utils/renderDOM'
import { AuthorizationPage } from './pages/authorization/authorization'
import { RegistrationPage } from './pages/registration/registration'
import { ChatsPage } from './pages/chats/chats'
import { ProfilePage } from './pages/profile/profile'

import './pages/error/error.scss'
import tmpl_error from './pages/error/error.hbs'

const root: HTMLElement = document.getElementById('root')

const current_path: string = window.location.pathname

switch(current_path) {
    case '/registration':
        renderDOM('#root', new RegistrationPage())
        break;
    case '/authorization':
        renderDOM('#root', new AuthorizationPage())
        break;
    case '/chats':
        renderDOM('#root', new ChatsPage())
        break;
    case('/profile'):
        renderDOM('#root', new ProfilePage())
        break;
    case('/500'):
        root.innerHTML = tmpl_error({errorStatus: '500', errorMessage: 'Мы уже фиксим'});
        break;
    case('/404'):
        root.innerHTML = tmpl_error({errorStatus: '400', errorMessage: 'Не туда попали'});
        break;
    default:
        window.location.href = '/authorization'
        break;
  }