import React, { useEffect } from 'react'
import {FcHome} from 'react-icons/fc'
import {FaBed,FaSwimmingPool,FaParking} from 'react-icons/fa'
import {GiBathtub,GiSofa,GiGate} from 'react-icons/gi'
import {AiOutlineCheck,AiFillPhone,AiFillStar} from 'react-icons/ai'
import {TiSocialTwitter,TiSocialVimeo} from 'react-icons/ti'
import { getDetails, getPhotos } from '../Store/Actions/ProductsActions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Reviews } from '../Store/Actions/ProductsActions'
import Spinner from '../components/Spinner'
import 'slick-carousel'

// 1240261 joh


const HomeDetails = () => {

  const dispatch = useDispatch()
  const {photos,loading,reviews} = useSelector((state) => state.home)
  const details = useSelector((state) => state.home.houses)
  const {id} = useParams()
  // const loading = useSelector((state) => state.home.loading)
  // const error = useSelector((state) => state.home.error)


  useEffect(()=>{
    dispatch(getPhotos(id))
    dispatch(getDetails(id))
    dispatch(Reviews(id))
  },[dispatch])
  return (
    <>
    <header className='w-full relative py-[8rem] min-h-[120vh] about'>
    <img src={photos && photos[0].url_max} alt="dsd" className="absolute top-0 left-0 w-full h-full" />
    <div className="absolute py-16 space-y-8  top-5 left-5 bg-white px-10 w-[90%] lg:w-[35%]">
      <h1 className="text-xl lg:text-5xl tracking-widest font-semibold uppercase text-black">{details?.hotel_name}</h1>
      <h3 className="uppercase text-md lg:text-2xl">{details?.city_name_en}</h3>
      <p className="text-xl font-sans">{details?.district}</p>

      <h3 className="uppercase text-2xl"> Request Info</h3>
      <form className='space-y-3'>
        <div className="form-control">
          <input type="text" placeholder='Name' className='p-4 text-xl w-full border rounded-lg text-black placeholder:text-gray-400' />
        </div>
        <div className="form-control grid grid-cols-2 gap-1">
        <input type="email" placeholder='Email' className='w-full p-4 text-black border rounded-lg' />
        <input type="text" placeholder='Phone Number' className='w-full p-4 text-black border rounded-lg tracking-widest' />
        </div>
        <button className='p-4 text-white bg-green-500 hover:text-black hover:bg-red-500 duration-500 w-full text-xl'>Submit</button>
      </form>
    </div>


    </header>
    {/*  */}
    {/*  */}

    <div className="about-hero w-full mb-40 mt-11">
      <h1 className="prop text-center uppercase my-3 text-2xl md:text-4xl lg:text-5xl text-black">About The Property</h1>
      <h3 className="text-xl text-center uppercase">For Sale:</h3>

      <div className="mx-auto my-10 w-[90%] space-y-3 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-14">
      {/*  */}
      <div className="flex items-center">
        <div className="img">
          <FcHome size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2 className='font-bold text-xl capitalize'>Built in 1976</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>

      {/*  */}
      <div className="flex items-center">
        <div className="img">
          <FaBed fill='green' size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2  className='font-bold text-xl capitalize'>{details && details?.property_highlight_strip && details.property_highlight_strip[0]?.name}</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="flex items-center">
        <div className="img">
          <GiBathtub fill='green' size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2 className='font-bold text-xl capitalize'>{details && details?.property_highlight_strip && details.property_highlight_strip[1]?.name}</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>
      {/*  */}

    {/*  */}
    <div className="flex items-center">
        <div className="img">
          <FaSwimmingPool fill='green' size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2 className='font-bold text-xl capitalize'>{details && details?.property_highlight_strip && details.property_highlight_strip[9]?.name}</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>
      {/*  */}
    {/*  */}
    <div className="flex items-center">
        <div className="img">
          <FaParking fill='#333390' size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2 className='font-bold text-xl capitalize'>{details && details?.property_highlight_strip && details.property_highlight_strip[7]?.name}</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>
      {/*  */}
    {/*  */}
    <div className="flex items-center">
        <div className="img">
          <FaSwimmingPool fill='purple' size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2 className='font-bold text-xl capitalize'>{details && details?.property_highlight_strip && details.property_highlight_strip[3]?.name}</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>
      {/*  */}
    {/*  */}
    <div className="flex items-center">
        <div className="img">
          <GiSofa fill='red' size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2 className='font-bold text-xl capitalize'>2475 Sq Ft</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>
      {/*  */}
    {/*  */}
    <div className="flex items-center">
        <div className="img">
          <GiGate fill='blue' size={50} />
        </div>
        <div className="flex flex-col space-y-2 p-3">
          <h2 className='font-bold text-xl capitalize'>{details && details?.property_highlight_strip && details.property_highlight_strip[5]?.name}</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
      </div>
      {/*  */}


      </div>

    </div>

    {/*  */}
    <div className="neigh relative">
    <img src={photos && photos[2].url_max} alt="dsd" className="absolute top-0 left-0 w-full h-full" />
      <div className="wrap flex justify-end mx-2 md:mr-20 items-center h-full">
      <div className="bg-white py-8 px-10 space-y-5 w-[100%] lg:w-[40%] absolute  top-5 right-5">
      <h1 className="text-4xl uppercase text-center">{details?.sustainability?.hotel_page?.title}</h1>
      <p className="text-xl text-center">{details?.address}</p>
      <p className="text-center text-gray-900 leading-loose">{details?.sustainability?.hotel_page?.description}</p>

      </div>

      </div>
    </div>
    {/*  */}

    {/*  */}
    
    {/*  */}

    <div className="my-8">
      <h1 className='text-6xl text-center text-cyan-600 my-3'>Property Photo Gallery</h1>
      <p className='text-center text-xl my-7 text-gray-300'>Elegantly Decorated Home With Iconic Views</p>

      {loading ? <Spinner /> : ''}

      <div className="w-11/12 mx-auto mt-4 grid grid-cols-2 md:grid-cols-4 gap-1">
      {photos?.map((photo, index) => (
        <img key={index} className='h-60 rounded-lg w-full' src={photo.url_max} alt="jbgj" />

      ))}
      </div>



    </div>

    {/*  */}
    <div className="w-full py-[9rem] my-[1rem]">

    <h1 className="text-center text-5xl font-bold text-cyan-600">Reviews</h1>

    {reviews?.result?.slice(0,9).map((review, index) => (
      <article key={index} className='w-[95%] mb-4 mt-8 lg:w-[70%] ml-2 lg:ml-[5rem] bg-teal-700 py-4 px-8 overflow-hidden min-h-[40vh]' >
    <div className='px-8 flex gap-2'>
    <AiFillStar fill='gold' className='text-3xl' />
    <AiFillStar fill='gold' className='text-3xl' />
    <AiFillStar fill='gold' className='text-3xl' />
    <AiFillStar fill='gold' className='text-3xl' />
    <AiFillStar fill='gold' className='text-3xl' />
    </div>
    <div className='px-8 gap-2 w-[70%] mt-2 flex flex-col'>
      <h2 className='text-xl lg:text-2xl font-bold leading-[1.7] text-amber-500 capitalize'>{review.title}</h2>
      <p className='leading-[1.8] tracking-[2px] font-thin text-gray-800'>
      Cons: <span className='text-red-700'>{review.cons}</span> 
      </p>
      <p className='leading-[1.8] tracking-[2px] font-bold text-sky-900 text-md'>
      Pros: <span className=''>{review.pros}</span> 
      </p>
      <p className='leading-[1.8] tracking-[2px] font-thin text-gray-200'>
      Author: <span className=''>{review?.author?.name}</span> 
      </p>
    </div>


    </article>
    ))
    }
    
    

    </div>
    {/*  */}

    <div className="w-full form">
      <div className="wrap flex justify-center mt-5">
        <div className="bg-black/40 rounded-lg w-[90%] md:w-[50%] space-y-4 text-white py-8 px-6 my-32">
          <h1 className='text-4xl text-center uppercase'>Request Info</h1>
          <p className='text-center text-2xl'>Lorem ipsum dolor sit amet.</p>
          <div className="space-y-2">
          <div className="form-control">
            <input type="text" className='w-full p-4 my-3 rounded-lg' placeholder='Name' />
          </div>
          <div className="form-control">
            <input type="text" className='w-full p-4 my-3 rounded-lg' placeholder='Email' />
          </div>
          <div className="form-control">
            <input type="text" className='w-full p-4 my-3 rounded-lg' placeholder='Phone' />
          </div>
          <div className="form-control">
            <textarea className='text-black w-full py-8 px-4 my-3 rounded-lg' placeholder='Phone'></textarea>
          </div>
          <div className="form-control">
            <button type="button" className='w-full p-4 my-3 rounded-lg bg-green-500 text-white hover:bg-lime-600 duration-500 text-2xl' >Submit</button>
          </div>
          </div>

        </div>
      </div>
    </div>
    {/*  */}

    

    </>
  )
}

export default HomeDetails