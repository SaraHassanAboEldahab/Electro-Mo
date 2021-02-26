const products = [
  {
    name: 'Apple LapTop',
    image: '/images/c4.jpg',
    description: "The Lenovo V130 15.6-inch laptop delivers great performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating",
    brand: 'Sony',
    category: 'Computers & Laptops',
    price: 399.99,
    countInStock: 11,
    rating: 3.4,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/c6.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Computers & Laptops',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    isOnSale: false
  },
  {
    name: 'Samsung Syncmaster T22A300 21.5 inch',
    image: '/images/c1.jpg',
    description:
      'Wireless DeX unlocks a full PC experience, without any PC. Use mobile productivity apps, such as video conferencing, documents, and browsers, through just your monitor and phone.',
    brand: 'Logitech',
    category: 'Computers & Laptops',
    price: 49.99,
    countInStock: 7,
    rating: 4.5,
    numReviews: 10,
    isOnSale: false
  },
  {
    name: 'Mac 21.5 inch',
    image: '/images/c5.jpg',
    description:
      'Wireless DeX unlocks a full PC experience, without any PC. Use mobile productivity apps, such as video conferencing, documents, and browsers, through just your monitor and phone.',
    brand: 'Logitech',
    category: 'Computers & Laptops',
    price: 99,
    countInStock: 7,
    rating: 3.0,
    numReviews: 2,
    isOnSale: false
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/e2.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 12,
    isOnSale: true
  },
  {
    name: 'Games',
    image: '/images/e5.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/e1.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3.0,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Samsung Note',
    image: '/images/m4.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Lenovo',
    category: 'Smartphones & Tablets',
    price: 929.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 7,
    isOnSale: false
  },
  {
    name: 'Huawei',
    image: '/images/m8.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    isOnSale: false
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/m6.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    price: 599.99,
    countInStock: 7,
    rating: 5.0,
    numReviews: 8,
    isOnSale: false
  },
  {
    name: 'iPhone 12 Pro',
    image: '/images/m7.png',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 10,
    isOnSale: true
  },
  {
    name: 'Huawei prime-9',
    image: '/images/m8.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    price: 599.99,
    countInStock: 7,
    rating: 5.0,
    numReviews: 8,
    isOnSale: false
  },
  {
    name: 'Lazy Hang Neck Phone Holder',
    image: '/images/a1.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Accessories',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/a3.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Accessories',
    price: 89.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 10,
    isOnSale: false
  },
  {
    name: 'Head Phone',
    image: '/images/a2.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Accessories',
    price: 150.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Laptop cover',
    image: '/images/a5.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Accessories',
    price: 100.99,
    countInStock: 8,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Iphone HeadPhone ',
    image: '/images/a6.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Accessories',
    price: 200.0,
    countInStock: 3,
    rating: 4.3,
    numReviews: 12,
    isOnSale: true
  },
  {
    name: 'Laptop Bag',
    image: '/images/a4.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Accessories',
    price: 50.99,
    countInStock: 5,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
]

export default products
