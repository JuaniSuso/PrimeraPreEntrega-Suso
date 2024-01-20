// ItemCard.js
import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <article className="w-80">
      <div className="text-container">
        <img className="item-image" src={item.img} alt={item.name} />
        <h3 className="text-white">{item.name}</h3>
        <p className="text-white">{item.description}</p>
        <hr className="text-white" />
        <p className="text-white">Precio: ${item.price}</p>

        <Boton>
          <Link className="botonVer" to={`/item/${item.id}`}>
            Ver más
          </Link>
        </Boton>
      </div>
    </article>
  );
};

export default ItemCard;



