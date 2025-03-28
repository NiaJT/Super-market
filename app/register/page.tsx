import UserForm from "@/components/UserForm";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Register",
  description: "This is a Register page",
};

const RegisterPage = () => {
  return <UserForm />;
};

export default RegisterPage;
