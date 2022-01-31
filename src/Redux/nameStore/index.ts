import {TODO_TYPE} from "./contains";
import {actionInterfece, initialStateInterfece} from '../../types/ContainerTypes'

const initialState: initialStateInterfece = {
    list: [],
    status: 'loading',
    error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: actionInterfece) {
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
            const newList = state.list.filter((item: any) => item.login.uuid !== action.payload);
            return {...state, list: newList}
        }
        case (TODO_TYPE.CHANGE_NAME) : {
            const newList = state.list.map((item: any) => {
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