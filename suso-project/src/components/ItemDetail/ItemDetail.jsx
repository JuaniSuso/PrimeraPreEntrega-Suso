import Boton from "../../ejemplos/Boton";



const ItemDetail = ({ item }) => {
  return (
    <div>
      <h3 className="text-white text-2xl font-semibold">{item.name}</h3>
      <hr />
      <div className="">

      <img className="item-image" src={item.img} alt={item.name} />

      <div>

      <p className="text-white">{item.description}</p>
      <p className="text-white text-xl font-bold">Precio: ${item.price}</p>

      </div>

     

      </div>
      
      <Boton className={` rounded flex px-4 py-2 text-center my-4 bg-secondary text-white `}>Comprar</Boton>
    </div>
  );
};

export default ItemDetail;
