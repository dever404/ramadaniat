import Suive from './suive-modal';

export default function Slider() {
    return (
        <div className="md:py-10 lg:py-4 grid grid-cols-1 lg:grid-cols-2 mx-2 relative">
            <div className="">
                <img className="md:h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={require("./../assets/img/hp-bg.jpg")} alt="" />
            </div>
            <div className="my-auto">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5 md:text-6xl pb-6 text-center lg:text-right">
                    <span className="inline">مرحبا بك في </span>
                    <span className="text-indigo-600 inline">منصة وردي </span>
                </h1>
                <p className="text-center md:text-right text-base text-gray-500 md:text-xl"> 
               منصة <b>" وردي " </b>، نافدتك الرمضانية، تصحبك على طول شهر رمضان لتعينك على اغتنام فضائله وثماره العظيمة من خلال اقسام متنوعة .
                <br/>
                وبهذه المناسبة نهنئ الأمة الإسلامية بقدوم شهر رمضان الفضيل.. ونسأل الله أن يتقبل منا ومنكم فيه صالح الأعمال.
                <br/>
                وكل عام وأنتم إلى الله أقرب.
                </p>
                <div className="mt-5 sm:mt-8">
                    <div className="rounded-md shadow mb-3">
                    <a href="#sections" className="w-full flex md:flex-none items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"> ابدأ رحلتك الرمضانية </a>
                    </div>
                    <Suive/>
                </div>
            </div>
        </div>

    )
}