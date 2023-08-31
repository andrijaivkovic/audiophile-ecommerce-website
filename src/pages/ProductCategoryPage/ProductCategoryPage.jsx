import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import Claim from "../../components/Claim/Claim";
import Footer from "../../components/Footer/Footer";

import { v4 as uuidv4 } from "uuid";

import { products } from "../../../data";
import { useEffect } from "react";

const firstCapitalLetter = (word) => {
  const letters = word.split("");
  const firstCapitalLetter = letters.at(0).toUpperCase();
  letters.shift();

  return [firstCapitalLetter, ...letters].join("");
};

const ProductCategoryPage = ({ productCategory }) => {
  useEffect(() => {
    document.title = `Audiophile | HiFi Store | ${firstCapitalLetter(
      productCategory
    )} `;

    return () => {
      document.title = "Audiophile | HiFi Store";
    };
  });

  const filteredProducts = products
    .filter((product) => product.category === productCategory)
    .sort((a, b) => b.new - a.new);

  return (
    <>
      <Main key={uuidv4()} className="product-page__main">
        <Header className="product-page__header" headerText={productCategory} />
        <ProductList
          products={filteredProducts}
          className="product-page__product-list"
        />
        <ProductCategories className="product-page__product-categories" />
        <Claim className="product-page__claim" />
      </Main>
      <Footer />
    </>
  );
};

export default ProductCategoryPage;
