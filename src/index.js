import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './store/index';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    variants: {
      success: {
        color: "green",
      },
      
    },
   
  },
  textField: {
    "& .MuiInputLabel-root": {
      marginTop: 0,
    },
    "& .Mui-focused": {
      borderRadius: 0,
      color: "black",
      border: "none",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderRadius: 0,
    },
  }
});

const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

headingVariants.forEach((variant) => {
  theme.typography[variant] = {
    fontFamily: 'Cooper Std, sans-serif', // Font family for the heading variant
  };
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
