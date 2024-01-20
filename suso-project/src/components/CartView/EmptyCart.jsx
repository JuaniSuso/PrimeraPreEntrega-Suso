import { Link } from "react-router-dom"
import Boton from "../../ejemplos/Boton"



const EmptyCart = () => {
    return (
        <section className="m-auto py-5 px-5">
        <h2 className="text-white">Tu carrito esta vacío</h2>
          <hr />
          <p className="text-white">Los productos que quiras comprar apareceran aquí</p>
          <Boton>
            <Link className="text-white " to={"/"}>Atras</Link>
          </Boton>
          </section>
    )
}

export default EmptyCart