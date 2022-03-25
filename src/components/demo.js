import React from "react";

export default function  Demo()  {
    return (
        <div id='demo' className='py-10'>
            <h2 className='text-4xl tracking-tight font-extrabold text-gray-800 pb-20  '>>> فيديو  <span className='text-indigo-500'>  تقديمي </span> للمنصة :</h2>
            <video controls>
                <source src={require("./../assets/video/demo.mp4")} type="video/mp4" />
            </video>

        </div>
    )
}