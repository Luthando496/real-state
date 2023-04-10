import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {ImLocation2} from 'react-icons/im'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
// import Carousel from 'nuka-carousel';


const Footer= () => {
    return (
        <>
        <div className="w-full py-16 bg-slate-900 text-white">
        <div className="w-[90%] flex flex-col mx-auto px-2 md:grid md:grid-cols-4 gap-5">

        <div className="">
            <h1 className="fon-sans text-xl">Popular Searches</h1>

            <ul className="flex flex-col space-y-2 pt-7">
                <li><p className="text-sm">Apartment For Rent</p>
                </li>
                <li><p className="text-sm">Apartment Low to hide</p>
                </li>
                <li><p className="text-sm">Offices for Buy</p>
                </li>
                <li><p className="text-sm">Offices for Rent</p>
                </li>
            </ul>
        </div>
        {/*  */}
        <div className="">
            <h1 className="fon-sans text-xl">Popular Searches</h1>

            <ul className="flex flex-col space-y-2 pt-7">
                <li><p className="text-sm">Apartment For Rent</p>
                </li>
                <li><p className="text-sm">Apartment Low to hide</p>
                </li>
                <li><p className="text-sm">Offices for Buy</p>
                </li>
                <li><p className="text-sm">Offices for Rent</p>
                </li>
            </ul>
        </div>
        {/*  */}
        <div className="">
            <h1 className="fon-sans text-xl">Quick Links</h1>

            <ul className="flex flex-col space-y-2 pt-7">
                <li><p className="text-sm">Pricing Plans</p>
                </li>
                <li><p className="text-sm">Our Services</p>
                </li>
                <li><p className="text-sm">About Us</p>
                </li>
                <li><p className="text-sm">Contact Us</p>
                </li>
            </ul>
        </div>
        {/*  */}
        <div className="">
            <h1 className="fon-sans text-xl">Subscribe</h1>

            <ul className="flex flex-col space-y-2 pt-7 ">
            <li className='px-2 w-full flex items-center bg-gray-700'><BsFillPersonFill className='text-2xl' /><input type="text" className='w-full px-8 py-2 focus:outline-none bg-gray-700' placeholder='Your Name' />
                </li>
                <li className='px-2 w-full flex items-center bg-gray-700'><MdEmail className='text-2xl' /><input type="text" className='w-full px-8 py-2 focus:outline-none bg-gray-700' placeholder='Your Email Address' />
                </li>
                <li>
                <button className='w-full p-2 hover:bg-pink-400 duration-500 bg-blue-700'>Submit</button>
                </li>
            </ul>
        </div>

        </div>


        </div>
        
        <div className="footer w-full bg-black">
      <div className="wrap flex justify-center pt-10">
        <img src="public/luthando-high-resolution-logo-white-on-black-background.png" alt="jkj" className='w-[25rem] h-40' />
      </div>
      <div className="pt-20 text-center text-white py-5">
        <p className="text-xl">© 2023. All rights reserved. Designed by Luthando Didiza</p>
      </div>
    </div>
        </>
    );
  };

export default Footer