import { AuthorizationPage } from './pages/authorization/authorization'
import { RegistrationPage } from './pages/registration/registration'
import ChatsPage from './pages/chats/chats'
import ProfilePage from './pages/profile/profile'
import { ErrorPage } from './pages/error/error'
import Router from './utils/Router'
import AuthController from './controllers/AuthController'
import ChatController from './controllers/ChatController'
import Store from './utils/Store'
import { withActiveChat, withChats, withSocket, withUser } from './utils/connect'
import { SocketBuilder } from './utils/socketBuilder'

const router = new Router("#root");


getAllResourses().then(() => {
    if (Store.getState().currentUser) {
        const activeChat = Store.getState().chats[0]
    
        ChatController.getChatToken(activeChat.id).then(async () => {
            await ChatController.getChatUsers(activeChat.id)
            
            const socket = new SocketBuilder(
                await Store.getState().currentUser!.id,
                activeChat.id,
                await Store.getState().activeChat.token,
            )
            
            Store.set('socket', socket.socket);
    
            ChatController.setCurrentChat(activeChat)
        }) 
    }

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
    try {
        await AuthController.fetchUser()
        await ChatController.get()
    } catch (error) {
        console.log(error);
    }
    
}