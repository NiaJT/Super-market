import React from "react";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductContainer = () => {
  return (
    <Box className="flex gap-8 flex-wrap justify-center items-center p-8 m-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  );
};

export default ProductContainer;
