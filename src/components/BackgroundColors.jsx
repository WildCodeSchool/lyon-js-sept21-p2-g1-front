import React from 'react';

function SecondaryColor() {
  return (
    <div className="secondary__clolor visible md:invisible bg-secondary w-full h-screen">
      <div className="primary__color invisible md:visible bg-primary w-full h-screen">
        {' '}
      </div>
    </div>
  );
}

export default SecondaryColor;
