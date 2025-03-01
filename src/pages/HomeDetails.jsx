import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { FaBed, FaSwimmingPool, FaParking } from 'react-icons/fa';
import { GiBathtub, GiSofa, GiGate } from 'react-icons/gi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { getDetails, getPhotos, Reviews } from '../Store/Actions/ProductsActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import Spinner from '../components/Spinner';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const HomeDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { photos, loading, reviews, houses: details } = useSelector((state) => state.home);

  // Fetch data when component mounts or id changes
  const fetchData = useCallback(() => {
    dispatch(getPhotos(id));
    dispatch(getDetails(id));
    dispatch(Reviews(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Render star rating
  const renderStars = (score) => {
    const roundedScore = Math.round(score || 0);
    return Array(5).fill(0).map((_, i) => (
      <span key={i}>
        {i < roundedScore ? 
          <AiFillStar fill="gold" className="text-3xl" /> : 
          <AiOutlineStar className="text-3xl" />
        }
      </span>
    ));
  };

  // Property features data
  const features = [
    { icon: <FcHome size={50} />, title: 'Built in 1976', static: true },
    { icon: <FaBed fill="green" size={50} />, title: details?.property_highlight_strip?.[0]?.name },
    { icon: <GiBathtub fill="green" size={50} />, title: details?.property_highlight_strip?.[1]?.name },
    { icon: <FaSwimmingPool fill="green" size={50} />, title: details?.property_highlight_strip?.[9]?.name },
    { icon: <FaParking fill="#333390" size={50} />, title: details?.property_highlight_strip?.[7]?.name },
    { icon: <FaSwimmingPool fill="purple" size={50} />, title: details?.property_highlight_strip?.[3]?.name },
    { icon: <GiSofa fill="red" size={50} />, title: '2475 Sq Ft', static: true },
    { icon: <GiGate fill="blue" size={50} />, title: details?.property_highlight_strip?.[5]?.name },
  ];

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="relative w-full py-32 min-h-[120vh] bg-gray-200">
        {photos?.[0]?.url_max && (
          <img 
            src={photos[0].url_max} 
            alt={details?.hotel_name} 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute top-5 left-5 bg-white p-10 w-[90%] lg:w-[35%] space-y-6 shadow-lg">
          <h1 className="text-xl lg:text-5xl tracking-widest font-semibold uppercase">{details?.hotel_name}</h1>
          <h3 className="uppercase text-md lg:text-2xl">{details?.city_name_en}</h3>
          <p className="text-xl">{details?.district}</p>
          
          <h3 className="uppercase text-2xl">Request Info</h3>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-4 text-xl border rounded-lg placeholder:text-gray-400"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 border rounded-lg" />
            </div>
            <button 
              type="submit"
              className="w-full p-4 text-white bg-green-500 hover:bg-red-500 duration-300 text-xl rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </header>

      {/* Property Details */}
      <section className="container mx-auto my-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center uppercase mb-3">About The Property</h1>
        <h3 className="text-xl text-center uppercase mb-10">For Sale</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 w-[90%] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div>{feature.icon}</div>
              <div className="space-y-2">
                <h2 className="font-bold text-xl capitalize">{feature.title}</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="relative min-h-[400px] flex justify-center">
        {photos?.[2]?.url_max && (
          <img 
            src={photos[2].url_max} 
            alt="Neighborhood" 
            className="w-[88%] object-cover h-full rounded-lg"
            loading="lazy"
          />
        )}
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto my-20">
        <h1 className="text-4xl md:text-6xl text-center text-cyan-600 mb-3">Property Photo Gallery</h1>
        <p className="text-center text-xl text-gray-300 mb-7">Elegantly Decorated Home With Iconic Views</p>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          spaceBetween={50}
          slidesPerView={3}
          loop
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className="hidden lg:block"
        >
          {photos?.map((photo, index) => (
            <SwiperSlide key={index}>
              <img 
                src={photo.url_max} 
                alt={`Property view ${index + 1}`} 
                className="h-[30rem] w-full object-cover rounded-lg"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto py-20">
        <h1 className="text-5xl text-center font-bold text-cyan-600 mb-12">Reviews</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews?.result?.slice(0, 9).map((review, index) => (
            <article key={index} className="bg-teal-700 p-6 rounded-lg shadow-lg">
              <div className="flex gap-2 mb-4">{renderStars(review.average_score)}</div>
              <h2 className="text-xl lg:text-2xl font-bold text-amber-500 mb-2 capitalize">{review.title}</h2>
              <p className="text-gray-800 mb-2">
                <span className="font-semibold">Cons:</span>{' '}
                <span className="text-red-700">{review.cons}</span>
              </p>
              <p className="text-sky-900 font-bold mb-2">
                <span>Pros:</span> {review.pros}
              </p>
              <p className="text-gray-200">
                <span className="font-semibold">Author:</span> {review?.author?.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto py-20">
        <div className="bg-black/40 rounded-lg w-[90%] md:w-[50%] mx-auto p-8 space-y-6 text-white">
          <h1 className="text-4xl text-center uppercase">Request Info</h1>
          <p className="text-center text-2xl">Lorem ipsum dolor sit amet.</p>
          <form className="space-y-4">
            <input type="text" className="w-full p-4 rounded-lg bg-white/10" placeholder="Name" />
            <input type="email" className="w-full p-4 rounded-lg bg-white/10" placeholder="Email" />
            <input type="tel" className="w-full p-4 rounded-lg bg-white/10" placeholder="Phone" />
            <textarea className="w-full p-4 rounded-lg bg-white/10 h-32" placeholder="Message"></textarea>
            <button 
              type="submit" 
              className="w-full p-4 rounded-lg bg-green-500 hover:bg-lime-600 duration-300 text-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomeDetails;