import {TODO_TYPE} from "./contains";

const initialState = {
    list: [],
    status: 'loading',
    error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case TODO_TYPE.GET_ALL_ITEM.START : {
            return {...state, status: 'loading'}
        }
        case TODO_TYPE.GET_ALL_ITEM.SUCCESS : {
            return {...state, list: [...action.payload], status: 'success'}
        }
        case TODO_TYPE.GET_ALL_ITEM.ERROR : {
            return {
                ...state,
                status: 'error',
                error: action.payload
            }
        }
        case (TODO_TYPE.DELETE_USER) : {
            const newList = state.list.filter(item => item.login.uuid !== action.payload);
            return {...state, list: newList}
        }
        case (TODO_TYPE.CHANGE_NAME) : {
            const newList = state.list.map(item => {
                if (item.login.uuid === action.payload.data.id) {
                  return {
                    ...item,
                     name: {
                      ...item.name,
                      first: action.payload.data.newName
                     }
                  }
                } 
                return item;
              })
              return {...state, list: newList}
        }
        default:
            return state;
    }
}