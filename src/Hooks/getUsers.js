import { useEffect, useState } from 'react';

async function useGetUser(value) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const get = async () => {
      const axios = require('axios');
      try {
        const users = await axios.get(`https://randomuser.me/api/?results=${value}`);
        setData(users.data.results);
        setStatus('success');
        setError(null);
      } catch (error) {
        setData([]);
        setStatus('error');
        setError(error.response.data.error)
      }
    }
    get();
  }, []);

  if (status === 'error' || status === 'success');

  return {data, status, error};
};

export default useGetUser;
