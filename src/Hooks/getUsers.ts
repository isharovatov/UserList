export {}
// import { useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
// // import { postUsers } from "../Redux/slice";

// function useGetUser(value: any) {
//   const dispatch = useDispatch();
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('loading');

//   const reFetch = async () => {
//     const axios = require('axios');
//     setStatus('loading')
//     try {
//       const users = await axios.get(`https://randomuser.me/api/?results=${value}`);
//       setData(users.data.results);
//       setStatus('success');
//       setError(null);
//     } catch (error) {
//       setData([]);
//       setStatus('error');
//       setError(error.response.data.error)
//     }
//   };

//   useEffect(() => {
//     reFetch();
//   }, []);

//   useEffect(() => {
//     if (status === 'success') {
//       dispatch(postUsers(data));
//     }
//   })

//   return {status, error, reFetch};
// };

// export default useGetUser;

