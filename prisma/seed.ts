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
      image: 'GTAVgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17234',
    },
    {
      image: 'MINECRAFTgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17345',
    },
    {
      image: 'RUSTgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17456',
    },
    {
      image: 'RDR2gallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17567',
    },
    {
      image: 'WOWDFgallery.jpg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17678',
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
}

seed();
