import { Stack, Typography } from "@mui/material";
import { PiWarningCircle } from "react-icons/pi";

const HelperText = ({ text }: { text: string }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={0.5}
      sx={{ mx: -1.5, mt: 0.8 }}
    >
      <PiWarningCircle style={{ fontSize: "14px", marginBottom: "2px" }} />
      <Typography variant="subtitle2" fontWeight={400} fontSize={"12px"}>
        {text}
      </Typography>
    </Stack>
  );
};

export default HelperText;
