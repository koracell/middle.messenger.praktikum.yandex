import {Indexed, isEqual, set} from './helpers'
import EventBus from "./event_bus";

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Indexed= {}

  public getState() {
    return this.state
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  };
}

const store = new Store();

export const withStore = (mapStateToProps: (state: any) => Record<string, unknown>) => (Component: any) => {
  let state: any;

  return class extends Component {
    constructor(props: any) {
      // state = mapStateToProps(store.getState());  
      state = store.getState()
      
      
      super({...props, ...state});

      store.on(StoreEvents.Updated, ()=> {
        // const newState = mapStateToProps(store.getState());
        const newState = store.getState();

        if (!isEqual(state, newState)) {
          this.setProps({
            ...newState
          })
        }
      })
    }
  }
}

export default store;