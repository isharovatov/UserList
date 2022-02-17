import { getAllUsers, getUser, getLimitUser, addUser, deleteUser, editUser, uploadImg, getImg, auth } from './service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInterfece, changesNameInterfece, getLimitUserInterfece } from '../../types/ContainerTypes';

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
  async (data: getLimitUserInterfece) => {
    const response = await getLimitUser(data);
    return response;
  }
);

export const addItem = createAsyncThunk(
  'post_add_user',
  async (data: userInterfece) => {    
    const response = await addUser(data);
    return response;
  }
);

export const deleteItem = createAsyncThunk(
  'post_delete_user',
  async (userId: string) => {
    const response = await deleteUser(userId);
    return response;
  }
);

export const editItem = createAsyncThunk(
  'post_edit_user',
  async (data: changesNameInterfece) => {    
    const response = await editUser(data);
    return response;
  }
);

export const uploadImage = createAsyncThunk(
  'post_upload_image',
  async (data: any) => {
    console.log(data);
    const response = await uploadImg(data);
    console.log(response);
    
    return response;
  }
);

export const getImage = createAsyncThunk(
  'get_image',
  async (data: any) => {
    const response = await getImg(data);
    return response;
  }
);

export const authItem = createAsyncThunk(
  'get_image',
  async (data: any) => {
    const response = await auth(data);
    return response;
  }
);
