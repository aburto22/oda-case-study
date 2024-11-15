type ProductImage = {
  url: string;
  width: number;
  height: number;
};

type ProductImageSet = {
  large: ProductImage;
  thumbnail: ProductImage;
};

type Product = {
  id: string;
  name: string;
  gross_price: string;
  currency: string;
  availability: {
    is_available: boolean;
  };
  images: ProductImageSet[];
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
