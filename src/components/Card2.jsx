import React from 'react'

const Card2 = () => {
  return (
    <div className='w-full py-11'>
        <div className="w-[90%] mx-auto text-center">
        <h1 className="text-3xl">We are Offering the Best Real Estate Deals</h1>

        <p className='text-medium my-5'>Look at our Latest listed properties and check out the facilities on them, We have already sold more than 5,000 Homes and we are still going at very good pace. We would love you to look into these properties and we hope that you will find something match-able to your needs.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {/*  */}
        <div className="flex flex-col space-y-2 border shadow-lg shadow-slate-600">
            <div className="img relative overflow-hidden">
                <img src="https://images.pexels.com/photos/4061979/pexels-photo-4061979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kdkd" className='h-[20rem] w-full hover:scale-125 duration-300' />
                <p className='absolute bottom-0 right-0 bg-green-500 text-white px-4 p-2'>Rent</p>
            </div>
            <div className='px-6 text-left space-y-3'>
            <h1 className='text-2xl font-semibold title'>Home In Merrick Way</h1>
            <h3 className='text-green-500 font-medium'>$540,000</h3>
            <p className='font-medium text-base pb-7'>Enchanting three bedroom, three bath home with spacious one bedroom, one bath</p>
            </div>
            <div className="card-footer flex p-4 bg-slate-700">
            <p className='text-sm mr-2'><span className='text-blue-500 text-base '>3500</span> Sq Ft,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3</span>Beds</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3.5</span>Baths,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>2</span>Garages</p>
          </div>

        </div>
        {/*  */}

        <div className="flex flex-col space-y-2 border shadow-lg shadow-slate-600">
            <div className="img relative overflow-hidden">
                <img src="https://images.pexels.com/photos/4061979/pexels-photo-4061979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kdkd" className='h-[20rem] w-full hover:scale-125 duration-300' />
                <p className='absolute bottom-0 right-0 bg-green-500 text-white px-4 p-2'>Rent</p>
            </div>
            <div className='px-6 text-left space-y-3'>
            <h1 className='text-2xl font-semibold title'>Home In Merrick Way</h1>
            <h3 className='text-green-500 font-medium'>$540,000</h3>
            <p className='font-medium text-base pb-7'>Enchanting three bedroom, three bath home with spacious one bedroom, one bath</p>
            </div>
            <div className="card-footer flex p-4 bg-slate-700">
            <p className='text-sm mr-2'><span className='text-blue-500 text-base '>3500</span> Sq Ft,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3</span>Beds</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3.5</span>Baths,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>2</span>Garages</p>
          </div>

        </div>

        <div className="flex flex-col space-y-2 border shadow-lg shadow-slate-600">
            <div className="img relative overflow-hidden">
                <img src="https://images.pexels.com/photos/4061979/pexels-photo-4061979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kdkd" className='h-[20rem] w-full hover:scale-125 duration-300' />
                <p className='absolute bottom-0 right-0 bg-green-500 text-white px-4 p-2'>Rent</p>
            </div>
            <div className='px-6 text-left space-y-3'>
            <h1 className='text-2xl font-semibold title'>Home In Merrick Way</h1>
            <h3 className='text-green-500 font-medium'>$540,000</h3>
            <p className='font-medium text-base pb-7'>Enchanting three bedroom, three bath home with spacious one bedroom, one bath</p>
            </div>
            <div className="card-footer flex p-4 bg-slate-700">
            <p className='text-sm mr-2'><span className='text-blue-500 text-base '>3500</span> Sq Ft,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3</span>Beds</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>3.5</span>Baths,</p>
            <p className='text-sm mr-2'><span className='text-blue-500 text-base mr-2'>2</span>Garages</p>
          </div>

        </div>

        </div>

        </div>

    </div>
  )
}

export default Card2