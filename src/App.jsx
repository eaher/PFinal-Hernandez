import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer, NavBar,  Card, LayOut, ItemList, ItemDetail, ItemDetailContainer, Cart } from "./components";
import { CartContextProvider } from "./CartContext/CartContext";

export const App = () => {
  return (
    
    <BrowserRouter>
    <CartContextProvider>
    <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer  greeting={"Bienvenidos a  Mr Unicorn  Nautica Outdoor"}/>}/>
          <Route path="/category/:category" element={<ItemListContainer  greeting={"Bienvenidos a  Mr Unicorn  Nautica Outdoor"}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:category/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          
      </Routes>
    </CartContextProvider>
    </BrowserRouter>

    
  );
};
