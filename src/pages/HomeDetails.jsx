import React, { useEffect } from 'react'
import {FcHome} from 'react-icons/fc'
import {FaBed,FaSwimmingPool,FaParking} from 'react-icons/fa'
import {GiBathtub,GiSofa,GiGate} from 'react-icons/gi'
import {AiOutlineCheck,AiFillPhone} from 'react-icons/ai'
import {TiSocialTwitter,TiSocialVimeo} from 'react-icons/ti'
import { getDetails, getPhotos } from '../Store/Actions/ProductsActions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../Store/Actions/ProductsActions'
// import Carousel from 'nuka-carousel';
import Spinner from '../components/Spinner'
import 'slick-carousel'

// 1240261 joh


const HomeDetails = () => {

  const dispatch = useDispatch()
  const {photos,loading} = useSelector((state) => state.home)
  const details = useSelector((state) => state.home.houses)
  const {id} = useParams()
  // const loading = useSelector((state) => state.home.loading)
  // const error = useSelector((state) => state.home.error)


  useEffect(()=>{
    dispatch(getPhotos(id))
    dispatch(getDetails(id))
  },[])
  return (
    <>
    <header className='w-full relative h-[120vh] about'>
    <img src={photos && photos[0].url_max} alt="dsd" className="absolute top-0 left-0 w-full h-full" />
    <div className="absolute py-16 space-y-8 top-5 left-5 bg-white px-10 w-[90%] md:w-[35%]">
      <h1 className="text-5xl tracking-widest font-semibold uppercase text-black">{details?.hotel_name}</h1>
      <h3 className="uppercase text-2xl">{details?.city_name_en}</h3>
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
    <div className="about-hero w-full mb-40 mt-11">
    <h1 className="ame text-center uppercase my-3 text-2xl md:text-4xl lg:text-5xl text-black">Amenities</h1>
      <h3 className="ame text-xl text-center uppercase">Complete List of Amenities and Features</h3>

      <div className="w-[85%] mx-auto flex flex-col md:grid md:grid-cols-4 mt-20">
      {/*  */}
      <ul className='space-y-3'>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[0]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[2]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[3]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[1]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[4]?.name}</p></li>
      </ul>
      {/*  */}
      <ul className='space-y-3'>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[5]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[6]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[7]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[8]?.name}</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='yellow' size={20} className='mr-3'/><p>{details && details?.property_highlight_strip && details.property_highlight_strip[9]?.name}</p></li>
      </ul>
      {/*  */}
      <ul className='space-y-3'>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
      </ul>
      {/*  */}
      <ul className='space-y-3'>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
        <li className="flex items-center"><AiOutlineCheck fill='blue' size={20} className='mr-3'/><p>Washer and Dryer</p></li>
      </ul>

      </div>
    </div>
    {/*  */}

    <div className="my-28">
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
    <div className="w-full my-10">
    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 w-[80%] mx-auto">
    {/* card */}
    <div className="flex flex-col lg:flex-row">
      <div className="img">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="losks" className='h-[20rem] w-full' />
      </div>
      <div className="px-10 py-10 space-y-4">
        <h1>Brittany Watkins</h1>
        <div className="flex">
        <AiFillPhone size={50} />
        <TiSocialVimeo size={50} />
        <TiSocialTwitter size={50} />

        </div>
        <p>1233-2456-7778</p>
        <p>1233-2456-9930</p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row">
      <div className="img">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="losks" className='h-[20rem] w-full' />
      </div>
      <div className="px-10 py-10 space-y-4">
        <h1>Brittany Watkins</h1>
        <div className="flex">
        <AiFillPhone size={50} />
        <TiSocialVimeo size={50} />
        <TiSocialTwitter size={50} />

        </div>
        <p>1233-2456-7778</p>
        <p>1233-2456-9930</p>
      </div>
    </div>

    </div>
    

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