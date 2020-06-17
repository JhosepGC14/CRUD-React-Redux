import React, { useState, useEffect } from "react";
import style from "./EditProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../../../actions/ProductsActions";
import { useHistory } from "react-router-dom";

const EditProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //nuevo state de producto a editar
  const [products, saveProducts] = useState({
    nameProducts: "",
    priceProducts: 0,
  });

  //producto a editar
  const productsEdit = useSelector((state) => state.products.editProduct);

  useEffect(() => {
    saveProducts(productsEdit);
  }, [productsEdit]);

  //leerlos datos del form
  const onChangeForm = (e) => {
    saveProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const { nameProducts, priceProducts } = products;

  const submitEditProduct = (e) => {
    e.preventDefault();

    //action
    dispatch(editProduct(products));

    //redireccionar al home
    history.push("/");
  };

  return (
    <div className={`${style.contenedor} row justify-content-center`}>
      <div className="col-md-8 mt-5">
        <div className={`${style.bg_tranparente_white} card`}>
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
            <form onSubmit={submitEditProduct}>
              <div className="form-group">
                <label htmlFor="nameProducts">Product Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name's Product"
                  id="nameProducts"
                  name="nameProducts"
                  value={nameProducts}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label htmlFor="priceProducts">Price Of Product:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price's Product"
                  id="priceProducts"
                  name="priceProducts"
                  value={priceProducts}
                  onChange={onChangeForm}
                />
              </div>
              <button
                type="submit"
                className={`${style.bg_color} btn btn-primary text-uppercase d-block w-100`}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProducts;
