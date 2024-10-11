import { createContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext({
    carrito: [],
    precioTotal: 0,
    cantidadTotal: 0,
    agregarAlCarrito: () => {},
    eliminarDelCarrito: () => {},
    vaciarCarrito: () => {},
});

// Componente Proveedor de Metodos del Carrito
export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    console.log(carrito)

    const agregarAlCarrito = (mueble, cantidad, img) => {
        if (cantidad <= 0) {
            return;
        }

        const muebleEnCarrito = carrito.find(item => item.mueble.id === mueble.id);

        if (muebleEnCarrito) {
            const carritoActualizado = carrito.map(item => 
                item.mueble.id === mueble.id ? 
                { ...item, cantidad: item.cantidad + cantidad } 
                : 
                item
            );
            setCarrito(carritoActualizado);
        } else {
            setCarrito(prevCarrito => [...prevCarrito, { mueble, cantidad, img }]);
        }

        setPrecioTotal(prevTotal => prevTotal + (mueble.precio * cantidad));
        setCantidadTotal(prevCantidad => prevCantidad + cantidad);
    };

    const eliminarDelCarrito = (id) => {
        const muebleAEliminar = carrito.find(item => item.mueble.id === id);

        if (muebleAEliminar) {
            const carritoActualizado = carrito.filter(item => item.mueble.id !== id);
            setCarrito(carritoActualizado);

            setPrecioTotal(prevTotal => prevTotal - (muebleAEliminar.mueble.precio * muebleAEliminar.cantidad));
            setCantidadTotal(prevCantidad => prevCantidad - muebleAEliminar.cantidad);
        }
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setCantidadTotal(0);
    };

    return (
        <CartContext.Provider value={{ carrito, precioTotal, cantidadTotal, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
};