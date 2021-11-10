import React from 'react';

function Background({ image }) {
  return (
    <div>
      <section>
        <div className="-mt-44 w-full">
          <img src={image} alt="Background" />
        </div>
      </section>
    </div>
  );
}

export default Background;
