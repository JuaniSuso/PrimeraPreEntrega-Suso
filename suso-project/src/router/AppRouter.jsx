import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import NavBar from "../components/NavBar/NavBar"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import CartView from "../components/CartView/CartView"
import Checkout from "../components/Checkout/Checkout"
import LoginScreen from "../components/LoginScreen/LoginScreen"

import { CartContext } from "../context/CartContext"




const AppRouter = () => {
    const {user} = useContext(UserContext)
    return (
        <BrowserRouter>
          <NavBar />

          {user.logged ? (
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/store/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="*" element={<Navigate to={"/"}/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/cart" element={<CartView />}></Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginScreen />}></Route>
              <Route path="*" element={<Navigate to={"/login"}/>}/>

            </Routes>
          )}
        </BrowserRouter>
    )
}

export default AppRouter