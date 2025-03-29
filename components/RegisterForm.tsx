"use client";
import { RegisterFormSchema } from "@/validationSchema/user.registerSchema";
import {
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
interface IRegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  role: string;
  address: string;
}

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        role: "",
        address: "",
      }}
      validationSchema={RegisterFormSchema}
      onSubmit={(values: IRegisterForm) => {
        console.log("Form submitted with values:", values);
      }}
    >
      {(formik) => (
        <form
          className="flex flex-col gap-2 items-center justify-center p-4 min-w-[350px] shadow-lg rounded-xl bg-white"
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h5">Register Form</Typography>

          <FormControl fullWidth>
            <TextField
              label="First Name"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <FormHelperText error>{formik.errors.firstName}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Last Name"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <FormHelperText error>{formik.errors.lastName}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextField label="Email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <FormHelperText error>{formik.errors.email}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Password"
              type="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <FormHelperText error>{formik.errors.password}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="gender"
              name="gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {formik.touched.gender && formik.errors.gender ? (
              <FormHelperText error>{formik.errors.gender}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Date of Birth"
              type="date"
              slotProps={{ inputLabel: { shrink: true } }}
              {...formik.getFieldProps("dob")}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <FormHelperText error>{formik.errors.dob}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              label="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="seller">Seller</MenuItem>
              <MenuItem value="buyer">Buyer</MenuItem>
            </Select>
            {formik.touched.role && formik.errors.role ? (
              <FormHelperText error>{formik.errors.role}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextField label="Address" {...formik.getFieldProps("address")} />
            {formik.touched.address && formik.errors.address ? (
              <FormHelperText error>{formik.errors.address}</FormHelperText>
            ) : null}
          </FormControl>

          <Button fullWidth type="submit" color="success" variant="contained">
            SUBMIT
          </Button>
          <Link
            href="/login"
            className="text-emerald-700 hover:text-emerald-950"
          >
            Already a user? Login
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;