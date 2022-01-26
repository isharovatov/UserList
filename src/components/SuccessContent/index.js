import { React, useState } from "react";
import Modal from "../Modal";
import UserContainer from "../UserContainer";
import { useSelector, useDispatch } from "react-redux";
import {deleteUser, changeName, getAllItem} from '../../Redux/nameStore/action'

const SuccessContent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseItemIdx, setChooseItemIdx] = useState(-1);
  const users = useSelector((state) => state.store.list);

  const handelInput = (e) => {
    setInputValue(e.target.value);
  };

  const handelDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const clearSearch = () => {
    setChooseItemIdx(-1);
    setInputValue("");
  };

  const onOpenModal = (name, idx) => {
    setChooseItemIdx(idx);
    setIsOpenModal(true);
  };

  const onContinue = (item, name) => {
    dispatch(changeName({id: item.login.uuid, newName: name}));
    setIsOpenModal(false)
  };

  return (
    <div className="root">
      <button
        onClick={() => {
          dispatch(getAllItem());
          clearSearch();
        }}
      >
        загрузить еще
      </button>
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
        value={users?.[chooseItemIdx]?.name.first}
        onClose={() => setIsOpenModal(false)}
        onContinue={(name) => onContinue(users?.[chooseItemIdx], name)}
      />
    </div>
  );
};

export default SuccessContent;
