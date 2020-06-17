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
  INIT_PRODUCT_EDIT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

//crear nuevos products
export function addNewProductAction(products) {
  return async (dispatch) => {
    dispatch(addProducts());
    try {
      //insertar en la api 
      await clienteAxios.post('/products', products);
      //si todo sale bien se actualiza el state
      dispatch(addProductSucess(products));
      //Alerta Exito
      Swal.fire(
        'Sucess',
        'The Product added correctly',
        'success'
      );
    } catch (error) {
      console.log(error)
      dispatch(addProductError(true));
      //Alerta Error
      Swal.fire({
        icon: 'error',
        title: 'Oops...Try it again!',
        text: 'Something went wrong!',
      });
    }
  }
}

const addProducts = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

//si el producto se guarda en la base de datos
const addProductSucess = (products) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: products
});

//si hubo el error

const addProductError = (estado) => ({
  type: ADD_PRODUCT_ERROR,
  payload: estado,
});

//FUNCION QUE DESCARGA LOS PRODUCTOS DE LA BD

export function getProductAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());
    try {
      const response = await clienteAxios.get('/products');
      dispatch(downloadProductsSucess(response.data))
    } catch (error) {
      console.log(error)
      dispatch(downloadProductsError());
    }
  }
}

//comienza la descarga del API
const downloadProducts = () => ({
  type: INIT_GET_PRODUCT,
  payload: true,
});

//descarga exitosa y muestra los productos
const downloadProductsSucess = (products) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: products,
});

//descarga erronea 
const downloadProductsError = () => ({
  type: GET_PRODUCT_ERROR,
  payload: true,
});

//SELECCIONA Y ELIMINA EL PRODUCTO
export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));
    try {
      await clienteAxios.delete(`/products/${id}`);
      dispatch(deleteProductSuccess());
      //si se elemina, mostramos la alerta
      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());
    }
  }
}

const getProductDelete = id => ({
  type: GET_PRODUCT_DELETE,
  payload: id
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true
});


//COLOCAR EL PRODUCTO A EDITAR
export function editProductAction(products) {
  return (dispatch) => {
    dispatch(getProductEdit(products))
  }
};

const getProductEdit = products => ({
  type: GET_PRODUCT_EDIT,
  payload: products
});

//EDITA UN REGISTRO EN LA API Y STATE
export function editProduct(products) {
  return async (dispatch) => {
    dispatch(initProductEdit());
    try {
      await clienteAxios.put(`/products/${products.id}`, products);
      dispatch(editProductSuccess(products));
    } catch (error) {
      console.log(error);
      dispatch(EditProductError())
    }
  }
}

const initProductEdit = () => ({
  type: INIT_PRODUCT_EDIT
});

const editProductSuccess = products => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: products
});

const EditProductError = () => ({
  type: EDIT_PRODUCT_ERROR,
  payload: true
});