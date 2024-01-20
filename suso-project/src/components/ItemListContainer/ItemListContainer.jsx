import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId} = useParams()
 



  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, 'productos' )
    const docsRef = categoryId 
                      ? query(productosRef, where('category', '==', categoryId))
                      : productosRef

    getDocs( docsRef )
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })

        console.log(docs)
        setProductos( docs )
      })
      .finally(() => setLoading(false))




  }, [categoryId])

  return (
    <> 
      {loading ? (
        <h2 className="text-white my-5 text-center text-4x1 mt-8">Cargando...</h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};

export default ItemListContainer
