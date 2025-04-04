"use client"
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const AddProductButton: React.FC = () => {
  const router = useRouter();
  return (
    <Box className="mt-8">
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          router.push("/add-product");
        }}
      >
        Add Product
      </Button>
    </Box>
  );
};

export default AddProductButton;
