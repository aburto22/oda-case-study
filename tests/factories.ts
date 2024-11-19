import { faker } from '@faker-js/faker';

export const createProduct = (data: Partial<Product>): Product => {
  return {
    id: faker.number.int({ min: 1, max: 10000 }),
    name: faker.commerce.productName(),
    gross_price: `${faker.number.int({ min: 100, max: 1000 })}`,
    currency: 'NOK',
    availability: {
      is_available: true,
    },
    images: [
      {
        large: {
          url: 'my-url-large.jpg',
          width: 100,
          height: 100,
        },
        thumbnail: {
          url: 'my-url-thumbnail.jpg',
          width: 100,
          height: 100,
        },
      },
    ],
    ...data,
  };
};

export const createApiResponse = (items = 5, pages = 1): ApiRes => {
  const products = Array(items).fill(null).map(createProduct);

  const productRes: ProductRes[] = products.map(product => ({
    id: product.id,
    type: 'product',
    attributes: product,
  }));

  return {
    type: 'product',
    attributes: {
      items,
      page: 1,
      has_more_items: pages > 1,
      query_string: 'query',
    },
    items: productRes,
  };
};
