import { React, useEffect, useState } from "react";
import useGetUser from "./Hooks/getUsers";
import SuccessContent from "./components/SuccessContent";

export default function App() {
  const {status, error, reFetch} = useGetUser(5000)

  switch (status) {
    case "error":
      return <div>{error}</div>;
    case "loading":
      return <div>loader</div>;
    case "success":
      return <SuccessContent reFetch={reFetch}/>;
    default:
      return null;      
  }
}

  