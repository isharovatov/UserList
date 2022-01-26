import { React, useState } from "react";
import Modal from "../Modal";
import UserContainer from "../UserContainer";
import { useSelector, useDispatch } from "react-redux";
import {deleteUser, changeName, getAllItem} from '../../Redux/nameStore/action'

const SuccessContent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseItemIdx, setChooseItemIdx] = useState('');
  const users = useSelector((state) => state.store.list);

  const handelInput = (e) => {
    setInputValue(e.target.value);
  };

  const handelDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const clearSearch = () => {
    setChooseItemIdx('');
    setInputValue("");
  };

  const onOpenModal = (id) => {
    setChooseItemIdx(id);
    setIsOpenModal(true);
  };

  const onContinue = (item, name) => {
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
      {users?.map((item, idx) => {
        if (item?.name?.first.toLowerCase().includes(inputValue.toLowerCase()))
          return (
            <UserContainer
              item={item}
              idx={idx}
              handelDelete={handelDelete}
              onOpenModal={onOpenModal}
              key={item.login.uuid}
            />
          );
      })}
      <Modal
        isOpen={isOpenModal}
        value={users.filter(item => item.login.uuid === chooseItemIdx)?.[0]?.name.first}
        onClose={() => setIsOpenModal(false)}
        onContinue={(name) => onContinue(users.filter(item => item.login.uuid === chooseItemIdx)?.[0], name)}
      />
    </div>
  );
};

export default SuccessContent;
