import React from 'react';

function Background({ image }) {
  return (
    <div>
      <section>
        <div className="">
          <img src={image} alt="Background" />
        </div>
      </section>
    </div>
  );
}

export default Background;
