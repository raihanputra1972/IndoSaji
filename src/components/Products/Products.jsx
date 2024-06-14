import React from "react";
import Heading from "../Shared/Heading";
import ProductsCard from "./ProductCard";

//import img
import MieAyam from "../../assets/Product/mie-ayam.png";
import NasiCampur from "../../assets/Product/nasi-campur.png";
import PizzaTomato from "../../assets/Product/pizza-tomato.png";
import Bakso from "../../assets/Product/bakso.png";

const ProductsData = [
  {
    id: 1,
    img: MieAyam,
    title: "Mie Ayam",
    price: 13000,
    aosDelay: "0",
  },
  {
    id: 2,
    img: NasiCampur,
    title: "Nasi Campur",
    price: 12000,
    aosDelay: "200",
  },
  {
    id: 3,
    img: PizzaTomato,
    title: "Pizza Tomato",
    price: 35000,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Bakso,
    title: "Bakso",
    price: 15000,
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: MieAyam,
    title: "Mie Ayam",
    price: 13000,
    aosDelay: "0",
  },
  {
    id: 2,
    img: NasiCampur,
    title: "Nasi Campur",
    price: 12000,
    aosDelay: "200",
  },
  {
    id: 3,
    img: PizzaTomato,
    title: "Pizza Tomato",
    price: 35000,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Bakso,
    title: "Bakso",
    price: 15000,
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Body Section */}
        <ProductsCard data={ProductsData} />
        <ProductsCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
