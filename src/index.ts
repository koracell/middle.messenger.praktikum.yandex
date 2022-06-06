import { AuthorizationPage } from './pages/authorization/authorization'
import { RegistrationPage } from './pages/registration/registration'
import { ChatsPage } from './pages/chats/chats'
import ProfilePage from './pages/profile/profile'
import { ErrorPage } from './pages/error/error'
import Router from './utils/Router'
import AuthController from './controllers/AuthController'

try {
    AuthController.fetchUser();    
} catch (error) {
    console.log('Error fetching user', error)
}


const router = new Router("#root");

router
    .use("/authorization", AuthorizationPage)
    .use("/registration", RegistrationPage)
    .use("/chats", ChatsPage)
    .use("/profile", ProfilePage)
    .use("/500", ErrorPage)
    .use("/404", ErrorPage)
    .use("/", AuthorizationPage)
    .start()