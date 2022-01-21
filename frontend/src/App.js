import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
};

export default App;
