import ChatAPI, {ChatData} from "../api/ChatAPI";
import Route from "../utils/Route";
import Router from "../utils/Router";
import Store from "../utils/Store";

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
        throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
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

  setCurrentChat(current_chat: any) {
    Store.set('activeChat', current_chat)
  }
}

export default new ChatController();