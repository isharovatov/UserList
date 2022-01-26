import {TODO_TYPE} from "./contains";
import {get} from "./service"

export const getAllItem = () => async (dispatch) => {
    try {
        dispatch({
            type: TODO_TYPE.GET_ALL_ITEM.START
        })
        const list = await get()
        dispatch({
            type: TODO_TYPE.GET_ALL_ITEM.SUCCESS,
            payload: list
        })
    } catch (e) {
        dispatch({
            type: TODO_TYPE.GET_ALL_ITEM.ERROR,
            payload: e.response.status
        })
    }
};

export const deleteUser = (deleteId) => ({
    type: TODO_TYPE.DELETE_USER,
    payload: deleteId
});

export const changeName = (data) => ({
    type: TODO_TYPE.CHANGE_NAME,
    payload: {data}
});
