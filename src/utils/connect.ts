import Block from "../components/block";
import store, { StoreEvents } from "./Store";
import { isEqual } from "./helpers";

function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function(Component: typeof Block) {
    return class extends Component {
      constructor(props) {
          // сохраняем начальное состояние
          let state = mapStateToProps(store.getState());
          super({...props, ...state});

          // подписываемся на событие
            store.on(StoreEvents.Updated, () => {
                  // при обновлении получаем новое состояние
                  const newState = mapStateToProps(store.getState());
                    // если что-то из используемы§х данных поменялось, обновляем компонент
                  // if (!isEqual(state, newState)) {
                    this.setProps({...newState});
                  // }

                  // не забываем сохранить новое состояние
                  state = newState;
            });
        }
    }
  }
}

export const withUser = connect((state) => ({user: state.currentUser}));
export const withChats = connect((state) => ({chats: state.chats}));
export const withActiveChat = connect((state) => ({activeChat: state.activeChat}));
export const withSocket = connect((state) => ({socket: state.socket}));
