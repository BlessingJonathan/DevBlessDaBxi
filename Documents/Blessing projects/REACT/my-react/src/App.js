import "./App.css";
import TandCs from './Pages/TandCs'
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Signup from './components/loginSignup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/loginSignup/404";
import Login from "./components/loginSignup/Login";
//import ShopCategory from "./Pages/ShopCategory";
//import ProtectedRoutes from "./components/utilse/ProtectedRoutes";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import AboutUs from "./Pages/AboutUs";
import AccountRecovery from "./Pages/AccountRecovery";
//import office_banner from './components/Assets/Office-Supplies.jpg'
//import school_banner from './components/Assets/School-Stationery.jpg'
import Products from "./Pages/Products";
import SchoolStationery from './Pages/SchoolStationery'
import Office from './Pages/Office'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
        <Route path="/terms-and-conditions" element={TandCs} />
        <Route path="/privacy-policy" element={PrivacyPolicy} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/account_Recovery" element={<AccountRecovery />} />
          <Route
            path="/products"
            element={
             
                <Products />
              
            }
          />

          <Route />
          <Route
            path="/login"
            element={
              
                <Login/>
              
            }
          />

          <Route />
          <Route
            path="/school"
            element={
             
             <SchoolStationery/> 
              
            }
          />

          <Route />
          <Route
            path="/office"
            element={
              <Office/>
            }
          />

          <Route />
          <Route
            path="/basket"
            element={
             
                <Basket />
            }
          />

          <Route />
          

          <Route />
          <Route
            path="/aboutUs"
            element={
             
                <AboutUs />
             
            }
          />

          <Route />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
