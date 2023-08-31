const Hero = ({ children, className }) => {
  return <section className={`hero ${className}`}>{children}</section>;
};

export default Hero;
