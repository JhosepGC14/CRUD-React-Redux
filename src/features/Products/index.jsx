import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductAction } from "../../actions/ProductsActions";
import ListProducts from "./components/ListProducts";
import Loading from "../Products/components/Loading";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //consultar la API
    const loadProdcts = () => dispatch(getProductAction());
    loadProdcts();
    // eslint-disable-next-line
  }, []);

  //use selector para traer el state del action
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  return (
    <Fragment>
      <h2 className="text-center pt-5 mb-5 text-light">Atenea Product's</h2>
      {error ? (
        <p className="alert alert-danger mt-5 text-center w-100">
          Something went wrong!
        </p>
      ) : null}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <Loading />{" "}
        </div>
      ) : null}
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre:</th>
            <th scope="col">Precio:</th>
            <th scope="col">Acciones:</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="4" className="alert alert-warning text-center">
                There's No Products
              </td>
            </tr>
          ) : (
            products.map((products) => (
              <ListProducts key={products.id} products={products} />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
