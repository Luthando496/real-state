import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../Store/Actions/ProductsActions';
import Spinner from '../components/Spinner';
import SimpleMap from '../components/SimpleMap';

const Search = () => {
    const { houses, loading } = useSelector(state => ({
        houses: state.home.houses,
        loading: state.home.loading
    }));
    const dispatch = useDispatch();
    const { city } = useParams();
    
    // Form state
    const [filters, setFilters] = useState({
        room: '1',
        adults: '1',
        kids: '0',
        sort: 'popularity',
        checkInDate: '',
        checkOutDate: ''
    });
    
    // Derived date values
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };
    
    const minCheckInDate = formatDate(today);
    const minCheckOutDate = filters.checkInDate 
        ? formatDate(new Date(filters.checkInDate + 'T00:00:00')) 
        : formatDate(tomorrow);
    
    // Current year formatted for API
    const currentYear = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Submit form with debounce
    const [debouncedFilters, setDebouncedFilters] = useState(filters);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedFilters(filters);
        }, 500);
        
        return () => clearTimeout(timer);
    }, [filters]);
    
    // Fetch products when filters change
    const fetchProducts = useCallback(() => {
        const { room, adults, kids, sort, checkInDate, checkOutDate } = debouncedFilters;
        dispatch(getProducts(
            city, 
            room, 
            adults, 
            kids, 
            sort, 
            checkInDate, 
            checkOutDate
        ));
    }, [debouncedFilters, city, currentYear, dispatch]);
    
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchProducts();
    };
    
    const resultCount = houses?.result?.length || 0;

    return (
        <>
            <section className="my-10 w-full">
                <div className="w-[90%] mx-auto">
                    <h1 className="text-3xl font-bold">Results for {city}</h1>
                    <p className="font-light">{resultCount} Results</p>
                
                    <form 
                        onSubmit={handleSubmit} 
                        className="mt-8 border rounded-lg shadow-lg p-6 bg-white"
                    >
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="form-group">
                                <label htmlFor="room" className="block text-sm font-medium text-gray-700 mb-1">
                                    Rooms
                                </label>
                                <select 
                                    id="room"
                                    name="room"
                                    className="w-full p-2 border border-gray-300 rounded-md bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                    value={filters.room}
                                >
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                                    Adults
                                </label>
                                <select 
                                    id="adults"
                                    name="adults"
                                    className="w-full p-2 border border-gray-300 rounded-md bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                    value={filters.adults}
                                >
                                    {[1, 2, 3, 4, 5, 6].map(num => (
                                        <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="kids" className="block text-sm font-medium text-gray-700 mb-1">
                                    Children
                                </label>
                                <select 
                                    id="kids"
                                    name="kids"
                                    className="w-full p-2 border border-gray-300 rounded-md bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                    value={filters.kids}
                                >
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                                    Sort By
                                </label>
                                <select 
                                    id="sort"
                                    name="sort"
                                    className="w-full p-2 border border-gray-300 rounded-md bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                    value={filters.sort}
                                >
                                    <option value="popularity">Popularity</option>
                                    <option value="price_asc">Price: Low to High</option>
                                    <option value="price_desc">Price: High to Low</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Check-in Date
                                </label>
                                <input
                                    id="checkInDate"
                                    name="checkInDate"
                                    type="date"
                                    min={minCheckInDate}
                                    value={filters.checkInDate}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Check-out Date
                                </label>
                                <input
                                    id="checkOutDate"
                                    name="checkOutDate"
                                    type="date"
                                    min={minCheckOutDate}
                                    disabled={!filters.checkInDate}
                                    value={filters.checkOutDate}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-md bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                                />
                            </div>
                            
                            <div className="form-group md:col-span-2">
                                <button 
                                    type="submit"
                                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {loading ? (
                <div className="flex justify-center my-16">
                    <Spinner />
                </div>
            ) : resultCount === 0 ? (
                <div className="w-[90%] mx-auto my-16 text-center">
                    <h2 className="text-2xl font-semibold mb-2">No results found</h2>
                    <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
            ) : (
                <div className="w-full my-10 bg-gray-100 py-12 rounded-t-lg">
                    <div className="w-[90%] mx-auto">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {houses?.result?.map((hotel) => (
                                <div key={hotel.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <Link to={`/details/${hotel.id.split('_')[2]}`} className="block">
                                        <div className="relative h-56 overflow-hidden">
                                            <img 
                                                src={hotel.max_photo_url || hotel.photoMainUrl} 
                                                alt={hotel.hotel_name} 
                                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
                                            />
                                            {hotel.review_score_word && (
                                                <div className="absolute bottom-0 right-0 bg-green-500 text-white px-3 py-1 font-medium">
                                                    {hotel.review_score_word}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                    
                                    <div className="p-5">
                                        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{hotel.hotel_name}</h2>
                                        
                                        <div className="mb-3 text-gray-600">
                                            <p>{hotel.city}, {hotel.country_trans}</p>
                                            <p className="text-sm line-clamp-1">{hotel.address_trans}</p>
                                        </div>
                                        
                                        <div className="flex justify-between items-end mt-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Price per night</p>
                                                <p className="text-xl font-bold text-blue-700">
                                                    {hotel.price_breakdown.currency} {hotel.price_breakdown.all_inclusive_price}
                                                </p>
                                            </div>
                                            
                                            <div className="flex gap-2">
                                                <Link 
                                                    to={`/details/${hotel.id.split('_')[2]}`} 
                                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                                >
                                                    Details
                                                </Link>
                                                <a 
                                                    href={hotel.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                                >
                                                    Book
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {resultCount > 0 && (
                <div className="w-[90%] mx-auto my-12">
                    <h2 className="text-2xl font-semibold mb-6">Location</h2>
                    <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                        <SimpleMap />
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;