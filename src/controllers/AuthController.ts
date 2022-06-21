import AuthAPI, { SignInData, SignUpData } from "../api/AuthAPI";
import Router from "../utils/Router";
import { SocketBuilder } from "../utils/socketBuilder";
import Store from "../utils/Store";
import ChatController from "./ChatController";

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI()
  }

  async signUp(data: SignUpData) {
    const response: any = await this.api.signUp(data);

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }
  }

  async signIn(data: SignInData) {
    const response: any = await this.api.signIn(data);

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }

    await this.fetchUser()
    await ChatController.get()
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

    Router.__instance.go('/chats')
  }

  async logout() {
    const response: any = await this.api.logout()

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }

    Store.set('currentUser', null)
    window.store = Store

    Router.__instance.go('/authorization')
  }

  async fetchUser() {
    try {
      const response: any = await this.api.read();

      if (response.status === 200) {
        const user = response.response
        Store.set('currentUser', user)
      }
    } catch (error) {
        console.log(error);
    } finally {
        // Loading off
    }
  }
}

export default new AuthController();