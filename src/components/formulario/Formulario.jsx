import { useState, useEffect, useContext } from "react";
import "./formulario.css";
import iconCheck from "../../../public/iconcheck.png";
import iconError from "../../../public/iconerror.png";
import { db } from "../../services/configFirebase";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../usecontext/CartContext";

const Formulario = () => {
    const {carrito, vaciarCarrito, precioTotal} = useContext(CartContext);

    const [montarFormulario, setMontarFormulario] = useState(true);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailValido, setEmailValido] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const [focus, setFocus] = useState(false);
    const [isValid, setIsValid] = useState(null);

    const manejadorFormulario = async (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailValido) {
            setError("Debes rellenar todos los campos");
            return;
        }

        if (email !== emailValido) {
            setError("Los correos electrónicos no coinciden");
            return;
        }

        if (carrito.length === 0) {
            setError("El carrito está vacío");
            return;
        }

        if (!precioTotal || isNaN(precioTotal)) {
            setError("Error con el precio total");
        return;
        }

        const orden = {
            items: carrito.map((producto) => ({
            id: producto.mueble.id || "ID no disponible",
            nombre: producto.mueble.nombre || "Nombre no disponible",
            cantidad: producto.cantidad || 0,
        })),
            precioTotal: precioTotal,
            fecha: new Date(),
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            telefono: telefono.trim(),
            email: email.trim(),
        };

        try {
            const docRef = await addDoc(collection(db, "ordenes"), orden);
            setOrdenId(docRef.id);
            vaciarCarrito();
            setNombre("");
            setApellido("");
            setTelefono("");
            setEmail("");
            setEmailValido("");
            setError("");
        } catch (error) {
        console.error("Error al crear la orden", error);
        setError("Hubo un error al crear la orden");
        }

        setMontarFormulario(false);
    };

    useEffect(() => {
        const validarEmail = () => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === "") {
            setIsValid(null);
        } else {
            setIsValid(pattern.test(email));
        }
        };
    validarEmail();
    }, [email]);

    return (
    <>
    {montarFormulario ? (
        <form onSubmit={manejadorFormulario}>
            <h3>Tu información para realizar la Orden</h3>
            <p><strong>{error} {ordenId}</strong></p>

            <div className="input_cajita">
                <label htmlFor="input_nombre">
                    <input type="text" name="nombreusuario"
                        id="input_nombre" required
                        placeholder="Nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre} />
                </label>
            </div>

            <div className="input_cajita">
                <label htmlFor="input_apellido">
                    <input type="text" name="apellidousuario"
                        id="input_apellido" required
                        placeholder="Apellido"
                        onChange={(e) => setApellido(e.target.value)}
                        value={apellido} />
                </label>
            </div>

            <div className="input_cajita">
                <label htmlFor="input_telefono">
                    <input type="text" name="telefonousuario"
                        id="input_telefono" required
                        placeholder="N° de Contacto"
                        onChange={(e) => setTelefono(e.target.value)}
                        value={telefono} />
                </label>
            </div>

            <div className="input_cajita">
                <div className={`input_email ${focus ? "focus" : ""}`}>
                    <label htmlFor="input_email">
                        <input type="email" name="email" id="input_email"
                            required placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocus(true)} 
                            onBlur={() => setFocus(false)}  />
                    </label>
                    <div className="icons">
                        <img className={`icon_check ${isValid === true ? "show" : ""}`}
                            src={iconCheck} />
                        <img className={`icon_error ${isValid === false ? "show" : ""}`}
                            src={iconError} />
                    </div>
                </div>
            </div>

            <div className="input_cajita">
                <div className={`input_emailvalidar ${focus ? "focus" : ""}`}>
                    <label htmlFor="input_emailvalidar">
                        <input type="email" name="emailvalidar" id="input_emailvalidar"
                            required placeholder="Confirma tu Email"
                            value={emailValido}
                            onChange={(e) => setEmailValido(e.target.value)}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)} />
                    </label>
                    <div className="icons">
                        <img className={`icon_check ${ isValid === true && email === emailValido ? "show" : ""}`}
                            src={iconCheck} />
                        <img className={`icon_error ${isValid === false || email !== emailValido ? "show" : ""}`}
                            src={iconError} />
                    </div>
                </div>
            </div>

            <button className={"footer_button"} type="submit">Enviar</button>
        </form>
        ) 
        : 
        (
            <div>
                <h2>Tu orden a sido emitida {ordenId}</h2>
                <p>Gracias por comprar en Muebles Marolio</p>
            </div>
        )}
    </>
);
};

export default Formulario;
