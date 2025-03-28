"use client";

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();

  return (
    <Box>
      Home Page
      <Button
        variant="contained"
        color="secondary"
        onClick={() => router.push("/login")}
      >
        Login
      </Button>
    </Box>
  );
};

export default HomePage;
