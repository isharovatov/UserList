import axios from 'axios';

export const getAllUsers = async () => {
    const response = await axios.get(`http://localhost:8080/api/users`);
    return response.data;
};

export const getUser = async (query: number) => {
    const response = await axios.get(`http://localhost:8080/api/users=${query}`);
    return response.data
}

export const getLimitUser = async (data: any) => {    
    const response = await axios.get(`http://localhost:8080/api/paginateUsers/limit=${data.limit}&offset=${data.offset}`);
    return response.data.users
}

export const addUser = async (data: any) => {    
    const response = await axios.post(`http://localhost:8080//api/createUser/id=:${data.id}
    &firstname=:${data.firstname}&lastname=:${data.lastname}&birthDate=:${data.birthDate}&email=:${data.email}`);
    return response.data.users
}
