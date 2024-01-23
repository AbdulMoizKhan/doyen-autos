import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface DefaultButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadcolor?: string;
  children: React.ReactNode;
}

export default function DefaultButton({
  children,
  isLoading,
  loadcolor,
  ...rest
}: DefaultButtonProps) {
  return (
    <>
      <Button
        startIcon={
          isLoading ? (
            <CircularProgress
              size={20}
              sx={{ color: loadcolor ? `${loadcolor}` : "white" }}
            />
          ) : (
            <></>
          )
        }
        {...rest}
      >
        {children}
      </Button>
    </>
  );
}