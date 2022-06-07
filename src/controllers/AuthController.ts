import AuthAPI, { SignInData, SignUpData } from "../api/AuthAPI";
import Router from "../utils/Router";
import Store from "../utils/Store";

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

    Router.__instance.go('/chats')
  }

  async logout() {
    const response: any = await this.api.logout()

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }

    Router.__instance.go('/authorization')
  }

  async fetchUser() {
    const response: any = await this.api.read();
    const user = response.response

    if (response.status == 200) {
      Store.set('currentUser', user)  
    }

  }
}

export default new AuthController();