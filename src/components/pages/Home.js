import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import Carrousel from "../../components/Carrousel";
import Contact from "../contacto";
import BannerC from "../BannerC";

const Home = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <BannerC />
      <Products products={products} />
      <Carrousel />
      <Contact />
    </div>
  );
};

export default Home;
