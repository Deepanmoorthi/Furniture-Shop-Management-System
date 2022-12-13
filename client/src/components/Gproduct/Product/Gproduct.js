import React from "react";
import {granite} from "../../../data";
import Cards from "../Product/Card";
import "./gproduct.css";
import Footer from "../../Footer";


const Amazon = ({ handleClick }) => {
  return (
    <>
      <section className="sectiong">
        {granite.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
      <Footer/>
    </>
  );
};

export default Amazon;
