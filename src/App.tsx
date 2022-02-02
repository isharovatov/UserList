import React, { useEffect } from "react";
import SuccessContent from "./components/SuccessContent";
import {useDispatch, useSelector } from "react-redux";
import {getAllItem, getItem, getLimitItem} from './Redux/nameStore/action'
import { RootState } from "./Redux/index";

export default function App(): any {
  const dispatch = useDispatch();
  const store = useSelector((state:RootState) => state);
  const status = useSelector((state:RootState) => state.status);
  const error = useSelector((state:RootState) => state.error);
  console.log(store);

  useEffect(() => {
    dispatch(getAllItem());
    dispatch(getItem(2));
    dispatch(getLimitItem({limit: 3, offset:0}))
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

  