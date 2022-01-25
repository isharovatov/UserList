import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "./Redux/slice";
import useGetUser from "./Hooks/getUsers";
import SuccessContent from "./components/SuccessContent";

export default function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState([]);

  const users = useGetUser(30).then(res => {
    setData(res.data);
    setStatus(res.status);
    setError(res.error);
  });

  useEffect(() => {
    handelUpdate();
  }, []);

  const handelUpdate = async () => {
    dispatch(postUsers(data));
  };

  switch (status) {
    case "error":
      return <div>{error}</div>;
    case "loading":
      return <div>loader</div>;
    case "success":
      return <SuccessContent handelUpdate={handelUpdate}/>;
    default:
      return null;      
  }
}

  