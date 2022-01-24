import React from "react";
import './UserContainer.css'

const UserContainer = ({ item, idx, handelDelete, onOpenModal }) => {
  return (
    <div key={item.login.uuid} className="UserContainer">
      <img src={item.picture.thumbnail} alt="Avatar" />
      <span onClick={() => handelDelete(item.login.uuid)}>удалить</span>
      <span onClick={() => onOpenModal(item.name.first, idx)}>
        {item.name.first}
      </span>
      <span>{item.email}</span>
    </div>
  );
};

export default UserContainer;