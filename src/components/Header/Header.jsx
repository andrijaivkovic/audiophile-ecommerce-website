const Header = ({ headerText, className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <h2>{headerText}</h2>
    </header>
  );
};

export default Header;
