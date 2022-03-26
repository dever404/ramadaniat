import React from "react";

export default function  Demo()  {
    return (
        <div className='py-10'>
            <h2 className='text-2xl text-center tracking-tight font-extrabold text-slate-900 pb-20  '> اليكم فيديو تقديمي لمسار رحلتنا</h2>
            <video controls>
                <source src={require("./../assets/video/demo.mp4")} type="video/mp4" />
            </video>

        </div>
    )
}