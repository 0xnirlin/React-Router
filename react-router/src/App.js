import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, navigate } from 'react-router-dom';

import { Home } from './Home'
import { Not } from './Not'
import { Products } from './Products';
import { ProductDetails } from './ProductDetails';
import { ProductIndex } from './ProductIndex';



function App() {
  return (

    //Creating the shoe website 


    <div className="App">

      <nav>
        {/* <h1>Shoe Store</h1> */}
        <Link to={"/"}>Home</Link>
        <Link to={"products"}>Products</Link>
     
       
      </nav>
      {/* <h1>Shoe Store</h1> */}
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "products" element = {<Products />}>
          {/* nested Route fpr the products  */}
          {/* <Route path = "/" element = {<Products></Products>}></Route> */}
          <Route path = "" element = {<ProductIndex></ProductIndex>}></Route>
          <Route path = ":productId" element = {<ProductDetails></ProductDetails>}></Route>
        </Route>
        <Route path = "*" element = {<Not></Not>}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
