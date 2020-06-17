import React from "react";
import style from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <main className={style.main}>
      <section className={`${style.section} container`}>{children}</section>
    </main>
  );
};

export default Main;
