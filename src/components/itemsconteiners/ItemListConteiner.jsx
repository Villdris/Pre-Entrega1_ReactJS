import './conteiners.css';
import { useEffect, useState } from 'react';
import { SimpleCard } from '../cards/SimpleCard';
import { useParams } from 'react-router-dom';
import Cargando from '../cargando/Cargando';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/configFirebase';

const ItemListConteiner = ( greeting ) => {
  const [muebles, setMuebles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      setCargando(true)
      try {
        const mueblesCollection = collection(db, 'productos');
        const q = idCategoria ? 
          query(mueblesCollection, where("categoria", "==", idCategoria)) 
          : 
          mueblesCollection;

        const productos = (await getDocs(q)).docs.map(doc => ({
          id: doc.id, ...doc.data(),
        }));
        setMuebles(productos);
        
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, [idCategoria]);

  return (
    <>
      <h2 className='main_h2'>{greeting.title}</h2>
      <section className='main_conteiner'>
        {cargando ?
          <Cargando />
          :
          muebles.map(mueble => <SimpleCard key={mueble.id} {...mueble} />)
        }
      </section>
    </>
  );
};

export default ItemListConteiner;