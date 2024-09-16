const productosMuebles = [
    {
        id: 1,
        nombre: "Mesa de Cocina",
        categoria: "Cocina",
        material: "Madera",
        dimensiones: "120x80 cm",
        precio: 15000,
        stock: 5,
        descripcion: "Una mesa resistente de madera ideal para cocinas pequeñas o medianas, con espacio para 4 personas.",
        img:'../../public/muebles/iduno.png'
    },
    {
        id: 2,
        nombre: "Alacena",
        categoria: "Cocina",
        material: "Melamina",
        dimensiones: "180x60 cm",
        precio: 25000,
        stock: 3,
        descripcion: "Amplia alacena con múltiples estantes para organizar todos los utensilios de cocina y alimentos.",
        img:'../../public/muebles/iddos.png'
    },
    {
        id: 3,
        nombre: "Silla de Cocina",
        categoria: "Cocina",
        material: "Metal y cuero sintético",
        dimensiones: "40x40x90 cm",
        precio: 5000,
        stock: 10,
        descripcion: "Silla de diseño moderno, cómoda y durable, perfecta para combinar con cualquier mesa de cocina.",
        img:'../../public/muebles/idtres.png'
    },
    {
        id: 4,
        nombre: "Cama Doble",
        categoria: "Habitación",
        material: "Madera",
        dimensiones: "200x160 cm",
        precio: 40000,
        stock: 2,
        descripcion: "Cama doble de estilo minimalista, ideal para habitaciones amplias. Ofrece comodidad y diseño elegante.",
        img:'../../public/muebles/idcuatro.png'
    },
    {
        id: 5,
        nombre: "Mesa de Noche",
        categoria: "Habitación",
        material: "Madera",
        dimensiones: "50x40x60 cm",
        precio: 7000,
        stock: 4,
        descripcion: "Mesa de noche compacta con cajón y estante inferior, perfecta para organizar pequeños objetos.",
        img:'../../public/muebles/idcinco.png'
    },
    {
        id: 6,
        nombre: "Armario",
        categoria: "Habitación",
        material: "MDF",
        dimensiones: "200x150 cm",
        precio: 35000,
        stock: 1,
        descripcion: "Armario espacioso con puertas corredizas, ideal para almacenar ropa y otros accesorios personales.",
        img:'../../public/muebles/idseis.png'
    },
    {
        id: 7,
        nombre: "Sofá de 3 Cuerpos",
        categoria: "Living",
        material: "Tela",
        dimensiones: "200x90 cm",
        precio: 60000,
        stock: 2,
        descripcion: "Sofá cómodo y elegante, con capacidad para tres personas, ideal para cualquier tipo de sala de estar.",
        img:'../../public/muebles/idsiete.png'
    },
    {
        id: 8,
        nombre: "Mesa de Centro",
        categoria: "Living",
        material: "Cristal y metal",
        dimensiones: "100x50 cm",
        precio: 20000,
        stock: 3,
        descripcion: "Mesa de centro moderna con tapa de cristal y estructura de metal, perfecta para dar un toque sofisticado.",
        img:'../../public/muebles/idocho.png'
    },
    {
        id: 9,
        nombre: "Biblioteca",
        categoria: "Living",
        material: "Madera",
        dimensiones: "180x80 cm",
        precio: 18000,
        stock: 2,
        descripcion: "Biblioteca de madera con múltiples estantes para almacenar libros, revistas o elementos decorativos.",
        img:'../../public/muebles/idnueve.png'
    },
    {
        id: 10,
        nombre: "Lámpara de Pie",
        categoria: "Accesorios",
        material: "Metal",
        dimensiones: "150x30 cm",
        precio: 8000,
        stock: 5,
        descripcion: "Lámpara de pie moderna con base de metal, ideal para iluminar cualquier rincón de tu hogar.",
        img:'../../public/muebles/iddiez.png'
    },
    {
        id: 11,
        nombre: "Espejo Decorativo",
        categoria: "Accesorios",
        material: "Cristal y metal",
        dimensiones: "100x70 cm",
        precio: 12000,
        stock: 3,
        descripcion: "Espejo de estilo minimalista con borde metálico, perfecto para añadir profundidad y estilo a cualquier habitación.",
        img:'../../public/muebles/idonce.png'
    },
    {
        id: 12,
        nombre: "Cojín Decorativo",
        categoria: "Accesorios",
        material: "Tela",
        dimensiones: "40x40 cm",
        precio: 1500,
        stock: 15,
        descripcion: "Cojín suave y cómodo con diseño decorativo, ideal para sofás, camas o sillas.",
        img:'../../public/muebles/iddoce.png'
    }
];

productosMuebles.sort(() => Math.random() - 0.5);

export const getProductosMuebles = ()=>{
    return new Promise((resolve) => {
        
        setTimeout(()=>{
            resolve(productosMuebles)
        }, 4000) // 4 segundos para simular un internet de latam
    })
}

export const getProductoDetails = (id)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const muebleDetalles = productosMuebles.find(mueble => mueble.id === id)
            resolve(muebleDetalles)
        }, 4000)
    })

}

export const getProductoCategoria = (categoria)=>{
    return new Promise(resolve => {
        
        setTimeout(()=>{
            const muebleCategoria = productosMuebles.filter(mueble => mueble.categoria === categoria);
            resolve(muebleCategoria);
        }, 4000)
    })
}