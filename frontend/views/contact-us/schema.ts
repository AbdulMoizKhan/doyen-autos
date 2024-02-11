import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstname: Yup.string().min(2).max(25).required("First Name is required"),
  lastName: Yup.string().min(2).max(25).required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNo: Yup.string()
    .matches(/^\+\d{12}$/, "UK Number format required")
    .required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});
