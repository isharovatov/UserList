const useOutsideClick = (isOpen, ref, action) => {
  const eventFunc = (e) => {
    if (!ref.current?.contains(e.target)) {
      action();
    }
  };

  if (ref.current !== null) {
    if (isOpen) document.addEventListener("click", (e) => eventFunc(e), true);
    if (!isOpen) document.removeEventListener("click", (e) => eventFunc(e), true);
  }
};

export default useOutsideClick;
