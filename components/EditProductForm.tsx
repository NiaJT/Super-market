"use client";
import { productCategoriesForDropDown } from "@/constants/general.constant";
import { productSchema } from "@/validationSchema/addProduct.Schema";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { IAddProductForm } from "./AddProductForm";

const EditProductForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        brand: "",
        price: 0,
        quantity: 1,
        category: "",
        freeShipping: "false",
        description: "",
      }}
      validationSchema={productSchema}
      onSubmit={(values: IAddProductForm) => {
        console.log({
          ...values,
          freeShipping: values.freeShipping === "true",
        });
      }}
    >
      {(formik) => {
        return (
          <form
            className="flex flex-col gap-2 items-center justify-center p-4 min-w-[350px] shadow-lg rounded-xl bg-white"
            onSubmit={formik.handleSubmit}
          >
            <Typography variant="h5">Edit Product</Typography>
            <FormControl fullWidth>
              <TextField
                label="Name"
                {...formik.getFieldProps("name")}
              ></TextField>
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText error>{formik.errors.name}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Brand"
                {...formik.getFieldProps("brand")}
              ></TextField>
              {formik.touched.brand && formik.errors.brand ? (
                <FormHelperText error>{formik.errors.brand}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Price"
                type="number"
                slotProps={{ htmlInput: { min: 0 } }}
                {...formik.getFieldProps("price")}
              ></TextField>
              {formik.touched.price && formik.errors.price ? (
                <FormHelperText error>{formik.errors.price}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Quantity"
                type="number"
                slotProps={{ htmlInput: { min: 0 } }}
                {...formik.getFieldProps("quantity")}
              ></TextField>
              {formik.touched.quantity && formik.errors.quantity ? (
                <FormHelperText error>{formik.errors.quantity}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select {...formik.getFieldProps("category")} label="Category">
                {productCategoriesForDropDown.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
              {formik.touched.category && formik.errors.category ? (
                <FormHelperText error>{formik.errors.category}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <FormLabel sx={{ marginRight: 2 }}>Free Shipping</FormLabel>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }} // Space between radio buttons
                {...formik.getFieldProps("freeShipping")}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio color="secondary" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio color="secondary" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                multiline
                minRows={3}
                maxRows={8}
                label="Description"
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description ? (
                <FormHelperText error>
                  {formik.errors.description}
                </FormHelperText>
              ) : null}
            </FormControl>

            <Button fullWidth type="submit" color="success" variant="contained">
              SUBMIT
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};
export default EditProductForm;
