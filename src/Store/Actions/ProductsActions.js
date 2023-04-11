import {productAction} from '../store'
import axios from 'axios'


export const getProducts = (city,room,adults,kids,sort) =>
    async dispatch =>{
        try{

            // let room_number = `${room}` ? `${room}` :'1'
            console.log(city,room,adults,kids,sort)

            dispatch(productAction.allProductsRequest())
            
            const {data} = await axios.get(`https://booking-com.p.rapidapi.com/v1/hotels/search`,{
                params: {
                    order_by: `${sort}` || 'popularity',
                    adults_number: `${adults}` || '1',
                    locale: 'en-gb',
                    dest_type: 'city',
                    units: 'metric',
                    room_number: `${room}` || '1',
                    dest_id: `${city}`,
                    filter_by_currency: 'ZAR',
                    checkout_date: '2023-09-06',
                    checkin_date: '2023-09-05',
                    children_ages: '5,0',
                    include_adjacency: 'true',
                    children_number: `${kids}` || '1',
                    page_number: '2'
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
            dispatch(productAction.ProductsFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }
}


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



















