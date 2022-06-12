import ChatAPI, {ChatData} from "../api/ChatAPI";
import Store from "../utils/Store";

class ChatController {
  private api: ChatAPI;

  constructor() {
    this.api = new ChatAPI()
  }

  async create(data: ChatData) {
    console.log('data', data)
    const response: any = await this.api.create(data);
    console.log('response create', response.response)

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
}

export default new ChatController();