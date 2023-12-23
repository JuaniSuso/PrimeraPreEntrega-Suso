import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./components/HomePage/ErrorPage";
import Boton from "./ejemplos/Boton";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    
      <BrowserRouter>
      <NavBar />

      <Routes>
      
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/store/:categoryId" element={<ItemListContainer/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/item/:itemId" element={ <ItemDetailContainer/> } />
      
      </Routes>

      

      </BrowserRouter>
      
    
  );
}

export default App;
