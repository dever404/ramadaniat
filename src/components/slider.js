
export default function Slider() {
    return (
        <div className="hidden lg:inline-grid py-10 lg:py-4 grid grid-cols-1 lg:grid-cols-2">
            <div className="">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={require("./../assets/img/hp-bg.jpg")} alt="" />
            </div>
            <div className="my-auto">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5 md:text-6xl pb-6 text-center lg:text-right">
                    <span className="inline">مرحبا بك في </span>
                    <span className="text-indigo-600 inline">رمضانيات</span>
                </h1>
                <p className="mt-5 text-base text-gray-500 md:text-xl"> 
                مرحبا بك في موقع <b>" رمضانيات " </b>، نافدتك الرمضانية، تصحبك على طول شهر زمضان لتعينك على اغتنام فضائله وثماره العظيمة من خلال اقسام متنوعة .
                <br/>
                وبهذه المناسبة نهنى الأمة الإسلامية بقدوم شهر رمضان الفضيل.. ونسأل الله أن يتقبل منا ومنكم فيه صالح الأعمال.
                <br/>
                وكل عام وأنتم إلى الله أقرب.
                </p>
                <div className="mt-5 sm:mt-8">
                    {/* <div className="rounded-md shadow">
                    <a href="#sections" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> برنامج اليوم </a>
                    </div> */}
                    <div className="mt-3">
                    <a href="#sections" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg"> ابداء رحلتك الرمضانية  </a>
                    </div>
                </div>
            </div>
        </div>

    )
}