import * as Yup from "yup";

export const validationSchema = Yup.object({
  postCode: Yup.string().required("Post Code is required"),
  firstname: Yup.string().min(2).max(25).required("First Name is required"),
  lastName: Yup.string().min(2).max(25).required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNo: Yup.string()
    .matches(/^\+44 \d{2} \d{4} \d{4}$/, "Required Format: +44 20 7123 4567")
    .required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  services: Yup.array().required("services is required"),
  date: Yup.string().required("date is required"),
  message: Yup.string().required("Message is required"),
});
