import { useContext, useState } from "react"
import "./Checkout.css"
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, writeBatch, addDoc, doc, updateDoc, getDoc, query, where, documentId, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {

    const {cart, totalCart, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: ""
    });

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };




    const handleSubmit = async (e) =>{
        e.preventDefault()

        const orden ={
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date()
        };

        

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productsRef = collection(db, "productos")
        const itemsQuery = query(productsRef, where( documentId(), "in", cart.map(prod => prod.id)  ))


       



        const querySnapshot = await getDocs(itemsQuery)

        const outOfStock = []

        querySnapshot.docs.forEach(doc => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock


            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })

            } else{
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
              .then(() => {
                addDoc(ordersRef, orden).then((doc) => {
                    setOrderId(doc.id)
                    clearCart()

                    Swal.fire("Gracias por confiar en nosotros")
                });
              })
        } else{
            Swal.fire({
                icon: "error",
                title: "Upsi...",
                text: "Hay items sin stock",
                footer: "Lo solucionaremos cuanto antes"
            })
        }



        

     


        
    };

    if(orderId) {

        return (
            <div className="payForm">
            <h2 className="text-white">Gracias por tu compra!</h2>
            <hr className="text-white" />
            <p className="text-white">El código de tu orden es: {orderId}</p>

        </div>
        );
       
    }

    


    return (
        
        
        <div className="payForm">
            <h2 className="text-white">Proceder con el pago</h2>
            <hr className="text-white" />

            <h4 className="text-white">Ingresa tus datos</h4>
            
            <form onSubmit={handleSubmit} className="formulario"
            
            
            >
                <input 
                type="text" 
                placeholder="Nombre" 
                value={values.nombre}
                onChange={handleInputChange}
                name="nombre"

                />
                <input 
                type="email" 
                placeholder="Correo electrónico"
                value={values.email}
                onChange={handleInputChange}
                name="email"
                
                />
                <input 
                type="text" 
                placeholder="Dirección"
                value={values.direccion}
                onChange={handleInputChange}
                name="direccion"

                />
                <button className="sendButton" type="submit">Enviar</button>
                


            </form>

        </div>
        
    )
}

export default Checkout