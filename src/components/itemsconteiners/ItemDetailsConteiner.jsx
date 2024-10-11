import "./conteiners.css";
import { useEffect, useState } from "react";
import DetailsCard from "../cards/DetailsCard";
import { useParams } from "react-router-dom";
import Cargando from "../cargando/Cargando";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/configFirebase";

const ItemDetailsConteiner = (greeting) => {
    
    const [productDetails, setProductDetails] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    const { idItem } = useParams();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const productoDoc = await getDoc(doc(db, "productos", idItem));
                setProductDetails({ id: productoDoc.id, ...productoDoc.data() });
            } catch (error) {
                console.log("Error al obtener los detalles del producto:", error);
            } finally {
                setCargando(false);
            }
        };
        obtenerProducto();
    }, [idItem]);

    return (
        <>
        <h2 className="main_h2">{greeting.title}</h2>
        <section className="contenedor_detalles">
        {cargando ? <Cargando /> 
        :
        <DetailsCard key={productDetails.id} {...productDetails} />
        }
        </section>
        </>
    );
};

export default ItemDetailsConteiner;
