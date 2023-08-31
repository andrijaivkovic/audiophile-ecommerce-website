import { useApp } from "../../contexts/AppContext/AppContext";

import Button from "../Button/Button";

import headphonesCategoryImage from "/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakersCategoryImage from "/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesCategoryImage from "/images/shared/desktop/image-category-thumbnail-earphones.png";

const ProductCategories = ({ className = "" }) => {
  const { dispatch } = useApp();

  return (
    <section className={`product-categories ${className}`}>
      <div className="product-category">
        <img
          className="product-category__image"
          src={headphonesCategoryImage}
          alt="An image on headphones"
        />
        <p className="product-category__category-name">Headphones</p>
        <Button
          className="product-category__link"
          kind="right-arrow"
          buttonText="Shop"
          linkTo="/headphones"
          onClick={() => dispatch({ type: "all/closed" })}
        />
      </div>
      <div className="product-category">
        <img
          className="product-category__image"
          src={speakersCategoryImage}
          alt="An image of a singular speaker."
        />
        <p className="product-category__category-name">Speakers</p>
        <Button
          className="product-category__link"
          kind="right-arrow"
          buttonText="Shop"
          linkTo="/speakers"
          onClick={() => dispatch({ type: "all/closed" })}
        />
      </div>
      <div className="product-category">
        <img
          className="product-category__image"
          src={earphonesCategoryImage}
          alt="An image of earphone case."
        />
        <p className="product-category__category-name">Earphones</p>
        <Button
          className="product-category__link"
          kind="right-arrow"
          buttonText="Shop"
          linkTo="/earphones"
          onClick={() => dispatch({ type: "all/closed" })}
        />
      </div>
    </section>
  );
};

export default ProductCategories;
