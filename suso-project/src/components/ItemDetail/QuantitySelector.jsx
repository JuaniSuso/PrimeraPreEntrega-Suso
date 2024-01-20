import Boton from "../../ejemplos/Boton"
import "./ItemDetail.css"


const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    const ManejarSuma = () => {
        cantidad < stock && setCantidad(cantidad + 1)
      }
    
      const ManejarResta = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
      }

    return (
        
        <div className="flex gap-4 items-center">
          <button
          onClick={ManejarResta}
        className= {cantidad === 1
                  ? ` rounded flex px-5 py-3 text-center my-4 bg-secondary text-white`
                  : ` rounded flex px-5 py-3 text-center my-4 btnCustom text-white `
                }
                disabled = {cantidad === 1}
             >
             -
            </button>

            <span className="text-white py-5 px-5">{cantidad}</span>
            <button
            onClick={ManejarSuma}
            className={cantidad === stock
              ? `rounded flex px-5 py-3 text-center my-4 bg-secondary text-white`
              : `rounded flex px-5 py-3 text-center my-4 btnCustom text-white `
             }
             disabled = {cantidad === stock}
            >
              +
              </button>
          
        
      </div>
    )
}

export default QuantitySelector