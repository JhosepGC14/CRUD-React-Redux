import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  INIT_GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_DELETE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_PRODUCT_EDIT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";
//cada reducer tiene su propio state
const initalState = {
  products: [],
  error: false,
  loading: false,
  deleteProduct: null,
  editProduct: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case INIT_GET_PRODUCT:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }
    case GET_PRODUCT_ERROR:
    case ADD_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload
      }
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        deleteProduct: action.payload
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(products => products.id !== state.deleteProduct),
        deleteProduct: null
      }
    case GET_PRODUCT_EDIT:
      return {
        ...state,
        editProduct: action.payload,
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editProduct: null,
        products: state.products.map(products => products.id === action.payload.id ? products = action.payload : products)
      }
    default:
      return state;
  }
};