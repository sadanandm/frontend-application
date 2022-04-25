import { GET_CONFIGURATION, GET_PRODUCT, GET_TRL_DATA, UPDATE_PRODUCT } from "../action/actionType";

const initialState = {
  productData: [],
  updataData:[],
  trl: [],
  configuration:[],
  success:false
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get product Details
    case GET_PRODUCT:
      return {
        ...state,
        productData: action?.payload,
      };
      // update details categories,businessModels, trl
    case UPDATE_PRODUCT:
      return {
        ...state,
        productData: action?.payload,
       success:true
      };
      // get trl data
    case GET_TRL_DATA:
      return {
        ...state,
        trl: action?.payload,
      };
      case GET_CONFIGURATION:
        return {
          ...state,
          configuration: action?.payload,
        };
    default:
      return state;
    // do nothing
  }
}
