import {buildHtmlAuthorization} from "./pages/authorization/authorization.tmpl"
import {buildHtmlRegistration} from "./pages/registration/registration.tmpl"
import {buildHtmlChats} from "./pages/chats/chats.tmpl"

const root = document.getElementById('root')

const current_path = window.location.pathname

if(current_path == '/registration') {
    root.innerHTML = buildHtmlRegistration();
} else if(current_path == '/authorization') {
    root.innerHTML = buildHtmlAuthorization();
} else if(current_path == '/chats') {
    root.innerHTML = buildHtmlChats();
} else {
    window.location = '/authorization'
}