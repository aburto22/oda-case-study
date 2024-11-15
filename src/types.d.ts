type Product = {
  id: string;
  name: string;
  gross_unit_price: string;
  unit_price_quantity_abbreviation: string;
  currency: string;
  availability: {
    is_available: boolean;
  };
  images: {
    large: {
      url: string;
      width: number;
      height: number;
    };
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
  };
};

type ProductRes = {
  id: string;
  type: 'product';
  attributes: Product;
};

type ApiRes = {
  type: 'product';
  attributes: {
    items: number;
    page: number;
    has_more_items: boolean;
  };
  items: ProductRes[];
};
