import {buildHtmlAuthorization} from "./pages/authorization/authorization.tmpl"
import {buildHtmlRegistration} from "./pages/registration/registration.tmpl"
import {buildHtmlChats} from "./pages/chats/chats.tmpl"
import {buildHtmlProfile} from "./pages/profile/profile.tmpl"
import './pages/error/error.scss'
import tmpl_error from './pages/error/error.hbs'

const root = document.getElementById('root')

const current_path = window.location.pathname

switch(current_path) {
    case '/registration':
        root.innerHTML = buildHtmlRegistration();
        break;
    case '/authorization':
        root.innerHTML = buildHtmlAuthorization();
        break;
    case '/chats':
        root.innerHTML = buildHtmlChats();
        break;
    case('/profile'):
        root.innerHTML = buildHtmlProfile();
        break;
    case('/500'):
        root.innerHTML = tmpl_error({errorStatus: '500', errorMessage: 'Мы уже фиксим'});
        break;
    case('/404'):
        root.innerHTML = tmpl_error({errorStatus: '400', errorMessage: 'Не туда попали'});
        break;
    default:
        window.location = '/authorization'
        break;
  }