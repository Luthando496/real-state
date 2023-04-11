import {configureStore,createSlice} from '@reduxjs/toolkit';




const productSlice = createSlice({
    name:'product',
    initialState:{houses:null,photos:null,loading:true,error:null,resPerPage:null,newProd:{},reviews:null,proLoad:true,image:[] },
    reducers:{
        allProductsRequest(state, action){
            state.loading =true
        },
        ProductsSuccess(state, action){
            state.houses =action.payload
            state.loading =false
        },
        getPhotos(state,action){
            state.loading =true
            state.photos = action.payload
            state.loading =false
        },
        getPhotosError(state,action){
            state.loading =true
            state.error= action.payload
            state.loading =false
        },
        ProductsFail(state, action){
            state.er =action.payload
            state.loading =false
        },
        getReviews(state, action){
            state.reviews = action.payload;
        },
        newProdFail(state, action){
            state.newProd = {}
            state.proErr = action.payload
            state.proLoad = false
        },
        newPhoto(state, action){
            state.image = action.payload
        },

    }
})









export const productAction = productSlice.actions



const store = configureStore({
    reducer:{
        home:productSlice.reducer,

    }
})


export default store