import React from "react";
import './UserContainer.css'

const UserContainer = ({ item, idx, handelDelete, onOpenModal }) => {
  return (
    <div key={item.login.uuid} className="UserContainer">
      <img src={item.picture.thumbnail} alt="Avatar" />
      <button onClick={() => handelDelete(item.login.uuid)}>удалить</button>
      <span onClick={() => onOpenModal(item.login.uuid)}>
        {item.name.first}
      </span>
      <span>{item.email}</span>
    </div>
  );
};

export default UserContainer;