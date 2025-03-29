import React from "react";
import ProductContainer from "../../components/ProductContainer";
import { NextPage } from "next";
import AddProductButton from "@/components/AddProductButton";

const Home: NextPage = () => {
  return (
    <>
      <AddProductButton />
      <ProductContainer />
    </>
  );
};

export default Home;
