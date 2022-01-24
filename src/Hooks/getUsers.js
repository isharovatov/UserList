const axios = require('axios');

async function useGetUser(value) {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${value}`);
    const data = response.data.results;

    if (response.status === 200) 
    return   {
      data: data,
      status: 'success',
      error: '',
    }
  } catch (error) {
    return   {
      data: null,
      status: 'error',
      error: error.response.data.error,
    }
  } 

  return   {
    data: [],
    status: 'loading',
    error: '',
  } 
};

export default useGetUser;
