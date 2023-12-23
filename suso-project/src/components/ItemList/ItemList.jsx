import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="container m-auto mt-8">

      <h2 className="text-white text-center my-5">Productos</h2>
      <hr />

        <div className="row row-cols-2 g-5">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;