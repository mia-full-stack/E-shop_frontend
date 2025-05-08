import { Routes, Route } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import CartPage from "./CartPage/CartPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ContactsPage from "./ContactsPage/ContactsPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default Navigation;
