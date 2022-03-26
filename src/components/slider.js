import Suive from './suive-modal';


export default function Slider() {
    const dateDay = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());

    function handleClick() { 
        document.getElementById("demo").classList.remove("hidden");
    }
    return (
        <div className="md:py-10 lg:py-4 grid grid-cols-1 lg:grid-cols-2 mx-2 relative">
            <div className="">
                <img className="md:h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={require("./../assets/img/hp-bg.png")} alt="" />
            </div>
            <div className="my-auto lg:pb-25 lg:pt-10 pb-10 ">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-800  sm:text-5 md:text-6xl pb-10 text-center lg:text-right">
                    <span className="inline">مرحبا بك في </span>
                    <span className="text-indigo-900 inline">منصة وردي </span>
                </h1>
                <p className="text-center md:text-right text-base text-gray-500 md:text-xl"> 
               منصة <b>" وردي " </b>، نافدتك الرمضانية، تصحبك على طول شهر رمضان لتعينك على اغتنام فضائله وثماره العظيمة من خلال اقسام متنوعة .
                <br/>
                وبهذه المناسبة نهنئ الأمة الإسلامية بقدوم شهر رمضان الفضيل.. ونسأل الله أن يتقبل منا ومنكم فيه صالح الأعمال.
                <br/>
                وكل عام وأنتم إلى الله أقرب.
                </p>
                <div className="mt-5 lg:mb-20 mb-10 sm:mt-8">
                    <div className="rounded-md shadow mb-3">
                    <a href="#demo" onClick={() => handleClick() } className="w-full flex md:flex-none items-center justify-center px-6 py-2 border border-[#b4d6c1]  font-medium rounded-md text-slate-700  bg-[#b4d6c1] hover:bg-[#a7cdb6] md:text-lg"> إبدأ رحلتك الرمضانية </a>
                    </div>
                   {/* <Suive/>

                  <div className="rounded-md shadow my-3">
                    <a href="#demo" className="w-full flex md:flex-none items-center justify-center  px-6 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg"> فيديو تقديمي </a>
                    </div>*/}

                </div>
                <h2 className='tracking-tight font-extrabold text-slate-800  text-4xl text-center title-sm'>   { dateDay }  </h2>
            </div>
        </div>

    )
}