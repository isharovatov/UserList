import axios from 'axios';

export const getAllUsers = async () => {
    const response = await axios.get(`http://localhost:8080/api/users`);
    return response.data;
};

export const getUser = async (query: number) => {
    const response = await axios.get(`http://localhost:8080/api/users=${query}`);
    return response.data
};

export const getLimitUser = async (data: any) => {    
    const response = await axios.get(`http://localhost:8080/api/paginateUsers/limit=${data.limit}&offset=${data.offset}`);
    return response.data.users
};

export const addUser = async (data: any) => {    
    const response = await axios.post(`http://localhost:8080/api/createUser/id=${data.id}&firstname=${data.firstname}&lastname=${data.lastname}&birthDate=${data.birthDate}&email=${data.email}`);    
    return response
};

export const deleteUser = async (userId: string) => {  
    console.log(userId);
    const response = await axios.delete(`http://localhost:8080/api/deleteUser/${userId}`);    
    console.log(response);
    return response
};

export const editUser = async (data: any) => {    
    const response = await axios.post(`http://localhost:8080/api/editUser/userId=${data.id}&firstname=${data.firstname}&lastname=${data.lastname}`);
    return response
};

export const uploadImg = async (data: any) => {  
    console.log(data);  
    const response = await axios.post(`http://localhost:8080/api/upload-user-image`, data);
    return response
};

export const getImg = async (data: any) => {         
    const response = await axios.get(`http://localhost:8080/api/users/getImage?path=:${data}`);
    console.log('response', response);
    return response
};

export const auth = async (data: any) => {        
    console.log(data);
    const response = await axios.post(`http://localhost/auth/users/`, data);
    console.log('response', response);
    return response
};
