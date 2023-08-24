interface WatchListItems {
  list: any[];
  error:null,
  loader:boolean,
}

const ADD_LIST = 'ADD_LIST';
const REMOVE_LIST = 'REMOVE_LIST';

interface AddListAction {
  type: typeof ADD_LIST;
  payload: any;
}

interface RemoveListAction {
  type: typeof REMOVE_LIST;
  payload: any;
}

type WatchListActionTypes = AddListAction | RemoveListAction;

const defaultValue: WatchListItems = {
  list: [],
  error:null,
  loader:false,
};

export const watchListReducer = (state: WatchListItems = defaultValue, action: WatchListActionTypes): WatchListItems => {
  switch (action.type) {
    case ADD_LIST:
      return { ...state, loader: false, error:null , list: [...state.list, action.payload] };
    case REMOVE_LIST:
      return { ...state, loader: false, error:null, list: state.list.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export const action_add_list = (payload: any): AddListAction => ({ type: ADD_LIST, payload });
export const action_remove_list = (payload: any): RemoveListAction => ({ type: REMOVE_LIST, payload });
