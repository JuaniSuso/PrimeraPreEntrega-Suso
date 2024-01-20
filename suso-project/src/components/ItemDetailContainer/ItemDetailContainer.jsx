import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'productos', itemId )

    getDoc ( docRef )
      .then((docSnapshot) => {
        const doc = {
          ...docSnapshot.data(),
          id: docSnapshot.id
        }

        setItem(doc)
      })
      .finally(() => setLoading(false))
    


  }, [itemId]);

  return (
    <>
      {
      loading ? (
        <h2 className="text-white my-5 text-center text-4x1 mt-8">
          Cargando...
        </h2>
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <p className="text-white my-5 text-center">Producto no encontrado</p>
      ) }
    </>
  );
};

export default ItemDetailContainer;
