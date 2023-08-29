import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17123',
      name: 'FIFA 23',
      category: 'Sports',
      price: 30,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: 'EA Sports',
      image: 'FIFA23main.jpg',
      rating: 3,
      secondImage: 'FIFA23main2.jpg',
      thirdImage: 'FIFA23main3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17234',
      name: 'GTA V',
      category: 'Adventure',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: 'RockStar Games',
      image: 'GTAVmain.jpg',
      rating: 4,
      secondImage: 'GTAVmain2.jpg',
      thirdImage: 'GTAVmain3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17345',
      name: 'Minecraft',
      category: 'Adventure',
      price: 25,
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: 'Mojang Studios',
      image: 'MINCECRAFTmain.jpg',
      rating: 5,
      secondImage: 'MINCECRAFTmain2.jpg',
      thirdImage: 'MINCECRAFTmain3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17456',
      name: 'Rust',
      category: 'Survival',
      price: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: 'Facepunch Studios',
      image: 'RUSTmain.jpg',
      rating: 5,
      secondImage: 'RUSTmain2.jpg',
      thirdImage: 'RUSTmain3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17567',
      name: 'Red Dead Redemption 2',
      category: 'Action',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: 'Rockstar Games',
      image: 'RDR2main.jpg',
      rating: 4,
      secondImage: 'RDR2main2.jpg',
      thirdImage: 'RDR2main3.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17678',
      name: 'World of Warcraft: Dragonflight',
      category: 'MMORPG',
      price: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: 'Blizzard Entertainment',
      image: 'WOWDFmain.jpg',
      rating: 5,
      secondImage: 'WOWDFmain2.jpg',
      thirdImage: 'WOWDFmain3.jpg',

    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17789',
      name: 'Witcher 3',
      category: 'MMORPG',
      price: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: 'CD Projekt Red',
      image: 'WITCHER3main.jpg',
      rating: 5,
      secondImage: 'WITCHER3main2.jpg',
      thirdImage: 'WITCHER3main3.jpg',

    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17890',
      name: 'NBA2K23',
      category: 'Sports',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem congue, venenatis nulla eu.',
      producent: '2K Games',
      image: 'NBA2K23main.jpg',
      rating: 3,
      secondImage: 'NBA2K23main2.jpg',
      thirdImage: 'NBA2K23main3.jpg',

    },
  ];
}

function getImages() {
  return [
    {
      image: 'FIFA23gallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17123',
    },
    {
      image: 'FIFA23gallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17123',
    },
    {
      image: 'FIFA23gallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17123',
    },
    {
      image: 'GTAVgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17234',
    },
    {
      image: 'GTAVgallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17234',
    },
    {
      image: 'GTAVgallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17234',
    },
    {
      image: 'MINECRAFTgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17345',
    },
    {
      image: 'MINECRAFTgallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17345',
    },
    {
      image: 'MINECRAFTgallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17345',
    },
    {
      image: 'RUSTgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17456',
    },
    {
      image: 'RUSTgallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17456',
    },
    {
      image: 'RUSTgallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17456',
    },
    {
      image: 'RDR2gallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17567',
    },
    {
      image: 'RDR2gallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17567',
    },
    {
      image: 'RDR2gallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17567',
    },
    {
      image: 'WOWDFgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17678',
    },
    {
      image: 'WOWDFgallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17678',
    },
    {
      image: 'WOWDFgallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17678',
    },
    {
      image: 'WITCHER3gallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17789',
    },
    {
      image: 'WITCHER3gallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17789',
    },
    {
      image: 'WITCHER3gallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17789',
    },
    {
      image: 'NBA2K23gallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17890',
    },
    {
      image: 'NBA2K23gallery2.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17890',
    },
    {
      image: 'NBA2K23gallery3.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17890',
    },
  ];
}

function getRequirements() {
  return [
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17123',
      system: 'Windows 10',
      processor: 'Intel Core I9',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17234',
      system: 'Windows 10',
      processor: 'Intel Core I8',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17345',
      system: 'Windows 10',
      processor: 'Intel Core I8',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17456',
      system: 'Windows 10',
      processor: 'Intel Core I8',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17567',
      system: 'Windows 10',
      processor: 'Intel Core I8',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17678',
      system: 'Windows 10',
      processor: 'Intel Core I8',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17789',
      system: 'Windows 10',
      processor: 'Intel Core I8',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17890',
      system: 'Windows 10',
      processor: 'Intel Core I8',
      graphics: 'RTX 2070 8GB',
      memory: '6GB RAM',
      space: '50GB',
    }
  ]
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      clientId: '0ca70f17-2b31-40df-883b-dffb7e13c457',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17123',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      clientId: '65d9199d-cc52-4e35-990e-5bb516bee490',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17234',
    },
  ];
}

function getClients() {
  return [
    {
      id: '0ca70f17-2b31-40df-883b-dffb7e13c457',
      amount: 1,
      quantity: 1,
      email: 'testowyemail4@gmail.com',
      name: 'Mikolaj Kopernik',
      address: 'Hollywood',
      payment: 'card',
      delivery: 'plane',
      note: 'i want premium model of this product',
    },
    {
        id: '65d9199d-cc52-4e35-990e-5bb516bee490',
        amount: 1,
        quantity: 1,
        email: 'testowyemail6@gmail.com',
        name: 'Travis Kowalski',
        address: 'Texas',
        payment: 'cash',
        delivery: 'UPS',
        note: 'i just want the prouct',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getImages().map(({ productId, ...orderData }) => {
      return db.images.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
        },
      });
    }),
  );

  await Promise.all(
    getRequirements().map(({ productId, ...orderData }) => {
      return db.requirements.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
        },
      });
    }),
  );

  await Promise.all(
    getClients().map((client) => {
        return db.client.create({ data: client})
    })
  )

  await Promise.all(
    getOrders().map(({ productId, clientId, ...orderData }) => {
      return db.orderItem.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
          client: {
            connect: {id: clientId},
          }
        },
      });
    }),
  );
}

seed();
