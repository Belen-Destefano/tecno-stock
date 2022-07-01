const productDetail = 
{
    id:"01",
    category: "Televisores",
    name:"BRAVIA XR" ,
    description: "Soporte multiposición para una colocación versátil del televisor. OLED ofrece unos niveles de negros, un contraste y un color sin precedentes. Cognitive Processor XR™ entiende cómo ven y escuchan los humanos para ofrecer una inmersión real. Parlante en pantalla con procesador XR que convierte cualquier sonido en envolvente",
    img: 'https://i.postimg.cc/SQ1qbJPf/tele1.jpg',

    title:' El primer TV del mundo con inteligencia cognitiva',
    extendedName:" A80J | BRAVIA XR | OLED | 4K Ultra HD | Alto rango dinámico (HDR) | Smart TV (Google TV)" ,  
    extendedDescription: "Nuestro TV BRAVIA XR™ lleva la imagen y el sonido más allá con el ingenioso Cognitive Processor XR. Entiende cómo ven y escuchan las personas con una nueva experiencia que te sumerge de lleno en la escena. Gracias a Cognitive Processor XR™, los televisores BRAVIA analizan el contenido y lo recrean tal y como los humanos lo escuchan y ven en el mundo real. Por ejemplo, entienden en qué parte de la imagen suelen fijarse los humanos, como en el protagonista de una película. También saben que el sonido debería salir desde la parte superior cuando aparece un avión y recrean ese sonido en tu sala. El resultado es una recreación de tu contenido favorito de una forma tan realista que puedes sentirlo. Nuestros TV BRAVIA XR están diseñados para ser elegantes y para proteger el medioambiente. Usamos hasta un 40 % de materiales sostenibles en la cubierta posterior de nuestros modelos de pantalla grande. Nuestra exclusiva tecnología Ambient optimization con sensor de luz ajusta automáticamente el sonido y la imagen a tu entorno.El diseño minimalista de una sola pieza recoge la pantalla en un único cristal, natural y elegante, que mantendrá tu atención en la imagen. Este TV OLED se ve y se escucha de maravilla en soportes y paredes.",
    
    price: "2000",
    another: {        
        anotherImage:"https://i.postimg.cc/rs68cwCN/https://i.postimg.cc/nzgGJLF2/tele1extra.jpg",
        anotherDescription: "La pantalla es el parlante: sonido y acción en armonía. La posición de sonido XR te ofrece una experiencia de audio comparable a cómo percibimos el mundo. Dado que la pantalla es el parlante en este televisor OLED 4K BRAVIA XR, el sonido se sincroniza de forma precisa con el contenido en pantalla para crear una experiencia realmente envolvente.",
    }

   
    
}

// recordar q solo exporto la promesa, x eso al importarla en itemlist container la tengo que desestructurar 
export const getData = new Promise ((resolve, reject) => {
    let condition = true
    setTimeout(()=>{
        if (condition){
            resolve(productDetail)
        }else{
            reject ('Ha ocurrido un error')
        }
    }, 3000)
})