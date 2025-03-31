"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Box, CircularProgress, Button,Stack} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios.instance";
import toast from "react-hot-toast";

export interface IProductCard {
  sellerId: string;
  image?: string;
  _id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  shortDescription: string;
}

const ProductContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isPending, data, error } = useQuery({
    queryKey: ["Product-details", currentPage],
    queryFn: async () => {
      return await axiosInstance.post("/product/seller/list", {
        page: currentPage,
        limit: 5,
      });
    },
    keepPreviousData: true,
  });

  const productList: IProductCard[] = data?.data?.productList;
  const totalPages: number = data?.data?.totalPages;

  if (isPending) {
    return <CircularProgress />;
  }

  if (error) {
    toast.error(error?.response?.data?.message);
    return;
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Stack>
    <Box className="flex gap-8 flex-wrap justify-center items-center p-8 m-8">
      {productList?.map((item) => {
        return <ProductCard key={item._id} {...item} />;
      })}


    </Box>
    <Box className="flex justify-center gap-4 mb-4">
        <Button
          variant="contained" color="success"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
           variant="contained" color="success"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
    </Stack>
  );
};

export default ProductContainer;
