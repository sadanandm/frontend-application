import axios from "axios";
import { api,} from "../../constant";
import { GET_CONFIGURATION, GET_PRODUCT, GET_TRL_DATA, UPDATE_PRODUCT } from "./actionType";
// get product Detials
export const productDetails = (productId) => async(dispatch) =>{
try{
   const results = await axios.get(`${api}/product/${productId}/`)
  dispatch({
      type:GET_PRODUCT,
      payload:results?.data ||[]
  })
}
catch(error){
    console.log(error)
}
}
// update categories,businessModels, trl
export const updateProductDetails = (productId,updateData) => async(dispatch) =>{
    try{
        const results = await axios.put(`${api}/product/${productId}`,updateData);
        dispatch({
            type:UPDATE_PRODUCT,
            payload:results?.data ||[]
        });
    }
    catch(error){
        console.log(error);
    }
}
//  normal use update categories,businessModels, trl
export const updateProductDetail = (updateData) => async(dispatch) =>{
       dispatch({
           type:UPDATE_PRODUCT,
           payload:updateData ||[]
       })
    }
    

    //  get  Trl data
    export const getTrl = () => async(dispatch) =>{
    try{
        const results = await axios.get(`${api}trl/`);
        dispatch({
            type:GET_TRL_DATA,
            payload:results?.data ||[]
        });
    }
    catch(error){
        console.log(error);
    }
}
// get configuration data
export const getConfiguration = () => async(dispatch) =>{
    console.log(process.env)
    try{
       const results = await axios.get(`${api}configuration/${process.env.REACT_APP_ID?process.env.REACT_APP_ID:1}/`)
        dispatch({
            type:GET_CONFIGURATION,
            payload:results?.data 
        });
    }
    catch(error){
        console.log(error);
    }
   }