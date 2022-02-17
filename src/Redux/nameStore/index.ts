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
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.POST_ADD_USER.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.POST_ADD_USER.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.POST_DELETE_USER.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.POST_DELETE_USER.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.POST_DELETE_USER.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.POST_EDIT_USER.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.POST_EDIT_USER.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.POST_EDIT_USER.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.POST_UPLOAD_IMAGE.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.POST_UPLOAD_IMAGE.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.POST_UPLOAD_IMAGE.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_IMAGE.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_IMAGE.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_IMAGE.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.AUTH.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.AUTH.SUCCESS, (state, action: actionInterfece) => {    
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.AUTH.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })
})

export default todosReducer;