import {
  TextField as MuiTextField,
  Typography,
  TextFieldProps,
  SxProps,
} from "@mui/material";
import { JSXElementConstructor, ReactNode } from "react";

type ITextField = {
  label?: string;
  formik?: any;
  name: string;
  labelsx?: SxProps;
  typoVariant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
} & TextFieldProps;

const TextField = (props: ITextField): JSX.Element => {
  const {
    name,
    label,
    typoVariant = "subtitle2",
    formik,
    labelsx,
    ...rest
  } = props;
  return (
    <>
      {label && (
        <Typography variant={typoVariant} sx={labelsx} gutterBottom>
          {label}
        </Typography>
      )}
      {formik ? (
        <>
          <MuiTextField
            sx={{ ".MuiFormHelperText-root": { whiteSpace: "nowrap" } }}
            name={name}
            fullWidth
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            {...formik.getFieldProps(name)}
            {...rest}
          />
        </>
      ) : (
        <>
          <MuiTextField name={name} fullWidth {...rest} />
        </>
      )}
    </>
  );
};

export default TextField;
