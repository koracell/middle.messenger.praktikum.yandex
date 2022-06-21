import BaseAPI from './BaseAPI';

export interface ChatData {
  title: string
}

export default class ChatAPI extends BaseAPI {
    constructor() {
        super('/chats')
    }

    create(data: ChatData): Promise<unknown> {
        return this.http.post('/', data);
    }

    get(): Promise<unknown> {
        return this.http.get('/');
    }

    putUser(data: ChatData): Promise<unknown> {
        return this.http.put('/users', data);
    }

    deleteUser(data: ChatData): Promise<unknown> {
        return this.http.delete('/users', data);
    }

    getChatUsers(id: any) {
        return this.http.get(`/${id}/users`)
    }

    getChatToken(id) {
        return this.http.post(`/token/${id}`)
    }
}