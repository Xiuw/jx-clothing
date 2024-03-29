import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems, selectTotal } from "../../redux/cart/cartSelector";
import CartCheckout from "../../components/cart-checkout/CartCheckout";
import StripePaymentButton from "../../components/stripe-payment/StripePaymentButton";
import "./CheckoutPage.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout">
    <div className="header">
      <div className="header-description">
        <span>Product</span>
      </div>
      <div className="header-description">
        <span>Description</span>
      </div>
      <div className="header-description">
        <span>Quantity</span>
      </div>
      <div className="header-description">
        <span>Price</span>
      </div>
      <div className="header-description">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CartCheckout key={item.id} cartItem={item} />
    ))}
    <div className="total">TOTAL: $ {total} </div>
    <div className="test-message">
      <p>*Please use the following test credit card for payment testing</p>
      <p>
        2223 0031 2200 3222 <b> EXP - </b> future date <b> CVV - </b>123
      </p>
    </div>
    <StripePaymentButton price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectItems,
  total: selectTotal
});
export default connect(mapStateToProps)(CheckoutPage);
