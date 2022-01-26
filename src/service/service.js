import axios from 'axios';

export const get = async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=30`);
    return response.data.results;
}
