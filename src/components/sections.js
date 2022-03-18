
export default function Sections() {
    return (
        <div id='sections' className='py-10'>
            {/* <h2 className='text-4xl tracking-tight font-extrabold text-gray-800 pb-20  underline decoration'>قسم <span className='text-indigo-500'>  اليافعين :</span> </h2> */}
            <h2 className='tracking-tight font-extrabold  pb-20  text-center title'>" وَفِي ذَلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ "</h2>
            <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div class="m-2 bg-slate-50 hover:bg-white  rounded-xl shadow-lg overflow-hidden relative">
                    <img src={require("./../assets/img/hp-bg.jpg")} alt="" class="w-full h-60 object-contain " loading="lazy" />
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center bg-opacity-80 hover:bg-opacity-95 hover:scale-110 ease-in duration-300">
                        <h3 class='text-2xl pb-2'>فاقرءوا ما تيسر</h3>
                        <p  class="text-sm  mx-auto">ورد يومي لختمة كاملة</p>
                    </a>               
                </div>
                <div class="m-2 bg-slate-50 hover:bg-white  rounded-xl shadow-lg overflow-hidden relative">
                    <img src={require("./../assets/img/hp-bg.jpg")} alt="" class="w-full h-60 object-contain " loading="lazy" />
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center bg-opacity-80 hover:bg-opacity-95 hover:scale-110 ease-in duration-300">
                        <h3 class='text-2xl pb-2'>تدبر وعمل</h3>
                        <p  class="text-sm  mx-auto">  نقف عند اية تدبرا و عملا  </p>
                    </a>               
                </div>
                <div class="m-2 bg-slate-50 hover:bg-white  rounded-xl shadow-lg overflow-hidden relative">
                    <img src={require("./../assets/img/hp-bg.jpg")} alt="" class="w-full h-60 object-contain " loading="lazy" />
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center bg-opacity-80 hover:bg-opacity-95 hover:scale-110 ease-in duration-300">
                        <h3 class='text-2xl pb-2'>حديث ومعنى </h3>
                        <p  class="text-sm  mx-auto">نتدارس حديث و نستخلص معانيه</p>
                    </a>               
                </div>
                <div class="m-2 bg-slate-50 hover:bg-white  rounded-xl shadow-lg overflow-hidden relative">
                    <img src={require("./../assets/img/hp-bg.jpg")} alt="" class="w-full h-60 object-contain " loading="lazy" />
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center bg-opacity-80 hover:bg-opacity-95 hover:scale-110 ease-in duration-300">
                        <h3 class='text-2xl pb-2'>رمضانيات</h3>
                        <p  class="text-sm  mx-auto">خاطرة و معلومة رمضانية</p>
                    </a>               
                </div>
                <div class="m-2 bg-slate-50 hover:bg-white  rounded-xl shadow-lg overflow-hidden relative">
                    <img src={require("./../assets/img/hp-bg.jpg")} alt="" class="w-full h-60 object-contain " loading="lazy" />
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center bg-opacity-80 hover:bg-opacity-95 hover:scale-110 ease-in duration-300">
                        <h3 class='text-2xl pb-2'>ختمة</h3>
                        <p  class="text-sm  mx-auto">ختمة مشتركة</p>
                    </a>               
                </div>
                <div class="m-2 bg-slate-50 hover:bg-white  rounded-xl shadow-lg overflow-hidden relative">
                    <img src={require("./../assets/img/hp-bg.jpg")} alt="" class="w-full h-60 object-contain " loading="lazy" />
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center bg-opacity-80 hover:bg-opacity-95 hover:scale-110 ease-in duration-300">
                        <h3 class='text-2xl pb-2'>ادعوني أستجب لكم</h3>
                        <p  class="text-sm  mx-auto">أذكار يومية من صحيح السنة </p>
                    </a>               
                </div>
            </div>
        </div>
    )
}