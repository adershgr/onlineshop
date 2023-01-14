import React from "react";
import Header from './containers/Header'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import ProductComponent from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        {/* now creating routes*/}
        <Route path='/'  element={ <ProductListing />} />
        <Route path='/product/:productId'  element={<ProductDetail />} /> 
        {/* route for 404 */}
        <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
