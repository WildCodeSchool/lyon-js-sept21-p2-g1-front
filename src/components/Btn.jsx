import React, { useState } from 'react';
import '../search.css';

const Btn = () => {
  const [isActiveBtn, setActiveBtn] = useState('true');
  const handleToggle = () => {
    setActiveBtn(!isActiveBtn);
  };
  return (
    <div>
      <button>
        <h2>Localisez moi </h2>
        <img
          onClick={handleToggle}
          className={isActiveBtn ? null : 'animBtn'}
          src="https://img.icons8.com/ios/50/000000/compass--v2.png"
          alt="compass"
        />
      </button>
    </div>
  );
};

export default Btn;
