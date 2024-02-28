import {Component} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          let totalPrice = 0
          cartList.map(
            eachItem => (totalPrice += eachItem.quantity * eachItem.price),
          )

          return (
            <>
              <div className="cart-summary-container">
                <h1 className="total-heading">
                  Order Total:
                  <span className="total-price">RS {totalPrice}/-</span>
                </h1>
                <p className="total-description">
                  {cartList.length} items in cart
                </p>
              </div>
              <div className="button-container">
                <button type="button" className="Checkout-button">
                  Checkout
                </button>
              </div>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
