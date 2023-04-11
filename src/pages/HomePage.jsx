import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../Store/Actions/ProductsActions'


const HomePage = () => {
  const [city,setCity] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const Submit =(e)=>{
    e.preventDefault()
    // dispatch(getProducts(city))
    navigate(`/results/${city}`)
    

  }
  return (
    <section className='h-screen w-full mt-10 home'>
    <div className="flex justify-center items-center h-full">
    <div className="w-[85%] mt-16 mx-auto border shadow-lg shadow-cyan-900 gap-5 px-4 py-2 md:grid md:grid-cols-5">
        <div className="form-inp my-2 col-span-2">
            <select className="w-full p-4 bg-sky-500" defaultValue={city} onChange={(e)=> setCity(e.target.value)}>
                <option selected value="-1217214">Choose City</option>
                <option  value="-1217214">Cape Town</option>
                <option value="-1240261">Johannesburg</option>
                <option value="-1224926">Durban</option>
                <option value="-574890">Toronto</option>
                <option value="20088325">New York</option>
                <option value="-1746443">Berlin</option>
                <option value="-132007">Venice</option>
                <option value="20014181">Los Angeles</option>
                <option value="20015732">San Francisco</option>
                <option value="2614">Chicago</option>
            </select>
        </div>
        {/* // */}
        {/*  */}
        <div className="form-inp col-span-3 my-2">
            <button type='submit' onClick={Submit} className="w-full bg-red-700 text-white hover:bg-sky-600 duration-500 p-4">Search</button>
        </div>
        {/*  */}


        </div>
    </div>
    </section>
  )
}

export default HomePage