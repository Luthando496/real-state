import {productAction} from '../store'
import axios from 'axios'



// let the room 1

export const getProducts = (
    city, 
    room, 
    adults, 
    kids, 
    sort, 
    checkInDate, 
    checkOutDate
) =>
    async (dispatch) => {
      try {
        // Default values
        
        // Log search parameters for debugging
        // console.log('Search params:', { 
        //   city, room, adults, kids, sort, 
        //   checkInDate: checkInDate || defaultCheckInDate, 
        //   checkOutDate: checkOutDate || defaultCheckOutDate 
        // });
         
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const formatDate = (date) => {
            return date.toISOString().split('T')[0];
        };
        
        const minCheckInDate = formatDate(today);
        const minCheckOutDate = checkInDate 
            ? formatDate(new Date(checkInDate + 'T00:00:00')) 
            : formatDate(tomorrow);
        
        // Current year formatted for API
        const currentYear = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        // Dispatch request action to update loading state
        dispatch(productAction.allProductsRequest());
        
        if(!checkInDate || checkInDate === ''){
          checkInDate =  currentYear
        }
        
        if(!checkOutDate || checkOutDate === ''){
            checkOutDate =  minCheckOutDate
          }
          
          console.log(`Your Check IN Date: ${checkInDate}. ${currentYear} Your Check OUT Date:${checkOutDate}`)
        // Make API request
        const { data } = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/search', {
          params: {
            // Mandatory parameters
            dest_id: city,
            dest_type: 'city',
            
            // Date parameters (use provided dates or defaults)
            checkin_date: checkInDate,
            checkout_date: checkOutDate,
            
            // Room and guest parameters
            room_number: room || '1',
            adults_number: adults || '1',
            children_number: kids || '1',
            children_ages: kids && parseInt(kids) > 0 ? '5,0' : '',
            
            // Sorting and filtering
            order_by: sort || 'popularity',
            filter_by_currency: 'ZAR',
            
            // Additional parameters
            locale: 'en-gb',
            units: 'metric',
            include_adjacency: 'true',
            page_number: '2'  // Changed from '2' to '1' to show first page of results
          },
          headers: {
            'X-RapidAPI-Key': '9ca1b675cbmsh0a118d1e4608e5fp179722jsn09c6585af4f5',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
          }
        });
        
        console.log('API response:', data);
        
        // Dispatch success action with data
        dispatch(productAction.ProductsSuccess(data));
        
      } catch (err) {
        // Extract error message
        const errorMessage = err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
          
        console.error('API error:', errorMessage);
        
        // Dispatch failure action with error message
        dispatch(productAction.ProductsFail(errorMessage));
      }
    };


export const getDetails = (id) =>
    async dispatch =>{
        try{

            dispatch(productAction.allProductsRequest())

            const {data} = await axios.get(`https://booking-com.p.rapidapi.com/v2/hotels/details`,{
                params: {
                    checkout_date: '2023-09-06',
                    locale: 'en-gb',
                    hotel_id: id,
                    checkin_date: '2023-09-05',
                    currency: 'ZAR'
                  },
                  headers: {
                    'X-RapidAPI-Key': '9ca1b675cbmsh0a118d1e4608e5fp179722jsn09c6585af4f5',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
                  }
            })

            console.log(data)



            dispatch(productAction.ProductsSuccess(data))



        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
        }
}



export const getPhotos = (id) =>
    async dispatch =>{
        try{

            dispatch(productAction.allProductsRequest())

            const {data} = await axios.get(`https://booking-com.p.rapidapi.com/v1/hotels/photos`,{
                params: {hotel_id: id, locale: 'en-gb'},
                headers: {
                  'X-RapidAPI-Key': '9ca1b675cbmsh0a118d1e4608e5fp179722jsn09c6585af4f5',
                  'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
                }
            })

            console.log(data)



            dispatch(productAction.getPhotos(data))



        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(productAction.getPhotosError(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }
}



export const Reviews = (id) =>
    async dispatch =>{

        // dispatch(detailsAction.allProductsRequest())
        try{

            const {data} = await axios.get(`https://booking-com.p.rapidapi.com/v1/hotels/reviews`,{
            params: {locale: 'en-gb', hotel_id: `${id}`, sort_type: 'SORT_MOST_RELEVANT'},
            headers: {
                'X-RapidAPI-Key': '9ca1b675cbmsh0a118d1e4608e5fp179722jsn09c6585af4f5',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }})


            dispatch(productAction.getReviews(data))



        }catch(err){
            console.log(err)
            // dispatch(detailsAction.ProductsDetailsFail(err || err.response || err.response.data))
        }
}



















