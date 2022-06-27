const products = [
    {
        id:"01",
        category: "Televisores",
        name:"Tele1" ,
        price: "2000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: 'https://i.postimg.cc/SQ1qbJPf/tele1.jpg'
       
    },
    {
        id:"02",
        category: "Televisores",
        name:"Tele2" ,
        price: "4000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: "https://i.postimg.cc/nhcPFkQs/tele2.jpg"
    },
    {
        id:"03",
        category: "Televisores",
        name:"Tele3" ,
        price: "2500",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: "https://i.postimg.cc/htf1Z3d0/tele3.jpg"
    },



    {
        id:"04",
        category: "Sonido",
        name:"Sonido1" ,
        price: "1000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: "https://i.postimg.cc/yYNmWrvz/sonido1.jpg"
    },
    {
        id:"05",
        category: "Sonido",
        name:"Sonido2" ,
        price: "2300",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: "https://i.postimg.cc/RZ6wL6ks/sonido2.jpg"
    },
    {
        id:"06",
        category: "Sonido",
        name:"Sonido3" ,
        price: "2800",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: "https://i.postimg.cc/V6DS8zy0/sonido3.jpg"
    },


    {
        id:"07",
        category: "Camaras",
        name:"Camaras1" ,
        price: "2800",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: "https://i.postimg.cc/QNYBYNkR/camara1.jpg"
    },
    {
        id:"08",
        category: "Camaras",
        name:"Camaras2" ,
        price: "2100",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
        img: "https://i.postimg.cc/MHgp6T9H/camara2.jpg"
    },
    {
        id:"09",
        category: "Camaras",
        name:"Camaras3" ,
        price: "2350",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat saepe iusto sint reiciendis quia repudiandae. Nihil odit, illo inventore quis impedit fugiat officiis quibusdam voluptate deserunt consequuntur, rem praesentium.",
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