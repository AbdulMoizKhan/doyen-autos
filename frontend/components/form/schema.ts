import * as Yup from "yup";

export const validationSchema = Yup.object({
    VRMs: Yup.string().required("Registration No is required"),
});
