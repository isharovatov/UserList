import React, { useEffect } from "react";
import SuccessContent from "./components/SuccessContent";
import { useDispatch, useSelector } from "react-redux";
import {getAllItem} from './Redux/nameStore/action'

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.store)

  useEffect(() => {
    dispatch(getAllItem())
  }, []);

  switch (data.status) {
    case "error":
      return <div>{data.error}</div>;
    case "loading":
      return <div>loader</div>;
    case "success":
      return <SuccessContent />;
    default:
      return null;      
  }
}

  