import axios from 'axios';

export const getAllUsers = async () => {
    const response = await axios.get(`http://localhost:8080/api/users`);
    return response.data;
};

export const getUser = async (query: number) => {
    const response = await axios.get (`http://localhost:8080/api/users=${query}`);
    return response.data
}
