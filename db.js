const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDsNQEqV_kzVXLM27fNG8izqUZ4LkeN5nE",
  authDomain: "kirastore-296ac.firebaseapp.com",
  projectId: "kirastore-296ac",
});

var db = firebase.firestore();
var productos = [
  {
    id: 1,
    category: "bolsas",
    title: "Bolsa ecologica de 86 litros",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/bag1.png",
    quantity: "12 unidades",
    price: 25,
    outstanding: true,
    discount: "",
    material: "corn",
    color: "please check the picture",
    size: "6 litros",
  },
  {
    id: 2,
    category: "aceites",
    title: "Aceite de Coco 1 litro",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/oil1.png",
    quantity: "12 unidades",
    price: 25,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "6 litros",
  },
  {
    id: 3,
    category: "aseo-personal",
    title: "Cepillo de Bamboo",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/cepillo1.png",
    quantity: "2 unidades",
    price: 18,
    outstanding: false,
    discount: "",
    material: "Bamboo",
    color: "Crema",
    size: "Suave",
  },
  {
    id: 4,
    category: "aceites",
    title: "Aceite de Argan",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/oil1.png",
    quantity: "1 unidadad",
    price: 55,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "120ml",
  },
  {
    id: 5,
    category: "bolsas",
    title: "Bolsa ecologica de 72 litros",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/bag2.png",
    quantity: "5 unidades",
    price: 80,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "72 litros",
  },
  {
    id: 6,
    category: "aceites",
    title: "Sancha Inchi",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/oil1.png",
    quantity: "1 unidad",
    price: 44,
    outstanding: true,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "1 litro",
  },
  {
    id: 7,
    category: "aceites",
    title: "Aceite de Linaza",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/bag1.png",
    quantity: "1 unidad",
    price: 85,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "2 litros",
  },
  {
    id: 8,
    category: "aceites",
    title: "Aceite de Ajonjoli",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/bag1.png",
    quantity: "1 unidad",
    price: 22,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "1 litro",
  },
  {
    id: 9,
    category: "bolsas",
    title: "Bolsa ecologica de 90 litros",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/bag3.png",
    quantity: "20 unidades",
    price: 60,
    outstanding: false,
    discount: "20",
    material: "nonwoven",
    color: "please check the picture",
    size: "90 litros",
  },
  {
    id: 10,
    category: "bolsas",
    title: "Bolsa  biodegradable 70 litros",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/bag2.png",
    quantity: "5 unidades",
    price: 17,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "70 litros",
  },
  {
    id: 11,
    category: "aseo-personal",
    title: "Shampoo en barra de hierbas mixtas",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/cepillo2.png",
    quantity: "12 unidades",
    price: 25,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "6 litros",
  },
  {
    id: 12,
    category: "aseo-personal",
    title: "Shampoo de Manzanilla",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/cepillo3.png",
    quantity: "12 unidades",
    price: 25,
    outstanding: true,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "6 litros",
  },
  {
    id: 13,
    category: "aseo-personal",
    title: "Shampoo de Menta",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/cepillo1.png",
    quantity: "1 unidad",
    price: 76,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "500 ml",
  },
  {
    id: 14,
    category: "aseo-personal",
    title: "Copa mestrual",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/cepillo2.png",
    quantity: "2 unidades",
    price: 220,
    outstanding: false,
    discount: "",
    material: "nonwoven",
    color: "transparente",
    size: "standart",
  },
  {
    id: 15,
    category: "aseo-personal",
    title: "Jabones de glicerina 100% natural",
    description:
      "Biodegradable non-woven nursery bags plant grow bags fabric pots plants pouch home garden supply.  ☺ Eco-friendly breathable and biodegradable non-woven material, no need to remove the bag when transplanting, improving the plants survival rate",
    img: "/images/soap1.png",
    quantity: "8 unidades",
    price: 90,
    outstanding: true,
    discount: "",
    material: "nonwoven",
    color: "please check the picture",
    size: "Pequeños",
  },
];

productos.forEach((obj) => {
  db.collection("productos").add({
    id: obj.id,
    category: obj.category,
    title: obj.title,
    img: obj.img,
    description: obj.description,
    quantity: obj.quantity,
    price: obj.price,
    outstanding: obj.outstanding,
    discount: obj.discount,
    material: obj.material,
    color: obj.color,
    size: obj.size,
  })
  .then((docRef)=>{
      console.log("Producto registrado con ID", docRef.id);
  })
  .catch((error)=>{
      console.error("Error al agregar un docuemntos", error);
  })
});
