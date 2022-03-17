
export default function Slider() {
    return (
        <div class="flex pb-4">
            <div class="lg:w-1/2">
                <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={require("./../assets/img/hp-bg.jpg")} alt="" />
            </div>
            <div class="lg:w-1/2 my-auto">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pb-6">
                    <span class="block xl:inline">مرحبا بك في </span>
                    <span class="block text-indigo-600 xl:inline">رمضانيات</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> 
                مرحبا بك في موقع <b>" رمضانيات " </b>، نافدتك الرمضانية، تصحبك على طول شهر زمضان لتعينك على اغتنام فضائله وثماره العظيمة من خلال اقسام متنوعة .
                <br/>
                وبهذه المناسبة نهنى الأمة الإسلامية بقدوم شهر رمضان الفضيل.. ونسأل الله أن يتقبل منا ومنكم فيه صالح الأعمال.
                <br/>
                وكل عام وأنتم إلى الله أقرب.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                    <a href="#sections" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> قسم اليافعين </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:mr-3">
                    <a href="#sections2" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> قسم البراعم </a>
                    </div>
                </div>
            </div>
        </div>

    )
}