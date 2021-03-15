const products = [
  {
    name: 'Mac Computer',
    image: '/images/c4.jpg',
    description: "The Lenovo V130 15.6-inch laptop delivers great performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating",
    brand: 'Apple',
    category: 'Computers & Laptops',
    price: 399.99,
    countInStock: 11,
    rating: 3.4,
    numReviews: 12,
    isOnSale: false,
    discount: 10
  },
  {
    name: 'Samsung-Galaxy-note-9',
    image: '/images/samsung-galaxy-note-9.jpg',
    description:
      'Performance. Battery. Battery capacity. 4000mAh. Charging. Fast Charging compatible on wired and wireless. *Wired charging compatible with QC2.0 and AFC. Network. & Connectivity',
    brand: 'Samsung',
    category: 'Smartphones & Tablets',
    price: 929.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 7,
    isOnSale: false,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera1.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Other',
    category: 'Accessories',
    price: 929.99,
    countInStock: 5,
    rating: 3.0,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Samsung Syncmaster T22A300 21.5 inch',
    image: '/images/c1.jpg',
    description:
      'Wireless DeX unlocks a full PC experience, without any PC. Use mobile productivity apps, such as video conferencing, documents, and browsers, through just your monitor and phone.',
    brand: 'Samsung',
    category: 'Computers & Laptops',
    price: 49.99,
    countInStock: 7,
    rating: 4.5,
    numReviews: 10,
    isOnSale: false,
    discount: 20
  },
  {
    name: 'iPhone 11 Pro Max',
    image: '/images/m7.png',
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
    name: 'Lazy Hang Neck Phone Holder',
    image: '/images/a1.jpg',
    description: 'Lazy Bracket Universal 360 Degrees Rotation Phone Selfie Holder Snake-like Neck Mount',
    brand: 'Samsung',
    category: 'Accessories',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Magic Mouse 2 For Gaming',
    image: '/images/mouse.jpg',
    description:
      ' Magic Mouse 2 is completely rechargeable, so you’ll eliminate the use of traditional batteries. It’s lighter, has fewer moving parts thanks to its built-in battery and continuous bottom shell, and has an optimized foot design — all helping Magic Mouse 2 track easier and move with less resistance across your desk. And the Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents. Magic Mouse 2 is ready to go right out of the box and pairs automatically with your Mac.',
    brand: 'Apple',
    category: 'Computers & Laptops',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    isOnSale: false,
    discount: 0
  },
  {
    name: 'Lenovo Tab M10 FHD Plus (2nd Gen)',
    image: '/images/-lenovo-tablet-.jpg',
    description:
      'With an all-metal body and ultramodern design, the Lenovo Tab M10 FHD Plus (2nd Gen) stands outs from the crowd. Its 10.3" FHD display and dual speakers with Dolby Atmos® give you truly immersive entertainment. And with the optional Smart Charging Station, you can manage your smart home via the Google Assistant. You can also opt for a folio case to shield your device when you’re on the go. In short, this is no ordinary tablet.',
    brand: 'Lenovo',
    category: 'Smartphones & Tablets',
    price: 599.99,
    countInStock: 7,
    rating: 5.0,
    numReviews: 8,
    isOnSale: false
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/a3.jpg',
    description:
      'The Apple AirPods, with Charging Case, are here to export you to elevate your audio listening experience. They render crystal-clear audio, thus allowing you to enjoy your favorite content to the fullest. These wireless Apple headphones are easy to use; with just a simple one-tap setup',
    brand: 'Apple',
    category: 'Accessories',
    price: 89.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 10,
    isOnSale: false
  },
  {
    name: 'Samsung 21.5 inch',
    image: '/images/c5.jpg',
    description:
      'Wireless DeX unlocks a full PC experience, without any PC. Use mobile productivity apps, such as video conferencing, documents, and browsers, through just your monitor and phone.',
    brand: 'Samsung',
    category: 'Computers & Laptops',
    price: 99,
    countInStock: 7,
    rating: 3.0,
    numReviews: 2,
    isOnSale: false,
    discount: 0
  },
  {
    name: '10000 mah Power bank',
    image: '/images/e3.jpg',
    description:
      'The new Samsung Battery Pack comes with Samsung AFC (15W) and Quick Charge 2.0 support that lets you power up quick when you’re on the go. And with OCP functionality, you can charge safely without having to worry about excessive current levels damaging your device.',
    brand: 'Samsung',
    category: 'Smartphones & Tablets',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 10,
    isOnSale: true
  },
  {
    name: 'Lenovo QE07 Neckband Wireless Earphone',
    image: '/images/Earphones.jpg',
    description:
      'Lenovo QE07 Neckband Wireless Earphone With Magnetic Adsorption, Compatible with Multi, Speaker Sensitivity: 98dB±3dB - Black',
    brand: 'Lenovo',
    category: 'Accessories',
    price: 150.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Lenovo V Series All-in-One',
    image: '/images/AllinOne_large.jpg',
    description: 'The power & space to outperform, The Lenovo V130 AIO is all that it promises to be—powerful, fast, and secure. With cutting-edge processing and memory, plus optional next-gen storage, this space-saving PC is proven to deliver exceptional performance and reliability. Easy to deploy, use, and manage, it can enhance your productivity without breaking the bank.',
    brand: 'Lenovo',
    category: 'Computers & Laptops',
    price: 29.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 12,
    isOnSale: true
  },
  {
    name: 'Samsung Galaxy Ultra',
    image: '/images/samsung-galaxy.jpg',
    description:
      'Samsung Galaxy Ultra Mobile Phone, Hybrid Dual SIM, 6.9 Inch, 256 GB, 8 GB RAM, 4G LTE, 4500mAh - Mystic Black',
    brand: 'Samsung',
    category: 'Smartphones & Tablets',
    price: 50.99,
    countInStock: 5,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Lenovo HD800 Bluetooth Headphone',
    image: '/images/a2.jpg',
    description:
      'Lenovo HD800 Bluetooth Headphone, Pause, play, answer and hang up options, Play time: 20 Hours, Battery Capacity: 300 mAh, - Black',
    brand: 'Lenovo',
    category: 'Accessories',
    price: 100.99,
    countInStock: 8,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Lenovo V35s SFF Desktop',
    image: '/images/pc.jpg',
    description:
      'Small form factor, big productivity, Ideal for shared-desk work environments, the Lenovo V35s desktop PC saves space while staying secure and productive. Users can connect multiple devices while relying on its AMD Ryzen™ processors and ample memory to stay productive.',
    brand: 'Lenovo',
    category: 'Computers & Laptops',
    price: 89.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Apple iPad 2020 8th Gen',
    image: '/images/ipad.jpg',
    description:
      'Apple iPad 2020 8th Gen - 10.2 inch Retina Display, Wi-Fi, 32GB, 6.9 Inch, 256 GB, 8 GB RAM, 4G LTE, 4500mAh - Mystic Gray',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    price: 50.99,
    countInStock: 5,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'PS3 Game Controller',
    image: '/images/ai.jpg',
    description:
      'PS3 Game Controller Joypad Wireless Bluetooth Gamepad Joystick for Sony Playstaion 3 Black',
    brand: 'Other',
    category: 'Accessories',
    price: 200.0,
    countInStock: 3,
    rating: 4.3,
    numReviews: 12,
    isOnSale: true
  },
  {
    name: 'Galaxy Book Ion 13.3',
    image: '/images/lap1.jpg',
    description:
      'Samsung Galaxy Book Ion 13.3” Laptop| QLED Display and Intel Core i7 Processor | 8GB Memory | 512GB SSD | Long Battery Life and Windows 10 Operating System | (NP930XCJ-K01US), QLED DISPLAY - Stream, browse, and experience brilliant detail with the magic of QLED which touts virtually 100% color volume and stays vibrant even in direct sunlight',
    brand: 'Samsung',
    category: 'Computers & Laptops',
    price: 89.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Apple Magic Keyboard for iPad Pro',
    image: '/images/mac-key.jpg',
    description:
      'Apple MXNK2AB/A Magic Arabic Keyboard for iPad Pro, Durable, lightweight cover which protects both sides, No charging or pairing required, just attach the keyboard and start typing - Black',
    brand: 'Apple',
    category: 'Smartphones & Tablets',
    price: 50.99,
    countInStock: 5,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'MOSISO Lycra Sleeve Water Repellent Bag Cover',
    image: '/images/a5.jpg',
    description: 'MOSISO Water Repellent Lycra Sleeve Bag Cover for 13-13.3 Inch Laptop with Small Case for MacBook Charger, Baby Pink, The big bag internal dimension is: 13.58 x 0.79 x 9.64 inch (L x W x H); external dimension is: 13.97 x 0.79 x 10.04 inch (L x W x H). The additional small pouch bag internal dimension is: 5.5 x 0.59 x 4.92 inch (L x W x H); external dimension is: 6.1 x 0.59 x 5.31 inch (L x W x H).',
    brand: 'Other',
    category: 'Accessories',
    price: 200.0,
    countInStock: 3,
    rating: 4.3,
    numReviews: 12,
    isOnSale: true
  },
  {
    name: 'Samsung SL-M2020 Mono Laser Printer White Monolaser',
    image: '/images/m8.jpg',
    description:
      'The M2020 prints and scans your text and images in brilliant quality. The 1200 x 1200 dpi is achieved by varying the dots size and the position of the dot itself. This means you can print in more detail for a smoother and sharper image.',
    brand: 'Samsung',
    category: 'Computers & Laptops',
    price: 599.99,
    countInStock: 7,
    rating: 5.0,
    numReviews: 8,
    isOnSale: false
  },
  {
    name: 'Kingston SDCS2/32GB Class 10 CANVAS',
    image: '/images/memory.jpg',
    description:
      'Powerful in performance,speed and durability. The Canvas Select Plus microSD is designed for reliability when shooting and developing high-resolution photos or filming and editing full HD videos. Select Plus Micro SD Card with Adapter, 32 GB',
    brand: 'Other',
    category: 'Smartphones & Tablets',
    price: 50.99,
    countInStock: 5,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Apple Series SE Silicone Watch',
    image: '/images/Smartwatches_large.jpg',
    description: 'Apple Series SE Silicone Watch with Large Retina OLED display, GPS and Cellular model of Apple Watch let you call, text and get directions without your phone, Track your daily activity on Apple Watch and see your trends in the Fitness app on iPhone devices- Black',
    brand: 'Apple',
    category: 'Accessories',
    price: 7190.0,
    countInStock: 3,
    rating: 5,
    numReviews: 12,
    isOnSale: true
  },
  {
    name: 'Aluminum Alloy Foldable Bluetooth Keyboard ',
    image: '/images/keyboard.jpg',
    description:
      'Featuring a silky smooth surface texture for the fastest touch typing possible. Protects against key wear, food and drink spills, dust and hair clogging. Easy to clean too, just peel up from the keyboard, rinse under water, and dry. For use with: Apple, Android, Windows Operating System, Color: Black.',
    brand: 'Other',
    category: 'Computers & Laptops',
    price: 599.99,
    countInStock: 7,
    rating: 5.0,
    numReviews: 8,
    isOnSale: false
  },
  {
    name: 'Lenovo Black Charger with Data Cable SL-003',
    image: '/images/charger.jpg',
    description:
      'Compatible with : Mobile Phones, Type : Wall Charger, Color : black, InPut : 100-240V -50/60Hz 0.3A, Output : 5.0V   1.5A',
    brand: 'Lenovo',
    category: 'Smartphones & Tablets',
    price: 84.00,
    countInStock: 5,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Lenovo K320T Dual SIM',
    image: '/images/mob-lenovo.jpg',
    description:
      'The Lenovo K320T Dual-SIM Smartphone packs class-leading performance in a sleek design. It boasts a 5.7inch screen that renders clear, crisp images at a resolution of 720 x 1440 pixels. This Lenovo smartphone is perfect for immersive on-the-go entertainment.',
    brand: 'Lenovo',
    category: 'Smartphones & Tablets',
    price: 50.99,
    countInStock: 5,
    rating: 4.3,
    numReviews: 12,
    isOnSale: false
  },
  {
    name: 'Lenovo ideapad L3 Laptop',
    image: '/images/lap2.jpg',
    description:
      'Lenovo ideapad L3 Laptop intel 10th Gen core i5-10210U, 8 GB RAM, 1 TB HDD, Integrated Intel UHD Graphics, 15.6 inch HD, Dos, Platinum Grey',
    brand: 'Lenovo',
    category: 'Computers & Laptops',
    price: 599.99,
    countInStock: 7,
    rating: 5.0,
    numReviews: 8,
    isOnSale: false
  }
]

export default products
