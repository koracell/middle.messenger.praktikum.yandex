import BaseAPI from './BaseAPI';

export interface UserUpdateData {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
}

export default class UserAPI extends BaseAPI {
    constructor() {
        super('/user')
    }

    update(data: UserUpdateData): Promise<unknown> {
        return this.http.put('/profile', data);
    }

    putAvatar(data): Promise<unknown> {
        return this.http.put('/profile/avatar', data, true);
    }

    putPassword(data): Promise<unknown> {
        return this.http.put('/password', data);
    }

}