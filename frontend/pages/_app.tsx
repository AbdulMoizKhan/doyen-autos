import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme';
import '../styles/global.css'
import AOSInit from '../components/aos';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AOSInit/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;