import { useContext, useState } from "react"
import "./LoginScreen.css"
import { UserContext } from "../../context/UserContext"


const LoginScreen = () => {

    const {login, register} = useContext(UserContext)

    const [values, setValues] = useState({
        email: "",
        password: ""
    })


    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        
        login(values)
    }


    return(
        <div className="LoginContainer">
            <div className="LoginForm">
                <h2 className="LoginH2">Inicio de sesión</h2>
                <hr className="text-white" />


                <form onSubmit={handleSubmit}>

                <input
                className="inputForm" 
                type="email" 
                placeholder="Correo electrónico" 
                value={values.email}
                onChange={handleInputChange}
                name="email"
                />
                 <input 
                className="inputForm" 
                type="password" 
                placeholder="Contraseña" 
                value={values.password}
                onChange={handleInputChange}
                name="password"

                />

                <button type="submit" className="sendButtonLogin">Ingresar</button>
                </form>
                <button onClick={() => register(values)} className="sendButtonLogin">Registrar</button>

            </div>

        </div>
    )

}

export default LoginScreen