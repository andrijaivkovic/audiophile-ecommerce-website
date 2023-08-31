import Button from "../Button/Button";

import featuredProductOneImageMobile from "/images/home/mobile/image-speaker-zx9.png";
import featuredProductOneImageTablet from "/images/home/tablet/image-speaker-zx9.png";
import featuredProductOneImageDesktop from "/images/home/desktop/image-speaker-zx9.png";

const FeaturedProducts = ({ className = "" }) => {
  return (
    <section className={`featured-products ${className}`}>
      <div className="featured-products__product-one">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={featuredProductOneImageMobile}
          />
          <source
            media="(min-width: 768px) and (max-width: 1439px)"
            srcSet={featuredProductOneImageTablet}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={featuredProductOneImageDesktop}
          />
          <img src={featuredProductOneImageDesktop} alt="ZX9 speaker." />
        </picture>
        <h2>
          ZX9
          <br />
          Speaker
        </h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          linkTo="/product/zx9-speaker"
          kind="transparent"
          buttonText="See Product"
        />
      </div>
      <div className="featured-products__product-two">
        <h2>ZX7 Speaker</h2>
        <Button
          linkTo="/product/zx7-speaker"
          kind="transparent"
          buttonText="See Product"
        />
      </div>
      <div className="featured-products__product-three">
        <div></div>
        <div>
          <h2>YX1 Earphones</h2>
          <Button
            linkTo="/product/yx1-earphones"
            kind="transparent"
            buttonText="See Product"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
