import React, {FC} from "react";
import { UserContainerInterfece } from "../../types/ContainerTypes";
import './UserContainer.css'

const UserContainer: FC<UserContainerInterfece> = ({ item, handelDelete, onOpenModal }: UserContainerInterfece ) => {  

  return (
    <div key={item.userId} className="UserContainer">
      <img src={item.picture} alt="Avatar" />
      <button onClick={() => handelDelete(item.userId)}>удалить</button>
      <span onClick={() => onOpenModal(item.userId)}>
        {item.firstname}
      </span>
      <span>{item.email}</span>
    </div>
  );
};

export default UserContainer;