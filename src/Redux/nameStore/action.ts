import {TODO_TYPE} from "./contains";
import {getAllUsers, getUser} from "./service"
import {createAsyncThunk} from '@reduxjs/toolkit'

interface changeNameInterfece {
    id: string;
    newName: string;
};

export const getAllItem = createAsyncThunk(
  'todo_task_start',
  async () => {
    const response = await getAllUsers();
    return response;
  }
);

export const getItem = createAsyncThunk(
  'get_user',
  async (query: number) => {
    const response = await getUser(query);
    return response;
  }
);

export const deleteUser = (deleteId: string) => ({
    type: TODO_TYPE.DELETE_USER,
    payload: deleteId
});

export const changeName = (data: changeNameInterfece) => ({
    type: TODO_TYPE.CHANGE_NAME,
    payload: {data}
});
