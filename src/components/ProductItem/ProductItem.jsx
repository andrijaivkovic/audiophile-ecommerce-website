import Button from "../Button/Button";

const ProductItem = ({ product }) => {
  return (
    <article key={product.id} className="product-item">
      <picture className="product-item__image-container">
        <source
          media="(max-width: 768px)"
          srcSet={product.categoryImage.mobile}
        />
        <source
          media="(min-width: 768px) and (max-width: 1439px)"
          srcSet={product.categoryImage.tablet}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={product.categoryImage.desktop}
        />
        <img
          className="product-item__image"
          src={product.categoryImage.desktop}
          alt={`Picture of ${product.name}`}
        />
      </picture>
      <div className="product-item__info-container">
        {product.new && (
          <p className="product-item__overline overline">New product</p>
        )}
        <h2 className="product-item__name">{product.name}</h2>
        <p className="product-item__description">{product.description}</p>
        <Button
          linkTo={`/product/${product.slug}`}
          kind="orange"
          buttonText="See product"
        />
      </div>
    </article>
  );
};

export default ProductItem;
