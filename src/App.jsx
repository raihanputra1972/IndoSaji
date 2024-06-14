import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import NasiLemak from "./assets/category/nasi-lemak.png";
import SeaFood from "./assets/category/seafood.png";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const BannerData = {
  discount: "30% OFF",
  title: "Sunday Sale",
  date: "1 Jun to 20 Jun",
  image: NasiLemak,
  title2: "Air Solo Bass",
  title3: "Sunday Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Sunday Sale",
  date: "1 Jun to 20 Jun",
  image: SeaFood,
  title2: "Air Solo Bass",
  title3: "Sunday Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  bgColor: "#3D3B40",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <About />
      <Footer />
    </div>
  );
};

export default App;
