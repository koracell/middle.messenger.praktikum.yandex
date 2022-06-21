import { AuthorizationPage } from './pages/authorization/authorization'
import { RegistrationPage } from './pages/registration/registration'
import ChatsPage from './pages/chats/chats'
import ProfilePage from './pages/profile/profile'
import { ErrorPage } from './pages/error/error'
import Router from './utils/Router'
import AuthController from './controllers/AuthController'
import ChatController from './controllers/ChatController'
import store from './utils/Store'
import { withActiveChat, withChats, withSocket, withUser } from './utils/connect'

const router = new Router("#root");


getAllResourses().then(() => {
    const current_chat = store.getState().chats[0]
    ChatController.setCurrentChat(current_chat)
    router
            .use("/authorization", AuthorizationPage)
            .use("/registration", RegistrationPage)
            .use("/chats", withSocket(withActiveChat(withChats(ChatsPage))))
            .use("/profile", withUser(ProfilePage))
            .use("/500", ErrorPage)
            .use("/404", ErrorPage)
            .use("/", AuthorizationPage)
            .start()
})

async function getAllResourses() {
    await AuthController.fetchUser()
    await ChatController.get()
}