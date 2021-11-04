import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIshowing] = useState(false);

  function toggle() {
    setIshowing(!isShowing);
  }
  return {
    isShowing,
    toggle,
  };
};

export default useModal;
