import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Allproducts } from "./components/all products/Allproducts";
import { Cartdata } from "./components/add_to_cart/Cartdata";
import { Dash } from "./components/dashbord/Dash";
import { Cartitem } from "./components/cart_item/Cartitem";
import { Profile } from "./components/profile/Profile";
import { Signup } from "./components/register/Signup";
import { Nav } from "./components/nav/Nav";
import { Login } from "./components/register/Login";
import { Placeorder } from "./components/order_place/Placeorder";
import './App.css'
import { Buyproduct } from "./components/buy_product/Buyproduct";



function App() {
  return (
    <div>
<Nav/>

<div className="main_app">

  <div className="dishcom">
 <Dash/>
</div>

    <div className="othcom">
   <Routes>
   <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/products" element={<Allproducts/>}></Route>
    <Route path="/Productdetails" element={<Cartitem/>}></Route>
    <Route path="/carts" element ={<Cartdata/>}></Route>
    <Route path="/cartitem/:id" element ={<Cartitem/>}></Route>
    <Route path="/login" element ={<Login/>}></Route>
    <Route path='/buyproduct'element={<Buyproduct/>}></Route>
    <Route path='/placeorder'element={<Placeorder/>}></Route>
    <Route path="/gotosignup"element={<Signup/>}></Route>
    <Route path="/usrprofile"element={<Profile/>}></Route>
   </Routes>
    </div>

    </div>

    </div>
  );
}

export default App;
