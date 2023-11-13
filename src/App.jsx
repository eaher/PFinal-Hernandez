import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer, NavBar,  Card, LayOut, ItemList, ItemDetail, ItemDetailContainer } from "./components";

export const App = () => {
  return (
  
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer  greeting={"Bienvenidos a  Mr Unicorn  Nautica Outdoor"}/>}/>
          <Route path="/category/:category" element={<ItemListContainer  greeting={"Bienvenidos a  Mr Unicorn  Nautica Outdoor"}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:category/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    
    </BrowserRouter>

    
  );
};
