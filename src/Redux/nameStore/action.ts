import {TODO_TYPE} from "./contains";
import {get} from "./service"

interface changeNameInterfece {
    id: string;
    newName: string;
}

export const getAllItem = () => async (dispatch: any) => {
    try {
        dispatch({
            type: TODO_TYPE.GET_ALL_ITEM.START
        })
        const list = await get()
        dispatch({
            type: TODO_TYPE.GET_ALL_ITEM.SUCCESS,
            payload: list
        })
    } catch (e: any) {
        dispatch({
            type: TODO_TYPE.GET_ALL_ITEM.ERROR,
            payload: e.response.data.error
        })
    }
};

export const deleteUser = (deleteId: string) => ({
    type: TODO_TYPE.DELETE_USER,
    payload: deleteId
});

export const changeName = (data: changeNameInterfece) => ({
    type: TODO_TYPE.CHANGE_NAME,
    payload: {data}
});
