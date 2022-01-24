import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "./Redux/slice";
import useGetUser from "./Hooks/getUsers";
import SuccessContent from "./components/SuccessContent";

export default function App() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState({
    data: [],
    status: 'loading',
    error: ''
  });
  const getUser = useGetUser(30);

  useEffect(() => {
    if (users.status !== 'loading') return;
    handelUpdate();
  });

  const handelUpdate = async () => {
    // await getUser(resp => console.log(resp))
    getUser.then(resp => {
      setUsers(resp);
      dispatch(postUsers(resp.data))
    });
  };

  switch (users.status) {
    case "error":
      return <div>{users.error}</div>;
    case "loading":
      return <div>loader</div>;
    case "success":
      return <SuccessContent handelUpdate={handelUpdate}/>;
    default:
      return null;
  }
}

  