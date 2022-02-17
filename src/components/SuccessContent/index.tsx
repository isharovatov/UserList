import React from "react";
import {useState} from "react";
import Modal from "../Modal";
import UserContainer from "../UserContainer";
import { useSelector, useDispatch } from "react-redux";
import {deleteItem, editItem, getAllItem, addItem, uploadImage, getImage, authItem} from "../../Redux/nameStore/action";
import { RootState } from "../../Redux/index";
import { userInterfece, changesNameInterfece } from "../../types/ContainerTypes";

const SuccessContent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [inputId, setInputId] = useState(1);
  const [inputFirstName, setInputFirstName] = useState("Fred");
  const [inputBirthdate, setInputBirthdate] = useState(Date.now());
  const [inputLastName, setInputLastName] = useState("Keep");
  const [inputEmail, setInputEmail] = useState("keep@mail.ru");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseItemIdx, setChooseItemIdx] = useState("");
  const [email, setEmail] = useState('hgjdfngjfd@mail.ru')
  const [password, setPassword] = useState('gnfdjkngkjdf')
  const [username, setUsername] = useState('John')

  const users = useSelector((state:RootState) => state.list);

  const selectedFile: any = document.getElementById("input");
  const data = new FormData();

  // console.log(users);
  
  const onUpload = () => {
    if (selectedFile !== null) {
      console.log(selectedFile);
      data.append("id", "1");
      data.append("files", selectedFile.files[0]);
      dispatch(uploadImage(data))
    };
  };

  const onGetImage = () => {
    dispatch(getImage('/1738406d6f0ed34499937983e4c6f52b.jpg'));
  };

  const handelInput = (e: React.FormEvent<HTMLInputElement>, setState: any) => {
    setState(e.currentTarget.value);
  };

  const handelDelete = (id: string) => {
    dispatch(deleteItem(id));
    dispatch(getAllItem())
  };

  const clearSearch = () => {
    setChooseItemIdx("");
    setInputValue("");
  };

  const onOpenModal = (id: string) => {
    setChooseItemIdx(id);
    setIsOpenModal(true);
  };

  const onContinue = (item: any, firstname: string, lastname: string) => {
    const data: changesNameInterfece = {
      id: item.id, 
      firstname: firstname, 
      lastname: lastname
    };

    dispatch(editItem(data));
    setIsOpenModal(false);
    dispatch(getAllItem());
  };

  const onRefresh = () => {
    dispatch(getAllItem());
    clearSearch();
  };

  const onAddUser = () => {
    const user: userInterfece = {
      id: inputId,
      firstname: inputFirstName,
      lastname: inputLastName,
      birthDate: inputBirthdate.toString(),
      email: inputEmail,
    }
    dispatch(addItem(user));
    dispatch(getAllItem());
  }

  const handleLogin = () => {
    dispatch(authItem({username, email, password}))
  }

  return (
    <div className="root">
      <input value={email} onInput={(e) => handelInput(e, setEmail)}/>
      <input value={username} onInput={(e) => handelInput(e, setUsername)}/>
      <input value={password} onInput={(e) => handelInput(e, setPassword)}/>
      <button onClick={handleLogin}>войти</button>
      {/* <div>
        <input placeholder="id" value={inputId} onInput={(e) => handelInput(e, setInputId)}/>
        <input placeholder="first name" value={inputFirstName} onInput={(e) => handelInput(e, setInputFirstName)}/>
        <input placeholder="last name" value={inputLastName} onInput={(e) => handelInput(e, setInputLastName)}/>
        <input placeholder="birthdate" value={inputBirthdate} onInput={(e) => handelInput(e, setInputBirthdate)}/>
        <input placeholder="email" value={inputEmail} onInput={(e) => handelInput(e, setInputEmail)}/>
        <button onClick={onAddUser}>add user</button>
      </div>
      <div>
        <input type="file" id="input" multiple/>
        <button onClick={onUpload}>onUpload</button>
        <button onClick={onGetImage}>get image</button>
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
        firstname={users.filter((item: any) => item.userId === chooseItemIdx)?.[0]?.firstname}
        lastname={users.filter((item: any) => item.userId === chooseItemIdx)?.[0]?.lastname}
        onClose={() => setIsOpenModal(false)}
        onContinue={(firstname: string, lastname:string) => onContinue(users.filter((item: any) => item.userId === chooseItemIdx)?.[0], firstname, lastname)}
      /> */}
    </div>
  );
};

export default SuccessContent;
