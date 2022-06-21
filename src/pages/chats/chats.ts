import Block from '../../components/block'
import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field'
import { ChatItem } from '../../components/chat_item/chat_item'
import Validator from '../../utils/validator'
import AuthController from '../../controllers/AuthController'

import tmpl from './chats.hbs'
import './chats.scss';
import store from '../../utils/Store'
import { Modal } from '../../components/modal/modal'
import ChatController from '../../controllers/ChatController'
import { ModalAddDeleteUser } from '../../components/modalAddDeleteUser/modal'
import { SocketBuilder } from '../../utils/socketBuilder'
import Store from '../../utils/Store'

export default class ChatsPage extends Block {
    constructor(propsStore: any) {
        super(propsStore);
    }

    initChildren() {
        this.children.logout = new Button({
            name: 'Logout',
            className: 'logout button',
            events: {
               click: function(event: any) {
                  AuthController.logout();
                  
                  event.preventDefault();
               }
            }
         });

         this.children.createChat = new Button({
            name: 'Create chat',
            className: 'create-chat button',
            events: {
               click: function(event: any) {
                  const modal = document.querySelector('.modal__chat-create')
                  modal.style.display = 'flex';
                  event.preventDefault();
               }
            }
         });

         this.children.addUserToChat = new Button({
            name: 'Add user to chat',
            className: 'add-user-to-chat button',
            events: {
               click: function(event: any) {                 
                  const modal = document.querySelector('.modal__add-user-create')
                  modal.style.display = 'flex';

                  event.preventDefault();
               }
            }
         });

         this.children.deleteUserFromChat = new Button({
            name: 'Delete user to chat',
            className: 'delete-user-to-chat button',
            events: {
               click: function(event: any) {                 
                  const modal = document.querySelector('.modal__delete-user-create')
                  modal.style.display = 'flex';

                  event.preventDefault();
               }
            }
         });

        this.children.messageField = new Field({
            name: 'message',
            placeholder: 'message',
            className: 'chat-view__form-message-input',
            events: {
                blur: function(event: any) {
                    const value = event.target.value

                     if ((new Validator).testMessage(value)) {
                        event.target.classList.remove('input-invalid')
                    } else {
                        event.target.classList.add('input-invalid')
                    }
                }
            }
         });

         this.children.messageButton = new Button({
            name: 'send',
            className: 'chat-view__form-message-button',
            events: {
                click: function(event: any) {
                    const message = <HTMLInputElement>document.getElementsByName("message")[0]                    
                    Store.getState().socket.send(
                        JSON.stringify({
                            content: message.value,
                            type: 'message',
                        })
                    )
                }
            }
         });
        
         this.children.modalCreateChat = new Modal({
            modalClass: 'modal__chat-create',
            titleField: new Field({
                name: 'chat-name',
                placeholder: 'Сhat name',
                className: 'chats-name__input'
            }),
            createChat: new Button({
                name: 'Create chat',
                className: 'create-chat button',
                events: {
                   click: function(event: any) {
                    const chat_name = <HTMLInputElement>document.getElementsByName("chat-name")[0]

                    const chat = {
                      title: chat_name.value 
                    }

                    ChatController.create(chat).then(() => {
                        const modal = document.querySelector('.modal__chat-create')
                        modal.style.display = 'none';
                    })

                    event.preventDefault();
                   }
                }
            })
         });

         this.children.modalAddUserToChat = new ModalAddDeleteUser({
            modalClass: 'modal__add-user-create',
            userIdField: new Field({
                name: 'user-id',
                placeholder: 'User id',
                className: 'user-id__input'
            }),
            chatIdField: new Field({
                name: 'chat-id',
                placeholder: 'Chat id',
                className: 'chat-id__input'
            }),
            
            button: new Button({
                name: 'Add user to chat',
                className: 'add-user-to-chat button',
                events: {
                   click: function(event: any) {
                    const user_id = <HTMLInputElement>document.getElementsByName("user-id")[0]
                    const chat_id = <HTMLInputElement>document.getElementsByName("chat-id")[0]

                    const data = {
                      users: [user_id.value],
                      chatId: chat_id.value
                    }

                    ChatController.addUser(data).then(() => {
                        const modal = document.querySelector('.modal__add-user-create')
                        modal.style.display = 'none';
                    })

                    event.preventDefault();
                   }
                }
            })
         });

         this.children.modalDeleteUserFromChat = new ModalAddDeleteUser({
            modalClass: 'modal__delete-user-create',
            userIdField: new Field({
                name: 'user-id',
                placeholder: 'User id',
                className: 'user-id__input'
            }),
            chatIdField: new Field({
                name: 'chat-id',
                placeholder: 'Chat id',
                className: 'chat-id__input'
            }),
            
            button: new Button({
                name: 'Delete user to chat',
                className: 'delete-user-to-chat button',
                events: {
                   click: function(event: any) {
                    const user_id = <HTMLInputElement>document.getElementsByName("user-id")[0]
                    const chat_id = <HTMLInputElement>document.getElementsByName("chat-id")[0]

                    const data = {
                      users: [user_id.value],
                      chatId: chat_id.value
                    }

                    ChatController.deleteUser(data).then(() => {
                        const modal = document.querySelector('.modal__delete-user-create')
                        modal.style.display = 'none';
                    })

                    event.preventDefault();
                   }
                }
            })
         });
    }

    componentDidMount() {

    }

    componentDidUpdate(_oldProps: any, _newProps: any): boolean {
        return true;
    }
    
    render() {
        let chatList: any = []

        this.props?.chats.forEach(function(item, _i, _arr) {
            chatList.push(new ChatItem({
                ...item,
                events: {
                    click: async function(event: any) {
                        const activeChat = store.getState().chats.find(x => x.id === item.id)
                        ChatController.getChatToken(activeChat.id)
                        ChatController.setCurrentChat(activeChat)

                        await ChatController.getChatUsers(activeChat.id); 
                        await ChatController.getChatToken(activeChat.id);

                        const socket = new SocketBuilder(
                            await Store.getState().currentUser!.id,
                            await activeChat.id,
                            await Store.getState().activeChat.token,
                        )
                        
                        Store.set('socket', socket.socket);
                    }
                 }
            }))
        })

        this.children.searchField = new Field({
            name: 'search',
            placeholder: 'search',
            className: 'chats-search__input'
         });

        this.children.chatsList = chatList;
    
        return this.compile(tmpl, { 
            current_chat: this.props.activeChat,
            messages: Store.getState().activeChat.messages
         })
    }
}