import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    variants: {
      success: {
        color: "green",
      },
      
      
      
    },
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    palette: {
      text: {
        primary: '#000', // Change this color to your desired font color
      },
    },
  
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
      },
    },
  },

});

const headingVariants = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

headingVariants.forEach((variant) => {
  theme.typography[variant] = {
    fontFamily: 'Montserrat', // Font family for the heading variant
  };
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
