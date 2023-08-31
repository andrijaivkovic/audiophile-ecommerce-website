import claimImageMobile from "/images/shared/mobile/image-best-gear.jpg";
import claimImageTablet from "/images/shared/tablet/image-best-gear.jpg";
import claimImageDesktop from "/images/shared/desktop/image-best-gear.jpg";

const Claim = ({ className = "" }) => {
  return (
    <section className={`claim ${className}`}>
      <picture className="claim__image-container">
        <source media="(max-width: 768px)" srcSet={claimImageMobile} />
        <source
          media="(min-width: 768px) and (max-width: 1439px)"
          srcSet={claimImageTablet}
        />
        <source media="(min-width: 1440px)" srcSet={claimImageDesktop} />
        <img
          className="claim__image"
          src={claimImageDesktop}
          alt="Person wearing headphones, right hand cuffing the right headphone driver."
        />
      </picture>
      <h2 className="claim__heading">
        Bringing you the <span>best</span> audio gear
      </h2>
      <p className="claim__body">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
};

export default Claim;
