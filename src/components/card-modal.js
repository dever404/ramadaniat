import React, { useState } from "react";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const date = new Date().toLocaleDateString(),
        stor = "Wirdi-"+date, 
        wirdiCokie = localStorage.getItem(stor).split(','),
        newCokie = [];
       var pushVisible = 'hidden' ;

        wirdiCokie.map( (index) =>{
          if( index == props.name )
            pushVisible = ''
        });

  function handleClick(val) { 
    wirdiCokie.map( (index) =>{
      if( index != val)
        newCokie.push(index)
    });
    localStorage.setItem(stor,newCokie);
    setShowModal(false);
  }
  return (
    <>
      <button className="m-2 bg-slate-50 hover:bg-white  rounded-xl shadow-lg overflow-hidden relative"  onClick={() => setShowModal(true)}>
        <img src={require("./../assets/img/hp-bg.jpg")} alt="" class="w-full h-60 object-contain " loading="lazy" />
        <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center bg-opacity-80 hover:bg-opacity-95 hover:scale-110 ease-in duration-300">
            <h3 class='text-2xl pb-2'>{ props.name } </h3>
            <p  class="text-sm  mx-auto">{ props.intro }</p>
        </a>               
      </button>
      {showModal ? (
          <div className={'flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-screen py-3">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid rounded-t ">
                  <h3 className="text-2xl font-semibold"> { props.title } </h3>
                </div>
                <div className="relative p-6 flex-auto" dangerouslySetInnerHTML={{__html:props.content}}>
                </div>
                <div className=" mr-5 p-3 border-t border-solid rounded-b">
                  <button
                    className={pushVisible +" text-red-500 background-transparent font-bold   text-sm ml-5 mb-1"}
                    type="button"
                    onClick={() => handleClick(props.name)}
                  >
                     انهيت وردي
                  </button>
                  <button
                    className="background-transparent font-bold   text-sm  mb-1"
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

export default Modal;
