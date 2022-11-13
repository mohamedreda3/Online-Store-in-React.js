import "./assets/styles/App.css";
import "./assets/styles/responsive.css";
import Home from "./routes/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from './routes/productdetails';
import { Provider } from "react-redux";
import { store } from "./store/store";
import Cart from "./routes/cart";
import CheckOut from "./routes/checkout";
import StorePage from "./routes/storePage";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/productdetails/:id/*" element={<Productdetails />} />
            <Route path="/Cart/*" element={<Cart />} />
            <Route path="/checkout/*" element={<CheckOut />} />
            <Route path="/store/*" element={<StorePage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
