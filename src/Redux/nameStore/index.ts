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
    .addCase('todo_task_start/pending', (state, action: actionInterfece) => {    
        return {...state, status: 'loading'}
    })

    .addCase('todo_task_start/fulfilled', (state, action: actionInterfece) => {    
        return {...state, status: 'success', list: action.payload}
    })

    .addCase('todo_task_start/rejected', (state, action: actionInterfece) => {    
        return {...state, status: 'loading', error: action.payload}
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