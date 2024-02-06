import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../theme";
import "../styles/global.css";
import AOSInit from "../components/aos";
import { Alert } from "@mui/material";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const AlertTemplate = ({ style, options, message, close }: any) => (
  <div style={style}>
    <Alert severity={options?.type} onClose={close}>
      {message}
    </Alert>
  </div>
);

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <ThemeProvider theme={theme}>
        <AOSInit />
        <Component {...pageProps} />
      </ThemeProvider>
    </AlertProvider>
  );
}

export default MyApp;
