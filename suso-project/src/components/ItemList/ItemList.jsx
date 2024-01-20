import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";





const ItemList = ({productos}) => {

 

  return (
    <section className="container">

      <h2 className="  text-white text-center my-5">Productos</h2>
      <hr className="text-white" />

        <div className=" row row-cols-1 g-5">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;