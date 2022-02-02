import {TODO_TYPE} from "./contains";
import {getAllUsers, getUser, getLimitUser, addUser} from "./service"
import {createAsyncThunk} from '@reduxjs/toolkit'

interface changeNameInterfece {
    id: string;
    newName: string;
};

export const getAllItem = createAsyncThunk(
  'get_all_users',
  async () => {
    const response = await getAllUsers();
    return response;
  }
);

export const getItem = createAsyncThunk(
  'get_query_users',
  async (query: number) => {
    const response = await getUser(query);
    return response;
  }
);

export const getLimitItem = createAsyncThunk(
  'get_limit_users',
  async (data: any) => {
    const response = await getLimitUser(data);
    return response;
  }
);
export const addItem = createAsyncThunk(
  'post_add_user',
  async (data: any) => {
    const response = await addUser(data);
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
