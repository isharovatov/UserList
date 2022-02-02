import {TODO_TYPE} from './contains';
import {createReducer} from '@reduxjs/toolkit'
import {actionInterfece, initialStateInterfece} from '../../types/ContainerTypes'

const initialState: initialStateInterfece = {
    list: [],
    status: 'loading',
    error: {},
};
    
const todosReducer = createReducer(initialState, (builder) => {
    builder

    .addCase(TODO_TYPE.GET_ALL_ITEM.START, (state, action: actionInterfece) => {    
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_ALL_ITEM.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success', list: action.payload}
    })
    .addCase(TODO_TYPE.GET_ALL_ITEM.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_QUERY_ITEM.START, (state, action: actionInterfece) => {    
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_QUERY_ITEM.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success', list: action.payload}
    })
    .addCase(TODO_TYPE.GET_QUERY_ITEM.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_LIMIT_ITEM.START, (state, action: actionInterfece) => {    
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_LIMIT_ITEM.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success', list: action.payload}
    })
    .addCase(TODO_TYPE.GET_LIMIT_ITEM.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.POST_ADD_USER.START, (state, action: actionInterfece) => {
        console.log(state, action);
        
        // return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.POST_ADD_USER.SUCCESS, (state, action: actionInterfece) => {   
        console.log(state, action);
 
        // return {...state, status: 'success', list: action.payload}
    })
    .addCase(TODO_TYPE.POST_ADD_USER.ERROR, (state, action: actionInterfece) => {    
        console.log(state, action);

        // return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.DELETE_USER, (state, action: actionInterfece) => {
        const newList = state.list.filter((item: any) => item.login.uuid !== action.payload);
        return {...state, list: newList}
    })

    .addCase(TODO_TYPE.CHANGE_NAME, (state, action: actionInterfece) => {
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
    })
})

export default todosReducer;