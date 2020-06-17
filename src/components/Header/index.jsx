import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.bg_color}>
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
        <div className="container">
          <h1>
            <Link to={"/"} className="text-light">
              CRUD with React Hooks, Redux, REST API & Axios
            </Link>
          </h1>
        </div>
        <Link
          to={"/products/new"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
        >
          Agregar Producto &#43;
        </Link>
      </nav>
    </header>
  );
};

export default Header;
