import {buildHtmlAuthorization} from "./pages/authorization/authorization.tmpl"

const root = document.getElementById('root')
root.innerHTML = buildHtmlAuthorization();