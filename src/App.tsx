import { blue, grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRoutes } from '@routes';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: grey[200],
    },
  },
});

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
