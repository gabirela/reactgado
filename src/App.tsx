import { BrowserRouter } from "react-router-dom";
import Routes from "react";
//import { AuthProvider } from "hooks/auth";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
        <Routes />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;