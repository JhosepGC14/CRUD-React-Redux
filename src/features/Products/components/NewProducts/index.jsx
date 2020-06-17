import React, { useState } from "react";
import style from "./NewProduct.module.css";
import Loading from "../Loading";
//desde el action de Redux
import { useDispatch, useSelector } from "react-redux";
import { addNewProductAction } from "../../../../actions/ProductsActions";
import { showAlert, hideAlert } from "../../../../actions/AlertaAction";

const NewProducts = ({ history }) => {
  //el state del componente
  const [nameProducts, setNameProducts] = useState("");
  const [priceProducts, setPriceProducts] = useState("");

  //utilizamos use dispatch y te crea una funcion , nos sirve para mandar a ejecutar las acciones que tengamos
  const dispatch = useDispatch();
  //el dispatch mandaa a llamar el action de productAction
  const addNewProduct = (products) => dispatch(addNewProductAction(products));

  //acceder al state del store
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);

  //cuando el usuario haga un submit
  const submitNewProduct = (e) => {
    e.preventDefault();

    //validar form
    if (nameProducts.trim === "" || priceProducts === "") {
      const alert = {
        msg: "Both fields are mandatory",
        classes: "alert alert-danger text-center text-uppercase p3 mt-4",
      };
      dispatch(showAlert(alert));
      return;
    }

    //Si no hay error
    dispatch(hideAlert());

    // crear el nuevo producto
    addNewProduct({
      nameProducts,
      priceProducts,
    });

    //se redirecciona al home
    history.push("/");
  };

  return (
    <div className={`${style.contenedor} row justify-content-center`}>
      <div className="col-md-8 mt-5">
        <div className={`${style.bg_tranparente_white} card`}>
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                {" "}
                <Loading />{" "}
              </div>
            ) : null}
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label htmlFor="name">Product Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name's Product"
                  id="name"
                  name="nameProducts"
                  value={nameProducts}
                  onChange={(e) => setNameProducts(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="" htmlFor="price">
                  Price Of Product:
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price's Product"
                  id="price"
                  name="priceProducts"
                  value={priceProducts}
                  onChange={(e) => setPriceProducts(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className={`${style.bg_color} btn btn-primary text-uppercase d-block w-100`}
              >
                Add Product
              </button>
            </form>
            {error ? (
              <div class="alert alert-danger mt-3 text-center" role="alert">
                An error has occurred, Try it again!
              </div>
            ) : null}
            {alert ? (
              <div className={alert.classes} role="alert">
                {alert.msg}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
