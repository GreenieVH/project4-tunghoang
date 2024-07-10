import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "~/Assets/images";
import { delCart, updateCart, useCartList } from "~/Context/api";
import config from "~/Context/config";

function Cart() {
  const { cart, error } = useCartList();
  const [cartItems, setCartItems] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState("free-shipping");
  let cartTotal = 0;
  useEffect(() => {
    setCartItems(
      cart.map((item) => ({
        id: item.id,
        count: item.count || 1,
      }))
    );
  }, [cart]);

  const calculateTotalPrice = () => {
    if (!cart || cart.length === 0) {
      return 0;
    }

    const totalPrice = cart.reduce((total, item) => {
      return total + item.priceTotal;
    }, 0);
    return totalPrice;
  };

  const handleChangeCount = (event, productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId
        ? { ...item, count: parseInt(event.target.value) }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleUpdateCart = async (item) => {
    try {
      cartItems.map(async (item) => {
        const data = await updateCart(item.id, item.count);
        alert("Cập nhật thành công!");
      });
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const handleDeleteCart = async (item) => {
    try {
      const data = await delCart(item.id);
      alert("Đã xóa!");
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const handleShippingChange = (event) => {
    setSelectedShipping(event.target.id);
  };

  const calculateTotalPriceWithShipping = () => {
    let shippingCost = 0;
    cartTotal = calculateTotalPrice()
    switch (selectedShipping) {
      case "standart-shipping":
        shippingCost = 1000.0;
        break;
      case "express-shipping":
        shippingCost = 2000.0;
        break;
      default:
        shippingCost = 0.0;
        break;
    }
    return (cartTotal + shippingCost).toFixed(2);
  };
  return (
    <main className="main">
      {error && <p>{error.message}</p>}
      <div
        className="page-header text-center"
        style={{ backgroundImage: `url(${images.page_header_bg})` }}
      >
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
        </div>
        {/* End .container */}
      </div>
      <div className="page-content mt-3">
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td className="product-col">
                          <div className="product">
                            <figure className="product-media">
                              <Link to={`/detail/${item.idProduct}`}>
                                <img
                                  src={
                                    config.apiBaseUrl + "/" + item.imgProduct
                                  }
                                  alt="Product image"
                                />
                              </Link>
                            </figure>
                            <h3 className="product-title">
                              <a href="/">Name pr</a>
                            </h3>
                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className="price-col">${item.priceProduct}</td>
                        <td className="quantity-col">
                          <div className="cart-product-quantity">
                            <input
                              type="number"
                              className="form-control"
                              value={
                                cartItems.find(
                                  (cartItem) => cartItem.id === item.id
                                )?.count ||
                                item.count ||
                                1
                              }
                              min={1}
                              max={20}
                              step={1}
                              onChange={(e) => handleChangeCount(e, item.id)}
                              required=""
                            />
                          </div>
                          {/* End .cart-product-quantity */}
                        </td>
                        <td className="total-col">${item.priceTotal}</td>
                        <td className="remove-col">
                          <button
                            className="btn-remove"
                            onClick={() => handleDeleteCart(item)}
                          >
                            <i className="icon-close" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* End .table table-wishlist */}
                <div className="cart-bottom">
                  <div className="cart-discount">
                    <form action="#">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          required=""
                          placeholder="coupon code"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-primary-2"
                            type="submit"
                          >
                            <i className="icon-long-arrow-right" />
                          </button>
                        </div>
                        {/* .End .input-group-append */}
                      </div>
                      {/* End .input-group */}
                    </form>
                  </div>
                  {/* End .cart-discount */}
                  <a
                    className="btn btn-outline-dark-2"
                    onClick={handleUpdateCart}
                  >
                    <span>UPDATE CART</span>
                    <i className="icon-refresh" />
                  </a>
                </div>
                {/* End .cart-bottom */}
              </div>
              {/* End .col-lg-9 */}
              <aside className="col-lg-3">
                <div className="summary summary-cart">
                  <h3 className="summary-title">Cart Total</h3>
                  {/* End .summary-title */}
                  <table className="table table-summary">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>${calculateTotalPrice()}</td>
                      </tr>
                      {/* End .summary-subtotal */}
                      <tr className="summary-shipping">
                        <td>Shipping:</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="free-shipping"
                              name="shipping"
                              className="custom-control-input"
                              checked={selectedShipping === "free-shipping"}
                              onChange={handleShippingChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="free-shipping"
                            >
                              Free Shipping
                            </label>
                          </div>
                          {/* End .custom-control */}
                        </td>
                        <td>$0.00</td>
                      </tr>
                      {/* End .summary-shipping-row */}
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="standart-shipping"
                              name="shipping"
                              className="custom-control-input"
                              checked={selectedShipping === "standart-shipping"}
                              onChange={handleShippingChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="standart-shipping"
                            >
                              Standart:
                            </label>
                          </div>
                          {/* End .custom-control */}
                        </td>
                        <td>$1000.00</td>
                      </tr>
                      {/* End .summary-shipping-row */}
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="express-shipping"
                              name="shipping"
                              className="custom-control-input"
                              checked={selectedShipping === "express-shipping"}
                              onChange={handleShippingChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="express-shipping"
                            >
                              Express:
                            </label>
                          </div>
                          {/* End .custom-control */}
                        </td>
                        <td>$2000.00</td>
                      </tr>
                      {/* End .summary-shipping-row */}
                      <tr className="summary-shipping-estimate">
                        <td>
                          Estimate for Your Country
                          <br /> <a href="dashboard.html">Change address</a>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      {/* End .summary-shipping-estimate */}
                      <tr className="summary-total">
                        <td>Total:</td>
                        <td>${calculateTotalPriceWithShipping()}</td>
                      </tr>
                      {/* End .summary-total */}
                    </tbody>
                  </table>
                  {/* End .table table-summary */}
                  <a
                    href="checkout.html"
                    className="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    PROCEED TO CHECKOUT
                  </a>
                </div>
                {/* End .summary */}
                <p className="btn btn-outline-dark-2 btn-block mb-3">
                  <Link to="/product">
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh" />
                  </Link>
                </p>
              </aside>
              {/* End .col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .cart */}
      </div>
      {/* End .page-content */}
    </main>
  );
}

export default Cart;
