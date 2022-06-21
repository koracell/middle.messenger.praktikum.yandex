import Store from './Store';
import { getHoursMinutes } from './getHoursMinutes';
import { isPlainObject } from './helpers';

export class SocketBuilder {
    socket: WebSocket;

    constructor(userId: number, chatId: number, token: string) {
        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

        this.socket.addEventListener('open', () => {
            console.log('Соединение установлено');
        });
      
        this.socket.addEventListener('close', event => {
          if (event.wasClean) {
            console.log('Соединение закрыто чисто');
          } else {
            console.log('Обрыв соединения');
          }
      
          console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });
      
        this.socket.addEventListener('message', event => {
          console.log('Получены данные', event.data);
          const data = JSON.parse(event.data);

          if (isPlainObject(data)) {
            if (Store.getState().activeChat.messages) {
                Store.set('activeChat.messages', [...Store.getState().activeChat.messages, {
                    ...data,
                    date: new Date(data.time as string).toLocaleDateString(),
                    time: getHoursMinutes(new Date(data.time as string)),
                }]);
            } else {
                Store.set('activeChat.messages', [{
                    ...data,
                    date: new Date(data.time as string).toLocaleDateString(),
                    time: getHoursMinutes(new Date(data.time as string)),
                }]);
            }
          }

          if (Array.isArray(data)) {
            const messages = data.map((message: any) => ({
                ...message,
                date: new Date(message.time).toLocaleDateString(),
                time: getHoursMinutes(new Date(message.time)),
            }))
                .reverse();

            Store.set('activeChat.messages', messages);
          }
        });
      
        this.socket.addEventListener('error', event => {
          console.log('Ошибка', event.message);
        });
    }
}