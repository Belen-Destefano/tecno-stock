const products = [
    {
        id:"01",
        category: "Televisores",
        name:"A80J | BRAVIA XR" ,
        price: "2000",
        description: "Soporte multiposición para una colocación versátil del televisor. OLED ofrece unos niveles de negros, un contraste y un color sin precedentes. Cognitive Processor XR™ entiende cómo ven y escuchan los humanos para ofrecer una inmersión real. Parlante en pantalla con procesador XR que convierte cualquier sonido en envolvente",        
        img: 'https://i.postimg.cc/SQ1qbJPf/tele1.jpg'
       
    },
    {
        id:"02",
        category: "Televisores",
        name:" A8G | OLED  " ,
        price: "4000",
        description: "OLED ofrece unos niveles de negros, un contraste y un color sin precedentes. Asombroso realismo con 4K HDR Processor X1™ Extreme. Descubre una nueva forma de disfrutar de la televisión con la tecnología Acoustic Surface Audio™.Busca opciones de entretenimiento con la voz gracias a Android TV™ ",        
        img: "https://i.postimg.cc/nhcPFkQs/tele2.jpg"
    },
    {
        id:"03",
        category: "Televisores",
        name:"X85G | LED " ,
        price: "2500",
        description: "Increíbles imágenes 4K con 4K HDR Processor X1™. Acoustic Multi-Audio™ para una experiencia visual envolvente. Busca opciones de entretenimiento con la voz gracias a Android TV™. Con tecnología Object-based HDR remaster, nuestro 4K HDR Processor X1™ reproduce una profundidad y unas texturas mejoradas",
        img: "https://i.postimg.cc/htf1Z3d0/tele3.jpg"
    },



    {
        id:"04",
        category: "Sonido",
        name:"Parlantes SRS-NS7" ,
        price: "1000",
        description: "Parlantes inalámbricos estilo neckband para películas y música 360 Spatial Sound Personalizer crea parlantes virtuales Dolby Atmos® para generar un sonido Surround. Diseño flexible, ergonómico, ajustable y a prueba de salpicaduras IPX4 para llevarlos .",
        img: "https://i.postimg.cc/8Pg6mhfw/sonido1.jpg"
    },
    {
        id:"05",
        category: "Sonido",
        name:"Parlante XP700. Serie X" ,
        price: "2300",
        description: "Sonido de fiesta omnidireccional con X-Balanced Speaker Unit y tweeters frontal y posterior de alta eficiencia.        Resistencia al agua IPX4.Duración de batería de 25 horas y carga rápida. Diseñado para llenar cualquier lugar",
        img: "https://i.postimg.cc/pLZcHVtb/sonido2.jpg"
    },
    {
        id:"06",
        category: "Sonido",
        name:"Parlante exterior GTK-PG10" ,
        price: "2800",
        description: "Modo de fiesta al aire libre para propagar aún más el sonido.Batería recargable y conexión inalámbrica.Panel superior a prueba de salpicaduras. Portátil, inalámbrico y con batería de larga duración",
        img: "https://i.postimg.cc/qBs5LxZv/sonido3.jpg"
    },


    {
        id:"07",
        category: "Camaras",
        name:"Cámara FX3 Cinema Line full-frame" ,
        price: "2800",
        description: "Sensor CMOS Exmor R™ full-frame y potente procesador de imagen BIONZ XR™.Alta sensibilidad y amplio rango dinámico.Movilidad mejorada con un cuerpo liviano y compacto",
        img: "https://i.postimg.cc/QNYBYNkR/camara1.jpg"
    },
    {
        id:"08",
        category: "Camaras",
        name:"Alpha 1- Resolución y velocidad" ,
        price: "2100",
        description: "Sensor CMOS apilado full-frame de 50,1 MP4 de 35 mm con memoria integral para alta velocidad.Captura continua a alta velocidad hasta a 30 FPS5.Captura de película profesional hasta 8K/30p y 4K/120p",
        img: "https://i.postimg.cc/MHgp6T9H/camara2.jpg"
    },
    {
        id:"09",
        category: "Camaras",
        name:"Cámara compacta full-frame Alpha 7C" ,
        price: "2350",
        description: "El cuerpo de la cámara full-frame con estabilización más pequeño y ligero del mundo.Sensor de imagen CMOS Exmor R™ full-frame de 24,2 megapíxeles.Grabación de películas 4K versátil para creadores",
        img: "https://i.postimg.cc/43w4KwWr/camara3.jpg"
    }

]


// recordar q solo exporto la promesa, x eso al importarla en itemlist container la tengo que desestructurar 
export const getData = new Promise ((resolve, reject) => {
    let condition = true
    setTimeout(()=>{
        if (condition){
            resolve(products)
        }else{
            reject ('Ha ocurrido un error')
        }
    }, 3000)
})