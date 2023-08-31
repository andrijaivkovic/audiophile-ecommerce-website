import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ className = "", products }) => {
  return (
    <section className={`product-list ${className}`}>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
};

export default ProductList;
