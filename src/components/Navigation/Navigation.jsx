import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { useApp } from "../../contexts/AppContext/AppContext";
import { useCart } from "../../contexts/CartContext/CartContext";

import ProductCategories from "../ProductCategories/ProductCategories";

import menuIconOpen from "/images/shared/tablet/icon-menu-open.svg";
import menuIconClose from "/images/shared/tablet/icon-menu-close.svg";

import navigationLogo from "/images/shared/desktop/logo.svg";
import cartIcon from "/images/shared/desktop/icon-cart.svg";

import Button from "../Button/Button";
import ItemAmountSelect from "../ItemAmountSelect/ItemAmountSelect";

const usDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const Navigation = () => {
  const {
    isMenuOpen,
    isCartOpen,
    isBackdropShown,
    dispatch: dispatchApp,
  } = useApp();

  const {
    cartItems,
    cartItemsAmount,
    cartTotalPrice,
    dispatch: dispatchCart,
  } = useCart();

  return (
    <>
      <nav className="navigation">
        <div className="navigation__content">
          <button
            className="navigation__menu-button"
            onClick={() =>
              dispatchApp({ type: "menu/toggled", payload: !isMenuOpen })
            }
            type="button"
          >
            <img
              src={isMenuOpen ? menuIconClose : menuIconOpen}
              alt={
                isMenuOpen
                  ? "Icon with two crossed lines, forming an X."
                  : "Icon with three horizontal lines in a column."
              }
            />
          </button>
          <Link to="/home">
            <img
              src={navigationLogo}
              alt="Menu icon with three horizontal lines in a column."
            />
          </Link>
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/headphones">Headphones</NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/speakers">Speakers</NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/earphones">Earphones</NavLink>
            </li>
          </ul>
          <button
            onClick={() =>
              dispatchApp({ type: "cart/toggled", payload: !isCartOpen })
            }
            className="navigation__cart-button"
            type="button"
          >
            {cartItemsAmount > 0 && (
              <div className="navigation__cart-button-number">
                {cartItemsAmount}
              </div>
            )}
            <img src={cartIcon} alt="Shopping cart icon." />
          </button>
        </div>
        <AnimatePresence initial="false">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="navigation__menu"
            >
              <ProductCategories isAnimated={true} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial="false">
          {isCartOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, translateX: "-50%" }}
              animate={{ opacity: 1, scale: 1, translateX: "-50%" }}
              exit={{ opacity: 0, scale: 0.95, translateX: "-50%" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="navigation__cart"
            >
              <div className="navigation__cart-heading">
                <h6>Cart ({cartItems.length})</h6>
                <Button
                  onClick={() => {
                    dispatchCart({ type: "cart/removedAll" });
                    dispatchApp({
                      type: "toast/added",
                      payload: {
                        type: "success",
                        message: `Cart emptied.`,
                        id: uuidv4(),
                      },
                    });
                    dispatchApp({ type: "cart/toggled" });
                  }}
                  isLink={false}
                  kind="text"
                  buttonText="Remove all"
                />
              </div>
              <div className="navigation__cart-items">
                {cartItems.length > 0 ? (
                  cartItems.map((cartItem) => {
                    return (
                      <div
                        key={cartItem.product.id}
                        className="navigation__cart-item"
                      >
                        <div className="navigation__cart-item-image-container">
                          <img
                            className="navigation__cart-item-image-container"
                            src={cartItem.product.image.mobile}
                            alt="123"
                          />
                        </div>
                        <div className="navigation__cart-item-info-container">
                          <p className="navigation__cart-item-name">
                            {cartItem.product.cartName}
                          </p>
                          <p className="navigation__cart-item-price">
                            {usDollar.format(cartItem.product.price)}
                          </p>
                        </div>
                        <ItemAmountSelect
                          amount={cartItem.amount}
                          onDecrease={() =>
                            dispatchCart({
                              type: "cart/decreasedAmount",
                              payload: cartItem.product.id,
                            })
                          }
                          onIncrease={() =>
                            dispatchCart({
                              type: "cart/increasedAmount",
                              payload: cartItem.product.id,
                            })
                          }
                        />
                      </div>
                    );
                  })
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
              <div className="navigation__cart-checkout">
                <p className="navigation__cart-total-text">Total</p>
                <p className="navigation__cart-total-number">
                  {usDollar.format(cartTotalPrice)}
                </p>
                <Button
                  isDisabled={!cartItemsAmount}
                  onClick={() =>
                    dispatchApp({ type: "cart/toggled", payload: !isCartOpen })
                  }
                  linkTo="/checkout"
                  isLink={true}
                  kind="orange"
                  buttonText={`${
                    cartItemsAmount ? "Checkout" : "Your cart is empty"
                  } `}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence initial="false">
        {isBackdropShown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={() => dispatchApp({ type: "all/closed" })}
            className="navigation__backdrop"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
