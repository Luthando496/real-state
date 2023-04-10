import React from 'react'

const Card = () => {
  return (
    <div className="card rounded-lg flex flex-col lg:flex-row border border-solid ">
          <div className="img-card relative">
            <img src="https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="love" className='h-[20rem] w-full lg:h-[15rem]' />
            <p className='absolute bottom-0 right-0 bg-blue-400 p-2'>For Sale</p>
          </div>
          <div className="space-y-3 flex flex-col justify-between">
            <h3 className="px-6 py-2 text-2xl text-black">VIlla in Coral Gables</h3>
            <h4 className="px-6 py-2 text-xl text-green-600 font-medium">$825,000</h4>
            <p className="px-6 text-lg text-black">Spacious and fabulous home in prime location. This executive style 3.</p>
          <div className="card-footer flex p-4 bg-slate-700">
            <p className='text-sm mr-2'><span className='text-blue-500 text-base '>3500</span> Sq Ft,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3</span>Beds</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3.5</span>Baths,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>2</span>Garages</p>
          </div>
          </div>
        </div>
  )
}

export default Card