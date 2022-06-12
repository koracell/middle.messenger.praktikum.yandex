import Block from '../../components/block'
import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field'
import { ChatItem } from '../../components/chat_item/chat_item'
import Validator from '../../utils/validator'
import AuthController from '../../controllers/AuthController'

import tmpl from './chats.hbs'
import './chats.scss';
import { withStore } from '../../utils/Store'
import { Modal } from '../../components/modal/modal'
import ChatController from '../../controllers/ChatController'
import { ModalAddDeleteUser } from '../../components/modalAddDeleteUser/modal'

class ChatsPage extends Block {
    constructor(propsStore: any) {
        console.log('propsStore', propsStore)
        super(propsStore);
    }

    initChildren() {
        console.log('init props', this.children)
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
            className: 'chat-view__form-message-button'
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
        console.log(this.props?.chats)
    }
    
    render() {
        let chatList: any = []
    
        this.props?.chats.forEach(function(item, _i, _arr) {
            chatList.push(new ChatItem(item))
        })

        this.children.searchField = new Field({
            name: 'search',
            placeholder: 'search',
            className: 'chats-search__input'
         });

        this.children.chatsList = chatList;

        return this.compile(tmpl, { 
            chat: chat_active
         })
    }
}

const withChats = withStore((state) => ({...state.chats}))

export default withChats(ChatsPage)

const chat_active = {
    name: 'Silvestor Stalone',
    messages: [
        {content_type: 'text', body: 'Привет всем. Тут всплыл один вопрос. Есть ли Луна? Привет всем. Тут всплыл один вопрос. Есть ли Луна?'},
        {content_type: 'text', body: 'Привет всем. Конечно есть, я на ней играл в футбол. Привет всем. Конечно есть, я на ней играл в футбол. Привет всем. Конечно есть, я на ней играл в футбол.'},
        {content_type: 'image', body: 'https://ilounge.ua/files/uploads/new_4/sravnenie-apple-watch-6-i-se-6.jpg'},
    ],
    image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
}