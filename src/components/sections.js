import React from "react";
import Modal from './card-modal';
import data from './../data/sections.json';

var  links, map;
data.map( (index) =>{
    if (index[0] == true)  {
        map = 1;
        links = index.map( (val,i) =>{
            if (i>0){
                    return  (
                        <Modal name = { val.name } intro = { val.intro } title = { val.title } content = { val.content }/>
                    )
                }
            }
        )
    }
    if(map == null) {
        links = ' المحتوى قيد الانشاء,الموقع سيكون جاهزا بعد لحضات '
    }

})

export default function  Sections()  {
    return (
        <div id='sections' className='hidden py-10'>

             {/*<h2 className='text-4xl tracking-tight font-extrabold text-gray-800 pb-20'>>> أقسام <span className='text-indigo-500'>  منصة وردي :</span> </h2> */}
           <h2 className='tracking-tight font-extrabold pb-5 text-center title'>" وَفِي ذَلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ "</h2>
           
            <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                { links }
            </div>

        </div>
    )
}