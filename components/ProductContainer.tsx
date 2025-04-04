"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Box, CircularProgress, Pagination } from "@mui/material";
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
  const [role, setRole] = useState("seller");
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (window) {
      const userRole = window.localStorage.getItem("role") as string;
      setRole(userRole);
    }
  }, []);
  const { isPending, data, error } = useQuery({
    queryKey: ["Product-details", currentPage],
    queryFn: async () => {
      return await axiosInstance.post("/product/seller/list", {
        page: currentPage,
        limit: 5,
      });
    },
    enabled: role === "seller",
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

  return (
    <Box className="flex flex-col justify-center items-center mb-8">
      <Box className="flex gap-8 flex-wrap justify-center items-center p-8 m-8">
        {productList?.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
      <Pagination
        page={currentPage}
        count={totalPages}
        color="secondary"
        onChange={(_, value: number) => {
          setCurrentPage(value);
        }}
      />
    </Box>
  );
};

export default ProductContainer;
