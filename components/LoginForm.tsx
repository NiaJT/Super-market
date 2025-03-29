"use client";
import { userLoginSchema } from "@/validationSchema/user.loginSchema";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={userLoginSchema}
      onSubmit={(values: ILoginForm) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            className="flex flex-col gap-6 items-center justify-center p-6 w-[300px] shadow-lg rounded-xl bg-white"
            onSubmit={formik.handleSubmit}
          >
            <Typography variant="h5">Login</Typography>
            <FormControl fullWidth>
              <TextField
                label="Email"
                {...formik.getFieldProps("email")}
              ></TextField>
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Password"
                type="password"
                {...formik.getFieldProps("password")}
              ></TextField>
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <Button fullWidth type="submit" color="success" variant="contained">
              SUBMIT
            </Button>
            <Link
              href="/register"
              className="text-emerald-700 hover:text-emerald-950"
            >
              New here? Create an account
            </Link>
          </form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
