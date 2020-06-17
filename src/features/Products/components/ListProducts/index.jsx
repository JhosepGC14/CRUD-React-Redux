import React from "react";
import { useHistory } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  editProductAction,
} from "../../../../actions/ProductsActions";
import Swal from "sweetalert2";

const ListProducts = ({ products }) => {
  const { nameProducts, priceProducts, id } = products;

  const dispatch = useDispatch();
  const history = useHistory(); //habilitar history para redireccionar

  //confirmar con el usuario si quiere eliminarlo
  const confirmDeleteProduct = (id) => {
    //preguntar al usuario
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        //pasarlo al action
        dispatch(deleteProduct(id));
      }
    });
  };

  //funcion que redirije de forma programada

  const redirectEdition = (products) => {
    dispatch(editProductAction(products));
    history.push(`/products/edit/${products.id}`);
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{nameProducts}</td>
      <td>
        <span className="font-weight-bold">S/.{priceProducts}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          className="mr-3 btn btn-warning"
          onClick={() => redirectEdition(products)}
        >
          EDIT
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default ListProducts;
