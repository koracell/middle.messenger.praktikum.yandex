import {buildHtmlAuthorization} from "./pages/authorization/authorization.tmpl"
import {buildHtmlRegistration} from "./pages/registration/registration.tmpl"
import {buildHtmlChats} from "./pages/chats/chats.tmpl"
import {buildHtmlProfile} from "./pages/profile/profile.tmpl"
import './pages/error/error.scss'
import tmpl_error from './pages/error/error.hbs'

const root = document.getElementById('root')

const current_path = window.location.pathname

if(current_path == '/registration') {
    root.innerHTML = buildHtmlRegistration();
} else if(current_path == '/authorization') {
    root.innerHTML = buildHtmlAuthorization();
} else if(current_path == '/chats') {
    root.innerHTML = buildHtmlChats();
} else if(current_path == '/profile') {
    root.innerHTML = buildHtmlProfile();
} else if(current_path == '/500') {
    root.innerHTML = tmpl_error({errorStatus: '500', errorMessage: 'Мы уже фиксим'});
} else if(current_path == '/404') {
    root.innerHTML = tmpl_error({errorStatus: '400', errorMessage: 'Не туда попали'});
} else {
    window.location = '/authorization'
}