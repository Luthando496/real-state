import {configureStore,createSlice} from '@reduxjs/toolkit';




const productSlice = createSlice({
    name:'product',
    initialState:{houses:null,photos:null,loading:true,error:null,resPerPage:null,newProd:{},proErr:null,proLoad:true,image:[] },
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
        newProduct(state, action){
            state.newProd = action.payload
            state.proErr = null
            state.proLoad = false
        },
        newPhoto(state, action){
            state.image = action.payload
        },

        newProdFail(state, action){
            state.newProd = {}
            state.proErr = action.payload
            state.proLoad = false
        }

    }
})









export const productAction = productSlice.actions



const store = configureStore({
    reducer:{
        home:productSlice.reducer,

    }
})


export default store