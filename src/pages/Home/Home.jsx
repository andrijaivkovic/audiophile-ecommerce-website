import Main from "../../components/Main/Main";
import Hero from "../../components/Hero/Hero";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Claim from "../../components/Claim/Claim";
import Footer from "../../components/Footer/Footer";

import Button from "../../components/Button/Button";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <>
      <Main className="home__main">
        <Hero className="home__hero">
          <p className="hero__overline overline">New product</p>
          <h1 className="hero__heading">XX99 Mark II Headphones</h1>
          <p className="hero__body">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            linkTo="/product/xx99-mark-two-headphones"
            className="hero__link"
            kind="orange"
            buttonText="See Product"
          />
        </Hero>
        <ProductCategories className="home__product-categories" />
        <FeaturedProducts className="home__featured-products" />
        <Claim className="home__claim" />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
