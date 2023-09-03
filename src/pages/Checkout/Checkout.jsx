import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import { useCart } from "../../contexts/CartContext/CartContext";

import Button from "../../components/Button/Button";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

import checkoutOrderConfirmIcon from "/images/checkout/icon-order-confirmation.svg";
import cashOnDeliveryIcon from "/images/checkout/icon-cash-on-delivery.svg";
import Input from "../../components/Input/Input";
import useTitle from "../../hooks/useTitle";

const usDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const Checkout = () => {
  const [inputs, setInputs] = useState({ paymentMethod: "cashOnDelivery" });
  const [isCheckoutModalShowAll, setCheckoutModalShowAll] = useState(false);

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const order = useRef();
  const orderGrantTotal = useRef();

  const navigate = useNavigate();

  useTitle("Checkout");

  const {
    cartItems,
    cartItemsAmount,
    cartTotalPrice,
    cartShippingPrice,
    cartVat,
    cartGrandTotal,
    dispatch: dispatchCart,
  } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cartItemsAmount) {
      return;
    }

    order.current = cartItems;
    orderGrantTotal.current = cartGrandTotal;

    dispatchCart({ type: "cart/removedAll" });

    setIsCheckoutModalOpen(true);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log({ userInfo: inputs, userOrder: cartItems });
  };

  return (
    <>
      <Main className="checkout__main">
        <Button
          isLink={false}
          onClick={() => navigate(-1)}
          className="checkout__back-button"
          kind="text"
          buttonText="Go back"
        />
        <form onSubmit={handleSubmit} className="checkout__form-container">
          <div className="checkout__form-info-container">
            <h2>Checkout</h2>
            <div className="checkout__form-billing-details">
              <p className="sub-title">Billing details</p>
              <Input
                id="name"
                type="text"
                isRequired={true}
                labelText="Full name"
                onChange={handleChange}
                checks={["valueMissing"]}
                errorMessage="This field is required."
                inputProps={{
                  placeholder: "Alexei Ward",
                  autoComplete: "name",
                  value: inputs.name || "",
                }}
              />
              <Input
                id="email"
                type="email"
                isRequired={true}
                labelText="Email Address"
                onChange={handleChange}
                checks={["typeMismatch", "valueMissing"]}
                errorMessage="Wrong format."
                inputProps={{
                  placeholder: "alexei@mail.com",
                  autoComplete: "email",
                  value: inputs.email || "",
                }}
              />
              <Input
                id="phone"
                type="tel"
                isRequired={true}
                labelText="Phone number"
                onChange={handleChange}
                checks={["valueMissing"]}
                errorMessage="This field is required."
                inputProps={{
                  placeholder: "+1 202-555-0136",
                  autoComplete: "tel",
                  value: inputs.phone || "",
                }}
              />
            </div>
            <div className="checkout__form-shipping-info">
              <p className="sub-title">Shipping Info</p>
              <Input
                id="address"
                type="text"
                isRequired={true}
                labelText="Your address"
                onChange={handleChange}
                checks={["valueMissing"]}
                errorMessage="This field is required."
                inputProps={{
                  placeholder: "1137 Williams Avenue",
                  autoComplete: "address",
                  value: inputs.address || "",
                }}
              />
              <Input
                id="zip"
                type="text"
                isRequired={true}
                labelText="Zip code"
                onChange={handleChange}
                checks={["valueMissing"]}
                errorMessage="This field is required."
                inputProps={{
                  placeholder: "10001",
                  autoComplete: "postal-code",
                  value: inputs.zip || "",
                }}
              />
              <Input
                id="city"
                type="text"
                isRequired={true}
                labelText="City"
                onChange={handleChange}
                checks={["valueMissing"]}
                errorMessage="This field is required."
                inputProps={{
                  placeholder: "New York",
                  autoComplete: "city",
                  value: inputs.city || "",
                }}
              />
              <Input
                id="country"
                type="text"
                isRequired={true}
                labelText="Country"
                onChange={handleChange}
                checks={["valueMissing"]}
                errorMessage="This field is required."
                inputProps={{
                  placeholder: "United States",
                  autoComplete: "country",
                  value: inputs.country || "",
                }}
              />
            </div>
            <div className="checkout__form-payment-details">
              <p className="sub-title">Payment Details</p>
              <p>Payment Method</p>
              <Input
                type="radio"
                labelText="e-Money"
                onChange={handleChange}
                id="e-money"
                inputProps={{
                  checked: inputs.paymentMethod === "eMoney",
                  value: "eMoney",
                  name: "paymentMethod",
                }}
              />
              <Input
                type="radio"
                labelText="Cash on delivery"
                onChange={handleChange}
                id="cash-on-delivery"
                inputProps={{
                  checked: inputs.paymentMethod === "cashOnDelivery",
                  value: "cashOnDelivery",
                  name: "paymentMethod",
                }}
              />
            </div>
            {inputs.paymentMethod === "cashOnDelivery" && (
              <div className="checkout__form-payment-cash-on-delivery-info">
                <img
                  src={cashOnDeliveryIcon}
                  alt="Minimalistic icon depicting a person paying on delivery."
                />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
            {inputs.paymentMethod === "eMoney" && (
              <div className="checkout__form-payment-e-money-inputs-container">
                <Input
                  id="eMoneyNumber"
                  type="text"
                  isRequired={true}
                  labelText="e-Money number"
                  onChange={handleChange}
                  checks={["tooShort", "tooLong", "valueMissing"]}
                  errorMessage="Input must be 9 numbers."
                  inputProps={{
                    maxLength: 9,
                    minLength: 9,
                    placeholder: "238521993",
                    type: "text",
                    value: inputs.eMoneyNumber || "",
                  }}
                />
                <Input
                  id="eMoneyPin"
                  type="text"
                  isRequired={true}
                  labelText="e-Money pin"
                  onChange={handleChange}
                  checks={["tooShort", "tooLong", "valueMissing"]}
                  errorMessage="Input must be 4 numbers."
                  inputProps={{
                    maxLength: 4,
                    minLength: 4,
                    placeholder: "6891",
                    value: inputs.eMoneyPin || "",
                  }}
                />
              </div>
            )}
          </div>
          <div className="checkout__form-summary-container">
            <h6>Summary</h6>
            <div className="checkout__form-summary-items-container">
              {cartItems.length === 0 && <p>Your cart is empty.</p>}
              {!!cartItems.length &&
                cartItems.map((cartItem) => (
                  <div
                    key={cartItem.product.id}
                    className="checkout__form-summary-item"
                  >
                    <img
                      className="checkout__form-summary-item-image"
                      src={cartItem.product.image.mobile}
                      alt={`Picture of ${cartItem.product.name}`}
                    />
                    <div className="checkout__form-sumamry-item-info">
                      <p className="checkout__form-summary-item-name">
                        {cartItem.product.cartName}
                      </p>
                      <p className="checkout__form-summary-item-price">
                        {usDollar.format(cartItem.product.price)}
                      </p>
                    </div>
                    <p className="checkout__form-summary-item-amount">
                      x{cartItem.amount}
                    </p>
                  </div>
                ))}
            </div>
            <div className="checkout__form-summary-price-container">
              <div className="checkout__form-summary-price-kind">
                <p className="checkout__form-summary-price-kind-name">Total</p>
                <p className="checkout__form-summary-price-kind-amount">
                  {usDollar.format(cartTotalPrice)}
                </p>
              </div>
              <div className="checkout__form-summary-price-kind">
                <p className="checkout__form-summary-price-kind-name">
                  Shipping
                </p>
                <p className="checkout__form-summary-price-kind-amount">
                  {usDollar.format(cartShippingPrice)}
                </p>
              </div>
              <div className="checkout__form-summary-price-kind">
                <p className="checkout__form-summary-price-kind-name">
                  VAT (Included)
                </p>
                <p className="checkout__form-summary-price-kind-amount">
                  {usDollar.format(cartVat)}
                </p>
              </div>
              <div className="checkout__form-summary-price-kind grand-total">
                <p className="checkout__form-summary-price-kind-name grand-total">
                  Grand Total
                </p>
                <p className="checkout__form-summary-price-kind-amount grand-total">
                  {usDollar.format(cartGrandTotal)}
                </p>
              </div>
            </div>
            <Button
              isDisabled={!cartItemsAmount}
              isLink={false}
              type="submit"
              kind="orange"
              buttonText={
                !cartItemsAmount ? "Your cart is empty" : "Continue & Pay"
              }
            />
          </div>
        </form>
      </Main>
      <Footer className="checkout__footer" />
      {isCheckoutModalOpen && (
        <Modal>
          <img
            className="checkout__modal-icon"
            src={checkoutOrderConfirmIcon}
            alt="Icon with a white check mark inside of an orange circle"
          />
          <div className="checkout__modal-header">
            <h3 className="checkout__modal-heading">
              Thank you <br /> for your order
            </h3>
            <p className="checkout__modal-body">
              You will recieve an email confirmation shortly.
            </p>
          </div>
          <div className="checkout__modal-summary">
            <div className="checkout__modal-summary-items">
              {order.current.length > 0 ? (
                <>
                  <div className="checkout__modal-summary-item">
                    <img
                      className="checkout__form-summary-item-image"
                      src={order.current.at(0).product.image.mobile}
                      alt={`Picture of ${order.current.at(0).product.name}`}
                    />
                    <div className="checkout__form-sumamry-item-info">
                      <p className="checkout__form-summary-item-name">
                        {order.current.at(0).product.cartName}
                      </p>
                      <p className="checkout__form-summary-item-price">
                        {usDollar.format(order.current.at(0).product.price)}
                      </p>
                    </div>
                    <p className="checkout__form-summary-item-amount">
                      x{order.current.at(0).amount}
                    </p>
                  </div>
                  {isCheckoutModalShowAll &&
                    order.current.slice(1).map((item) => {
                      return (
                        <div
                          key={item.product.id}
                          className="checkout__modal-summary-item"
                        >
                          <img
                            className="checkout__form-summary-item-image"
                            src={item.product.image.mobile}
                            alt={`Picture of ${item.product.name}`}
                          />
                          <div className="checkout__form-sumamry-item-info">
                            <p className="checkout__form-summary-item-name">
                              {item.product.cartName}
                            </p>
                            <p className="checkout__form-summary-item-price">
                              {usDollar.format(item.product.price)}
                            </p>
                          </div>
                          <p className="checkout__form-summary-item-amount">
                            x{item.amount}
                          </p>
                        </div>
                      );
                    })}
                  {order.current.length > 1 && (
                    <div className="checkout__modal-summary-other-items">
                      <Button
                        onClick={() => setCheckoutModalShowAll((curr) => !curr)}
                        isLink={false}
                        kind="text"
                        buttonText={
                          !isCheckoutModalShowAll
                            ? `and other ${order.current.length - 1} item(s)`
                            : "Show less"
                        }
                      ></Button>
                    </div>
                  )}
                </>
              ) : (
                "Your cart is empty!"
              )}
            </div>
            <div className="checkout__modal-summary-total">
              <p>Grand total</p>
              <h6>
                {orderGrantTotal.current
                  ? usDollar.format(orderGrantTotal.current)
                  : "N/A"}
              </h6>
            </div>
          </div>
          <Button kind="orange" linkTo="/home" buttonText="Back to home" />
        </Modal>
      )}
    </>
  );
};

export default Checkout;
