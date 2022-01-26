import React, { useEffect } from "react";
import SuccessContent from "./components/SuccessContent";
import { useDispatch, useSelector } from "react-redux";
import {getAllItem} from './Redux/nameStore/action'

export default function App() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.store.status);
  const error = useSelector(state => state.store.error);

  useEffect(() => {
    dispatch(getAllItem())
  }, []);

  switch (status) {
    case "error":
      return <div>{error}</div>;
    case "loading":
      return <div>loader</div>;
    case "success":
      return <SuccessContent />;
    default:
      return null;      
  }
}

  