import React from "react";
import {useState} from "react";
import Modal from "../Modal";
import UserContainer from "../UserContainer";
import { useSelector, useDispatch } from "react-redux";
import {deleteUser, changeName, getAllItem} from '../../Redux/nameStore/action'
import { RootState } from "../../Redux/index";

const SuccessContent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseItemIdx, setChooseItemIdx] = useState('');
  const users = useSelector((state:RootState) => state.store.list);

  const handelInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
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
    dispatch(changeName({id: item.login.uuid, newName: name}));
    setIsOpenModal(false)
  };

  const onRefresh = () => {
    dispatch(getAllItem());
    clearSearch();
  }

  return (
    <div className="root">
      <button onClick={onRefresh}>загрузить еще</button>
      <input value={inputValue} onInput={(e) => handelInput(e)} />
      {users?.map((item: any) => {
        if (item?.name?.first.toLowerCase().includes(inputValue.toLowerCase()))
          return (
            <UserContainer
              item={item}
              handelDelete={handelDelete}
              onOpenModal={onOpenModal}
              key={item.login.uuid}
            />
          );
      })}
      <Modal
        isOpen={isOpenModal}
        value={users.filter((item: any) => item.login.uuid === chooseItemIdx)?.[0]?.name.first}
        onClose={() => setIsOpenModal(false)}
        onContinue={(name: string) => onContinue(users.filter((item: any) => item.login.uuid === chooseItemIdx)?.[0], name)}
      />
    </div>
  );
};

export default SuccessContent;
