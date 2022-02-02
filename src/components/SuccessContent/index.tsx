import React from "react";
import {useState} from "react";
import Modal from "../Modal";
import UserContainer from "../UserContainer";
import { useSelector, useDispatch } from "react-redux";
import {deleteUser, changeName, getAllItem, addItem} from '../../Redux/nameStore/action'
import { RootState } from "../../Redux/index";

const SuccessContent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputBirthdate, setInputBirthdate] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseItemIdx, setChooseItemIdx] = useState('');
  const users = useSelector((state:RootState) => state.list);  

  const handelInput = (e: React.FormEvent<HTMLInputElement>, setState: any) => {
    setState(e.currentTarget.value);
  };

  const handelDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  const clearSearch = () => {
    setChooseItemIdx('');
    setInputValue("");
  };

  const onOpenModal = (id: string) => {
    setChooseItemIdx(id);
    setIsOpenModal(true);
  };

  const onContinue = (item: any, name: string) => {
    dispatch(changeName({id: item.userId, newName: name}));
    setIsOpenModal(false)
  };

  const onRefresh = () => {
    dispatch(getAllItem());
    clearSearch();
  };

  const onAddUser = () => {
    const user = {
      id: inputId,
      firstName: inputFirstName,
      lastName: inputLastName,
      birthdate: inputBirthdate,
      email: inputEmail,
    }
    dispatch(addItem(user))
  }

  return (
    <div className="root">
      <div>
        <input placeholder="id" value={inputId} onInput={(e) => handelInput(e, setInputId)}/>
        <input placeholder="first name" value={inputFirstName} onInput={(e) => handelInput(e, setInputFirstName)}/>
        <input placeholder="last name" value={inputLastName} onInput={(e) => handelInput(e, setInputLastName)}/>
        <input placeholder="birthdate" value={inputBirthdate} onInput={(e) => handelInput(e, setInputBirthdate)}/>
        <input placeholder="email" value={inputEmail} onInput={(e) => handelInput(e, setInputEmail)}/>
        <button onClick={onAddUser}>add user</button>
      </div>
      <div>
        <button onClick={onRefresh}>загрузить еще</button>
        <input value={inputValue} onInput={(e) => handelInput(e, setInputValue)} />  
      </div>
      {users?.map((item: any) => {
        if (item?.firstname.toLowerCase().includes(inputValue.toLowerCase()))
          return (
            <UserContainer
              item={item}
              handelDelete={handelDelete}
              onOpenModal={onOpenModal}
              key={item.id}
            />
          );
      })}
      <Modal
        isOpen={isOpenModal}
        value={users.filter((item: any) => item.userId === chooseItemIdx)?.[0]?.name.first}
        onClose={() => setIsOpenModal(false)}
        onContinue={(name: string) => onContinue(users.filter((item: any) => item.userId === chooseItemIdx)?.[0], name)}
      />
    </div>
  );
};

export default SuccessContent;
