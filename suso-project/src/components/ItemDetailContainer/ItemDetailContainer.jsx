import { useState, useEffect } from "react";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((data) => {
        const selectedItem = data.find((prod) => prod.id === Number(itemId));
        setItem(selectedItem);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <>
      {loading ? (
        <h2 className="text-white my-5 text-center text-4x1 mt-8">
          Cargando...
        </h2>
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <p className="text-white my-5 text-center">Producto no encontrado</p>
      )}
    </>
  );
};

export default ItemDetailContainer;
