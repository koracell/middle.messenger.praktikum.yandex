import ChatAPI, {ChatData} from "../api/ChatAPI";
import Router from "../utils/Router";
import Store from "../utils/Store";
import AuthController from "./AuthController";

class ChatController {
  private api: ChatAPI;

  constructor() {
    this.api = new ChatAPI()
  }

  async create(data: ChatData) {
    console.log('data', data)
    const response: any = await this.api.create(data);

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }
  }

  async get() {
      const response: any = await this.api.get()
  
      if (response.status !== 200) {
        console.log(`Неуспешный ответ. Код ошибки: ${response.status}`)
      }

      const chats = response.response
      
      Store.set('chats', chats)
  }

  async addUser(data: any) {
    const response: any = await this.api.putUser(data)
    console.log('Add user response', response.response)

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }
  }

  async deleteUser(data: any) {
    const response: any = await this.api.deleteUser(data)
    console.log('Delete user response', response.response)

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }
  }

  async setCurrentChat(current_chat: any) {
    Store.set('activeChat', current_chat)
  }

  async getChatUsers(id: any) {
    const response: any = await this.api.getChatUsers(id)

    const participants = response.response
    const activeChat = await Store.getState().activeChat
    Store.set('activeChat', {...activeChat, participants})


    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }
  }

  async getChatToken(id: any) {
    const response: any = await this.api.getChatToken(id)

    const token = response.response.token
    const activeChat = await Store.getState().activeChat

    if (activeChat) {
      Store.set('activeChat', {...activeChat, token})
    } else {
      Store.set('activeChat.token', token)
    }
    

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }
  }

  async updateAvatar(data: any) {
    const response: any = await this.api.putAvatar(data);

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }

    console.log(response.response)
    
    Router.__instance.go("/chats")
  }

}

export default new ChatController();