import React from 'react';


//import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
       <NavBar/>
      <ItemListContainer greeting='Bienvenido'/>
    </>
  )
}

export default App
