const useOutsideClick = (isOpen: boolean, ref: any, action: any) => {
  const eventFunc = (e: any) => {    
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
