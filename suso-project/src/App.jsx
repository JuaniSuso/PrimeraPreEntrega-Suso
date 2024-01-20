import "bootstrap/dist/css/bootstrap.min.css";

import { CartProvider } from "./context/CartContext";

import { UserProvider } from "./context/UserContext";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
