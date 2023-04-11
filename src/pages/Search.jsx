import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import { getProducts } from '../Store/Actions/ProductsActions'
import Spinner from '../components/Spinner'
import SimpleMap from '../components/SimpleMap'


const Search = () => {
    const houses = useSelector(state => state.home.houses)
    const loading = useSelector(state => state.home.loading)
    const [checkin_date,setCheckIn]=useState('1')
    const [room,setRoom]=useState('1')
    const [adults,setAdults]=useState('1')
    const [kids,setKids]=useState('1')
    const [sort,setSort]=useState('popularity')
    const dispatch = useDispatch()
    const {city} = useParams()
    const year =`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`

    useEffect(()=>{

        dispatch(getProducts(city,room,adults,kids,sort,year))
        
    },[city,dispatch,checkin_date])

    const SetOrders = (sort) => {
        setSort(sort)
        // console.log(room)
        dispatch(getProducts(city,room,adults,kids,sort,year))
    }

    const setRoomNumber = (room) => {
        setRoom(room)
        // console.log(room)
        dispatch(getProducts(city,room,adults,kids,sort,year))
    }

    const setAdult = (adults) => {
        setAdults(adults)
        // console.log(room)
        dispatch(getProducts(city,room,adults,kids,sort,year))
    }
    const setKid = (kids) => {
        setAdults(kids)
        // console.log(room)
        dispatch(getProducts(city,room,adults,kids,sort,year))
    }
  return (
    <>


    <section className='my-10 w-full'>
        <h1 className='text-3xl font-bold ml-10'>Results</h1>
        <p className='font-light ml-10'>5 Results</p>

        <div className="w-[85%] mt-16 mx-auto border shadow-lg shadow-cyan-900 px-4 py-2 grid md:grid-cols-4 gap-3">
        <div className="form-inp my-2">
            <select className="w-full p-2 bg-sky-500" onChange={e=>setRoomNumber(e.target.value)} defaultValue='1' >
                <option  value="1" >No of Rooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        {/* // */}

        {/*  */}
        <div className="form-inp my-2">
            <select className="w-full p-2 bg-sky-500" defaultValue='popularity' onChange={e=> SetOrders(e.target.value)} >
                <option  value="popularity">Order By</option>
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
                <option value="class_ascending">Ascending</option>
                <option value="class_descending">Descending</option>
                <option value="review_score">Review</option>
            </select>
        </div>
        {/*  */}
        <div className="form-inp my-2">
            <select className="w-full p-2 bg-sky-500" onChange={e=>setAdult(e.target.value)}   >
                <option selected value="1">No of Adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
        {/*  */}
        <div className="form-inp my-2">
            <select className="w-full p-2 bg-sky-500" defaultValue='1' onChange={e=>setKid(e.target.value)}  >
                <option value="1">No of kids</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        {/* // */}
        <div className="form-inp my-2">
        <p className='text-cyan-600'>Check in Date</p>
        <input type="date" id="start" name="trip-start"
       min="2023-03-21" className='w-full p-2 bg-blue-800' max="2023-07-24" />
        </div>
        {/*  */}
        <div className="form-inp my-2">
        <p className='text-cyan-600'>Check in Date</p>
        <input type="date" id="start" name="trip-start"
       min="2023-03-21" className='w-full p-2 bg-blue-800' max="2023-07-24" />
        </div>
        {/*  */}

        </div>
    </section>

    {/* {loading ? <Spinner /> : ''} */}


    <div className="w-full my-10 bg-gray-200 shadow-lg shadow-orange-400 py-20 rounded-t-3xl">
    {loading ? <Spinner /> :houses ? (
    <div className="w-[95%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 ">
        {houses?.result?.map((h,i)=>(
            <div key={h.id} className="flex flex-col space-y-2 border shadow-lg shadow-slate-600">
            <div >

            <Link to={`/details/${h.id.split('_')[2]}`}>
            <div  className="img relative overflow-hidden">
                <img src={h.max_1440_photo_url || h.photoMainUrl} alt="kdkd" className='h-[18rem] object-cover w-full hover:scale-125 duration-300' />
                <p className='absolute bottom-0 right-0 bg-green-500 text-white px-4 p-2'>{h.review_score_word}</p>
            </div>
            </Link>
            <div className='px-6 text-left space-y-3'>
            <h1 className='text-2xl font-semibold title'>{h.name}</h1>
            <h3 className='text-green-500 font-medium'>{h.checkoutDate}</h3>
            <p className='font-medium text-base pb-7'>Enchanting three bedroom, three bath home with spacious one bedroom, one bath</p>
            </div>
            <div className="card-footer flex gap-8 px-8 justify-between p-4 bg-slate-700">
           <Link to={`${h?.url}`} className='bg-sky-600 text-white text-md font-bold py-4 px-6 rounded-xl' >Book Now</Link>
           <Link to={`/details/${h.id.split('_')[2]}`} className='bg-sky-600 text-white text-md font-bold py-4 px-8 rounded-xl' >Room Details</Link>
          </div>

            </div>
        </div>   

        ))
    }</div>):''}

    


        
    </div>

    <SimpleMap />
    </>
  )
}

export default Search