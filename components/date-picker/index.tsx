import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MUIDatepicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { CalendarSVG } from "../../assests/calendar";
import HelperText from "../helper-text";

type IProps = {
  label?: string;
  required?: boolean;
  onChangeValue: (value: string) => void;
  error?: string;
  value?: any;
  monthPicker?: boolean;
  minDate?: any;
  disablePast?: boolean;
  disableFuture?: boolean;
};

export default function DatePicker({
  label,
  required,
  onChangeValue,
  error,
  value,
  monthPicker,
  disablePast,
  disableFuture,
  minDate,
}: IProps) {
  return (
    <Box className="date-picker" sx={{ height: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <>
          {label && (
            <Typography
              sx={{ mb: 1, display: "flex", alignItems: "center", gap: 0.5 }}
              variant="subtitle2"
            >
              {label} {required && <Typography color={"error"}>*</Typography>}
            </Typography>
          )}
          <MUIDatepicker
            defaultValue={dayjs(value)}
            disablePast={disablePast}
            disableFuture={disableFuture}
            onChange={(newValue) => {
              const date = dayjs(newValue).format("MM/DD/YYYY");
              onChangeValue(date);
            }}
            sx={{ width: "100%" }}
            format={monthPicker ? "MMM YYYY" : "DD/MM/YYYY"}
            slots={{
              openPickerIcon: CalendarSVG,
            }}
            value={dayjs(value)}
            slotProps={{
              textField: {
                helperText: error && <HelperText text={error} />,
              },
            }}
            views={monthPicker ? ["month", "year"] : undefined}
            minDate={minDate ? dayjs(minDate) : undefined}
          />
        </>
      </LocalizationProvider>
    </Box>
  );
}
