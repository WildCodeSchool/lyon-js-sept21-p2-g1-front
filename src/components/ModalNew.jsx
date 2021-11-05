/* eslint-disable react/button-has-type */
import React from 'react';
import circle from '../assets/arroww.png';

const ModalNew = ({ imgClass }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <img
        className={imgClass}
        src={circle}
        alt="circle"
        onClick={() => setShowModal(true)}
        Ope
      />

      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative mx-5 my-6 max-w-sm ">
              {/* content */}
              <div className="h-full order-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary outline-none focus:outline-none">
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed" />
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50"> </div>
        </>
      ) : null}
    </>
  );
};

export default ModalNew;
