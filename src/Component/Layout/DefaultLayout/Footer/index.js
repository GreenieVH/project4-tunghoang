import images from "~/Assets/images";

function Footer() {
  return (
    <>
      <footer className="footer footer-dark">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="widget widget-about">
                  <img
                    src={images.logo_footer}
                    className="footer-logo"
                    alt="Footer Logo"
                    width={105}
                    height={25}
                  />
                  <p>
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat.{" "}
                  </p>
                  <div className="social-icons">
                    <a
                      href="#"
                      className="social-icon"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter" />
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram" />
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      title="Youtube"
                      target="_blank"
                    >
                      <i className="icon-youtube" />
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      title="Pinterest"
                      target="_blank"
                    >
                      <i className="icon-pinterest" />
                    </a>
                  </div>
                  {/* End .soial-icons */}
                </div>
                {/* End .widget about-widget */}
              </div>
              {/* End .col-sm-6 col-lg-3 */}
              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">Useful Links</h4>
                  {/* End .widget-title */}
                  <ul className="widget-list">
                    <li>
                      <a href="about.html">About Molla</a>
                    </li>
                    <li>
                      <a href="#">How to shop on Molla</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="login.html">Log in</a>
                    </li>
                  </ul>
                  {/* End .widget-list */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .col-sm-6 col-lg-3 */}
              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>
                  {/* End .widget-title */}
                  <ul className="widget-list">
                    <li>
                      <a href="#">Payment Methods</a>
                    </li>
                    <li>
                      <a href="#">Money-back guarantee!</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                  {/* End .widget-list */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .col-sm-6 col-lg-3 */}
              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  {/* End .widget-title */}
                  <ul className="widget-list">
                    <li>
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="cart.html">View Cart</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                  {/* End .widget-list */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .col-sm-6 col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-middle */}
        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copyright">
              Copyright © 2019 Molla Store. All Rights Reserved.
            </p>
            {/* End .footer-copyright */}
            <figure className="footer-payments">
              <img
                src={images.payments}
                alt="Payment methods"
                width={272}
                height={20}
              />
            </figure>
            {/* End .footer-payments */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-bottom */}
      </footer>
      {/* End .footer */}
    </>
  );
}

export default Footer;
