type ProductProps = {
  product: Product;
};

function Product({ product }: ProductProps) {
  const image = product.images[0].thumbnail;

  return (
    <article className="flex h-full w-48 flex-col rounded border border-secondary bg-white p-4 text-text-opposite shadow transition-transform hover:-translate-y-1 hover:scale-110">
      <div className="mx-auto mb-auto flex h-28 w-32 items-center justify-center pb-2">
        <img
          src={image.url}
          alt={product.name}
          width={image.width}
          height={image.height}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3>{product.name}</h3>
      <p className="text-sm font-semibold">
        {product.currency} {product.gross_price}{' '}
      </p>
    </article>
  );
}

export default Product;
