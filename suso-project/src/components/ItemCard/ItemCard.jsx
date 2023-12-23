import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";
import "./ItemCard.css"

const ItemCard = ({item}) => {

  return (
    <article className="w-80">
      <img className="item-image" src={item.img} alt={item.name} />
      <h3 className="text-white text-2xl font-semibold">{item.name}</h3>
      <hr />
      <p className="text-white">{item.description}</p>
      <p className="text-white text-xl font-bold">Precio: ${item.price}</p>

      <Boton>

        <Link className="botonVer" to={`/item/${item.id}`}>Ver más</Link>

      </Boton>
    </article>
  );
};

export default ItemCard;