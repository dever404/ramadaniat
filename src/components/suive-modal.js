import React, { useState } from "react";

const Suive = (props) => {
  const [showModal, setShowModal] = useState(false);
  const date = new Date().toLocaleDateString(),
        stor = "Wirdi-"+date, 
        wirdiCokie = window.localStorage.getItem(stor).split(','),
        score = window.localStorage.getItem('score'),
        items = wirdiCokie.map( (index) =>{
          if( index !== '') {
            return  (
              <li> { index }</li>
            )
          } else {
            return  null
          }
        });
  return (
    <>
      <div className="">
      <button className="w-full flex md:flex-none items-center justify-center  px-6 py-2 border border-transparent text-slate-700  font-medium rounded-md bg-[#b4d6c1] hover:bg-[#a7cdb6] md:text-lg" onClick={() => setShowModal(true)}> تتبع تقدمك  </button>
      </div>
      {showModal ? (
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-screen py-3">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid rounded-t ">
                  <h3 className="text-2xl font-semibold"> ورد اليوم :  </h3>
                </div>
                { console.log(items[0])}
                { items[0] != null ? (
                <div className="relative p-6 flex-auto">
                  {/* لاتمام ورد اليوم ينقصك { wirdiCokie.length } اقسام  <br/><br/> */}
                  مجموع نقاطك من التحدي هي : { score } <br/><br/>
                  <b>الاقسام المتبقية من تحدي اليوم:</b><br/><br/>
                  <ul className='mr-5 pr-5 list-disc'>
                    { items }
                  </ul>
                </div>
                ) : 
                <div className="relative p-6 flex-auto">
                    <img className="clap" src={require("./../assets/img/clap.gif")} alt="" />
                  <b> تهانينا لقد اتممت تحدي اليوم </b>
                  <span>&#128522;</span>
                </div>
                }
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
