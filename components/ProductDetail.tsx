import React from "react";
import { Box, Button, Typography, Chip, Divider } from "@mui/material";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";

import DeleteProductDialog from "./DeleteProductDialog";

const ProductDetail = () => {
  const product = {
    name: "Wireless Ergonomic Mouse",
    brand: "Ugreen",
    price: 20.99,
    quantity: 15,
    category: "Electronics",
    freeShipping: "Yes",
    description:
      "Wireless Ergonomic Mouse is a convenient and efficient computer peripheral that eliminates the need for tangled cables, providing a seamless and clutter-free experience. It connects to devices using **Bluetooth** or a **2.4GHz USB receiver**, ensuring reliable and fast communication. Modern wireless mice feature **ergonomic designs**, making them comfortable for prolonged use, reducing wrist strain and improving productivity. Many wireless mice come with **adjustable DPI (dots per inch) settings**, allowing users to customize sensitivity for precise control in different tasks, from everyday browsing to gaming and graphic design. Advanced models offer **silent clicking**, which is ideal for quiet work environments, and **rechargeable batteries**, eliminating the need for frequent battery replacements. The **plug-and-play functionality** of wireless mice makes them easy to use, with most devices automatically detecting and pairing without additional software. Some models even feature **multi-device pairing**, allowing users to switch between multiple computers seamlessly. Popular brands such as **Logitech, Razer, and Ugreen** produce high-quality wireless mice with features like programmable buttons, customizable RGB lighting, and ultra-fast response times. Whether for work, gaming, or everyday use, a **wireless mouse enhances convenience, mobility, and productivity**, making it a must-have accessory for any computer user.",
  };

  return (
    <Box className="flex flex-col md:flex-row gap-8 w-full max-w-6xl p-6 bg-white rounded-xl shadow-lg m-8">
      <Box className="md:w-1/2 relative h-96 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <Image
          src="/mouseImage.jpg"
          alt={product.name}
          fill
          className="object-contain object-center hover:scale-105 transition-transform duration-300"
          priority
        />
      </Box>

      <Box className="md:w-1/2 space-y-6">
        <Typography variant="h4" className="text-3xl font-bold text-gray-800">
          {product.name}
        </Typography>

        <Box className="flex gap-2 flex-wrap">
          <Chip
            label={`Brand: ${product.brand}`}
            className="bg-blue-100 text-blue-800"
          />
          <Chip
            label={`Category: ${product.category}`}
            className="bg-green-100 text-green-800"
          />
        </Box>

        <Divider className="my-4" />

        <Box className="space-y-4">
          <Typography variant="h5" className="text-2xl text-red-600 font-bold">
            ${product.price}
          </Typography>

          <Box className="flex items-center gap-2 flex-wrap">
            <Typography className="text-base">
              Availability:
              <span
                className={`ml-2 font-medium ${
                  product.quantity > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.quantity > 0
                  ? `${product.quantity} in stock`
                  : "Out of stock"}
              </span>
            </Typography>
            {product.freeShipping === "Yes" && (
              <Chip
                label="Free Shipping"
                className="bg-orange-100 text-orange-800 ml-2"
                size="small"
              />
            )}
          </Box>
        </Box>

        <Divider className="my-4" />

        <Box className="mb-6">
          <Typography
            variant="h6"
            className="text-lg font-semibold text-gray-700 mb-3"
          >
            Product Description
          </Typography>
          <Box
            className="text-gray-600 leading-relaxed text-base text-justify break-words 
              max-h-[200px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 
              scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
          >
            {product.description}
          </Box>
        </Box>

        <Box className="flex gap-4 mt-8 justify-center md:justify-start">
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<EditIcon />}
            className="md:w-auto px-8 py-2"
          >
            Edit
          </Button>
          <DeleteProductDialog />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
