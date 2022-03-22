import React, { useState } from "react";

const Suive = (props) => {
  const [showModal, setShowModal] = useState(false);
  const date = new Date().toLocaleDateString(),
        stor = "Wirdi-"+date, 
        wirdiCokie = window.localStorage.getItem(stor).split(','),
        items = wirdiCokie.map( (index) =>{
          return  (
            <li> { index }</li>
          )
        });
  return (
    <>
      <div className="">
      <button className="w-full flex md:flex-none items-center justify-center  px-6 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg" onClick={() => setShowModal(true)}> تتبع تقدمك  </button>
      </div>
      {showModal ? (
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-screen py-3">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid rounded-t ">
                  <h3 className="text-2xl font-semibold"> ورد اليوم :  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  لاتمام ورد اليوم ينقصك { wirdiCokie.length } اقسام  <br/><br/>
                  <b>الاقسام المتبقية من تحدي اليوم:</b><br/><br/>
                  <ul className='mr-5 pr-5 list-disc'>
                    { items }
                  </ul>
                </div>
                <div className=" mr-5 p-3 border-t border-solid rounded-b">
                  <button
                    className="background-transparent font-bold   text-sm mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    اغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
      ) : null}
    </>
  );
};

export default Suive;
