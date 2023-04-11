import React from 'react'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import {BsCheckLg,BsFillPersonFill} from 'react-icons/bs'
import {FaBook} from 'react-icons/fa'
import {AiFillCheckCircle} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import Carousel from 'nuka-carousel';
import SimpleMap from '../components/SimpleMap'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Home = () => {


  return (
    <>
    {/*  */}
    <div className="w-full">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      effect="fade" // sets the effect to coverflow
      navigation
        grabCursor="true" // sets grab cursor as the hover cursor over the slides
        centeredSlides="true" // used to center the active slide
        spaceBetween={0} // distance between slides in px
        slidesPerView={1} // number of slides per view
        loop="true" // sets the slides on a continuous loop
        pagination={{ clickable: true, dynamicBullets: true }} // allows for pagination bullets to be dynamic and clickable
        fadeEffect={{
          rotate: 20, // slide rotation degree
          stretch: 25, // stretches the space between the slides in px
          depth: 250, // offsets the depth of neighboring slides
          modifier: 1, // effect multiplier
          slideShadows: false, // disables the shadow around the slide container
        }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
        <div className="relative min-h-[100vh]">
            <div className="card-hero absolute top-0 right-5 w-full h-full z-10 flex items-center justify-end">
                <div className="bg-white py-6 px-10 rounded-lg w-full lg:w-[50%]">
                <div  className="flex items-center justify-between">
                <div className='space-y-8'>
                <p className='text-xl text-gray-900 underline py-5'> <span><ImLocation2 className='inline mr-3' /></span> Aragon Ave, Coral Gables, FL 33134</p>
                    <h1 className='pb-4 text-4xl font-extrabold'>Gables Grand Plaza Apartments</h1>
                </div>
                    <img src="/src/assets/logo-black.png" alt="logo" className='hidden md:w-40 md:inline' />
                </div>
                    <p className='text-left leading-relaxed pb-6'>Our premium furnished apartments feature allow you and your favorite pet to enjoy all at Gables Grand Plaza!</p>


                    <div className="btn flex justify-between items-center">
                        <h1 className="text-2xl text-amber-800 font-bold">$625,000</h1>
                        <button className='px-6 py-2 text-2xl bg-amber-900 hover:bg-black rounded-md text-white'>Book A Hotel</button>
                    </div>
                </div>
            </div>
            <img className='absolute top-0 left-0 w-full h-full' src="https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="xsx" />
        </div>
      
    </SwiperSlide>

        <SwiperSlide>
        <div className="relative min-h-[100vh]">
            <div className="card-hero absolute top-0 right-5 w-full h-full z-10 flex items-center justify-end">
                <div className="bg-white py-6 px-10 rounded-lg w-full lg:w-[50%]">
                <div  className="flex items-center justify-between">
                <div className='space-y-8'>
                <p className='text-xl text-gray-900 underline py-5'> <span><ImLocation2 className='inline mr-3' /></span> Aragon Ave, Coral Gables, FL 33134</p>
                    <h1 className='pb-4 text-4xl font-extrabold'>Gables Grand Plaza Apartments</h1>
                </div>
                    <img src="/src/assets/logo-black.png" alt="logo" className='hidden md:w-40 md:inline' />
                </div>
                    <p className='text-left leading-relaxed pb-6'>Our premium furnished apartments feature allow you and your favorite pet to enjoy all at Gables Grand Plaza!</p>


                    <div className="btn flex justify-between items-center">
                        <h1 className="text-2xl text-amber-800 font-bold">$625,000</h1>
                        <button className='px-6 py-2 text-2xl bg-amber-900 hover:bg-black rounded-md text-white'>Book A Hotel</button>
                    </div>
                </div>
            </div>
            <img className='absolute top-0 left-0 w-full h-full' src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="xsx" />
        </div>

        </SwiperSlide>

        <SwiperSlide>

        <div className="relative min-h-[100vh]">
            <div className="card-hero absolute top-0 right-5 w-full h-full z-10 flex items-center justify-end">
                <div className="bg-white py-6 px-10 rounded-lg w-full lg:w-[50%]">
                <div  className="flex items-center justify-between">
                <div className='space-y-8'>
                <p className='text-xl text-gray-900 underline py-5'> <span><ImLocation2 className='inline mr-3' /></span> Aragon Ave, Coral Gables, FL 33134</p>
                    <h1 className='pb-4 text-4xl font-extrabold'>Gables Grand Plaza Apartments</h1>
                </div>
                    <img src="/src/assets/logo-black.png" alt="logo" className='hidden md:w-40 md:inline' />
                </div>
                    <p className='text-left leading-relaxed pb-6'>Our premium furnished apartments feature allow you and your favorite pet to enjoy all at Gables Grand Plaza!</p>


                    <div className="btn flex justify-between items-center">
                        <h1 className="text-2xl text-amber-800 font-bold">$625,000</h1>
                        <button className='px-6 py-2 text-2xl bg-amber-900 hover:bg-black rounded-md text-white'>Book A Hotel</button>
                    </div>
                </div>
            </div>
            <img className='absolute top-0 left-0 w-full h-full' src="https://images.pexels.com/photos/5178055/pexels-photo-5178055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="xsx" />
        </div>
        </SwiperSlide>
        

        </Swiper>

        </div>
    {/*  */}
    <div className="my-28">
      <h1 className='text-6xl text-center text-cyan-600 my-3'>Property Photo Gallery</h1>
      <p className='text-center text-xl my-7 text-gray-300'>Elegantly Decorated Home With Iconic Views</p>

      <div className="w-11/12 mx-auto mt-4 grid grid-cols-2 md:grid-cols-4 gap-1">
        <img className='h-60 rounded-lg w-full' src="https://theeffortlesschic.com/wp-content/uploads/2019/02/Bedroom_Framed_Art_Collage_Wall_2.jpg" alt="jbgj" />
        <img className='h-60 rounded-lg w-full' src="https://theeffortlesschic.com/wp-content/uploads/2019/02/Bedroom_Framed_Art_Collage_Wall_8.jpg" />
        <img className='h-60 rounded-lg w-full' src="https://www.interiorzine.com/wp-content/uploads/2019/02/junxi-mountain-villa-show-flat-5.jpg" alt="jbkhvh" />
        <img className='h-60 rounded-lg w-full' src="https://www.interiorzine.com/wp-content/uploads/2019/02/junxi-mountain-villa-show-flat-8.jpg" alt="jbkhvh" />
        <img className='h-60 rounded-lg w-full' src="https://www.interiorzine.com/wp-content/uploads/2019/02/junxi-mountain-villa-show-flat-1.jpg" alt="jbkhvh" />
        <img className='h-60 rounded-lg w-full' src="https://theeffortlesschic.com/wp-content/uploads/2019/02/Bedroom_Framed_Art_Collage_Wall_2.jpg" alt="jbkhvh" />
        <img className='h-60 rounded-lg w-full' src="https://theeffortlesschic.com/wp-content/uploads/2019/02/Bedroom_Framed_Art_Collage_Wall_2.jpg" alt="jbkhvh" />
        <img className='h-60 rounded-lg w-full' src="https://theeffortlesschic.com/wp-content/uploads/2019/02/Bedroom_Framed_Art_Collage_Wall_2.jpg" alt="jbkhvh" />
      </div>


    </div>
    {/*  */}
    <div className="w-full video  pt-10 md:pt-44 pb-60 md:pb-28">
    <h1 className='text-4xl text-center text-cyan-600 my-3'>Property Photo Gallery</h1>
      <p className='text-center text-xl my-7 text-gray-300'>Elegantly Decorated Home With Iconic Views</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto">
        <div className="img ">
          <img src="https://images.pexels.com/photos/7764378/pexels-photo-7764378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="jdjd" className='w-full hidden md:block h-full rounded-lg shadow-lg shadow-slate-500' />
        </div>

        <div className='p-3 md:p-10 space-y-3'>
          <h3 className="text-2xl text-cyan-600">WHY CHOOSE OUR PROPERTY</h3>
          <h1 className="text-4xl text-cyan-600 font-bold">Amazingly Modern And Beautiful In Designs Spaces & Homes</h1>
          <p className="text-xl text-cyan-400">Spacious and fabulous home in prime location. This executive style 3 bed, 2 bath home has impact resistant windows and renovated kitchen.</p>

          <ul className="flex flex-col space-y-5 mt-8 text-xl">
            <li  className="flex items-center">
              <BsCheckLg className='mr-2 text-red-900' />Large Tile Floors
            </li>
            <li  className="flex items-center">
              <BsCheckLg className='mr-2 text-red-900'/>Walk-in Closets
            </li>
            <li  className="flex items-center">
              <BsCheckLg className='mr-2 text-red-900' />Specialist services
            </li>
            <li  className="flex items-center">
              <BsCheckLg className='mr-2 text-red-900' />Specialist services
            </li>
          </ul>
          <button className="mt-4 py-4 px-7 text-2xl bg-yellow-800 rounded-xl hover:bg-black hover:text-white">Schedule A Tour</button>
        </div>
      </div>
    </div>
    {/*  */}
    {/*  */}
    <div className='bg-slate-100 w-full py-20'>

<div className='w-[90%] mx-auto '>
  <h1 className="text-2xl featured my-8">Featured Property</h1>
  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
    {/* card */}
    <Card />
    <Card />
    <Card />
    <Card />


  </div>
</div>

</div>
{/*  */}

{/*  */}
<div className="welcome w-full ">
      <div className="w-[90%] mx-auto py-16">
      <div>
        <div className="content text-white">
        <h1 className='text-3xl  my-3 tracking-widest'>Welcome</h1>
        <h1 className='text-2xl'>Add Your Property to Our List</h1>
        <p className="mt-5 mb-10">We have a big customer base to market your property to right buyers. So get started by following these simple steps.</p>

        <div className="cards grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-5">
            {/*  */}
            <div className='flex flex-col justify-between space-y-6'>
                <BsFillPersonFill size={50} fill='#122345' />
                <h2 className="text-xl text-blue-700">Register</h2>
                <p className="text-md text-slate-100">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, repellendus.</p>

            </div>
            {/*  */}
            <div className='flex flex-col justify-between space-y-6'>
                <FaBook size={50} fill='#749959' />
                <h2 className="text-xl text-blue-700">Fill Up Property Details</h2>
                <p className="text-md text-slate-100">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</p>

            </div>
            {/*  */}
            <div className='flex flex-col justify-between space-y-6'>
                <AiFillCheckCircle size={50} fill='#844744' />
                <h2 className="text-xl text-blue-700">You are Done!</h2>
                <p className="text-md text-slate-100">Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

            </div>


        </div>

        </div>

        <div className="flex justify-center mt-10">
          <button className="py-4 text-xl px-8 bg-blue-500 hover:bg-slate-600 duration-200 hover:text-red-400">Register To Us</button>
        </div>
      </div>

      </div>
    </div>
    {/*  */}
    <Card2 />

    <SimpleMap />

    </>
  )
}

export default Home