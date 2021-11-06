/* eslint-disable react/button-has-type */
import React from 'react';
import circle from '../assets/arroww.png';

const ModalNew = ({ imgClass, name, names }) => {
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
            <div className="w-10/12">
              {/* content */}
              <div className="rounded-lg shadow-lg relative flex flex-col bg-primary outline-none focus:outline-none">
                <div className="">
                  <div className="box__infos flex flex-col items-center justify-center">
                    <div className="test mt-4 flex items-center">
                      <p className="rounded-full text-center w-48 h-8 bg-gray-200   ">
                        {name}
                      </p>
                    </div>
                    <p className="text-center rounded-full w-48 h-8 bg-gray-200 mt-12 ">
                      {names}
                    </p>
                  </div>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed" />
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
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
