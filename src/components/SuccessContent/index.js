import { React, useState } from "react";
import Modal from "../Modal";
import UserContainer from "../UserContainer";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, changeName } from "../../Redux/slice";

const SuccessContent = ({ handelUpdate }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseItemIdx, setChooseItemIdx] = useState(-1);
  const reduxState = useSelector((state) => state.users.data);

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
    dispatch(changeName({user: item, newName: name}));
    setIsOpenModal(false)
  };

  return (
    <div className="root">
      <button
        onClick={() => {
          handelUpdate();
          clearSearch();
        }}
      >
        загрузить еще
      </button>
      <input value={inputValue} onInput={(e) => handelInput(e)} />
      {reduxState?.map((item, idx) => {
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
        value={reduxState?.[chooseItemIdx]?.name.first}
        onClose={() => setIsOpenModal(false)}
        onContinue={(name) => onContinue(reduxState?.[chooseItemIdx], name)}
      />
    </div>
  );
};

export default SuccessContent;
