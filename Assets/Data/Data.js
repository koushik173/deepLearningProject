export const categories = [
    "All", 
    "Diagnosis", 
    "Crops",  
    "Fruits", 
    "Vegtables",
    "Flowers"
];

export const featuredFruits = [
    {
      name: 'Australian Orange',
      price: "12.30",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'orange',
      image: require('../images/orange.png'),
      color: opacity => `rgba(251, 216, 146, ${opacity})`
    },
    {
      name: 'Flesh Nectari',
      shadow: 'red',
      price: "12",
      stars: 3,
      desc: 'Sweet and juicy',
      image: require('../images/peach.png'),
      color: opacity => `rgba(255, 170, 157, ${opacity})`
    },
    
    {
      name: 'Black Grapes',
      price: "40",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'purple',
      image: require('../images/grapes.png'),
      color: opacity => `rgba(214, 195, 246, ${opacity})`
    },
    
    
    {
      name: 'Red Grapefruit',
      price: "30",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'red',
      image: require('../images/redOrange.png'),
      color: opacity => `rgba(255, 163, 120, ${opacity})`
    },
    {
      name: 'Green Apple',
      price: "10.5",
      stars: 4,
      desc: 'Sweet and juicy',
      shadow: 'green',
      image: require('../images/greenApple.png'),
      color: opacity => `rgba(139, 243, 139, ${opacity})`
    },
    
    
  ]

  
export const cartItems = [
    {
      name: 'Australian Orange',
      price: "12.30",
      qty: 4,
      desc: 'Sweet and juicy',
      shadow: 'orange',
      image: require('../images/orange.png'),
      color: 'white'
    },
    {
      name: 'Flesh Nectari',
      shadow: 'red',
      price: "12",
      qty: 3,
      desc: 'Sweet and juicy',
      image: require('../images/peach.png'),
      color: 'white'
    },
    
    {
      name: 'Black Grapes',
      price: "40",
      qty: 2,
      desc: 'Sweet and juicy',
      shadow: 'purple',
      image: require('../images/grapes.png'),
      color: 'white'
    },
    {
      name: 'Green Apple',
      price: "10.5",
      qty: 2,
      desc: 'Sweet and juicy',
      shadow: 'green',
      image: require('../images/greenApple.png'),
      color: 'white'
    },
    
    
  ]

  
