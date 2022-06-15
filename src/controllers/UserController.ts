import UserAPI, { UserUpdateData } from "../api/UserAPI";
import AuthController from "./AuthController";
import Router from "../utils/Router";

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI()
  }

  async update(data: UserUpdateData) {
    const response: any = await this.api.update(data);

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }

    AuthController.fetchUser().then(() => {
      Router.go("/profile")
    })

  }

  async updateAvatar(data) {
    const response: any = await this.api.putAvatar(data);

    if (response.status !== 200) {
      throw new Error(`Неуспешный ответ. Код ошибки: ${response.status}: ${JSON.parse(response.response).reason}`)
    }

    console.log(response.response)
    
    AuthController.fetchUser().then(() => {
      Router.go("/profile")
    })

  }
}

export default new UserController();