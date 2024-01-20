import { useContext, useState } from "react";
import Boton from "../../ejemplos/Boton";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart, isInCart } = useContext(CartContext);

  const ManejarAgregar = () => {
    const ItemToCart = {
      ...item,
      cantidad,
    };

    addToCart(ItemToCart);
  };
  return (
    <div className="my-5 mx-5 px-4 py-4">
      <h3 className="text-white text-2xl font-semibold">{item.name}</h3>
      <hr className="separador" />
      <div className="">
        <img className="item-image" src={item.img} alt={item.name} />

        <hr className="separador" />

        <div>
          <p className="text-white">{item.description}</p>
          <p className="text-white text-xl font-bold">Precio: ${item.price}</p>

          <hr className="separador" />

          {
            isInCart ( item.id)
              ? <Link className="botonCarrito" to="/cart">Ir al carrito</Link>
              : <>
              <QuantitySelector
                cantidad={cantidad}
                stock={item.stock}
                setCantidad={setCantidad}
              />
  
              <Boton onClick={ManejarAgregar}>Agregar al carrito</Boton>
            </>
          }


          

          


          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
