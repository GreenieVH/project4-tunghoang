import { useState } from "react";
import images from "~/Assets/images";

function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("#");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center">
          <nav className="product-pager ml-auto" aria-label="Product">
            <a
              className="product-pager-link product-pager-prev"
              href="#"
              aria-label="Previous"
              tabIndex={-1}
            >
              <i className="icon-angle-left" />
              <span>Prev</span>
            </a>
            <a
              className="product-pager-link product-pager-next"
              href="#"
              aria-label="Next"
              tabIndex={-1}
            >
              <span>Next</span>
              <i className="icon-angle-right" />
            </a>
          </nav>
          {/* End .pager-nav */}
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container">
          <div className="product-details-top">
            <div className="row">
              <div className="col-md-6">
                <div className="product-gallery product-gallery-vertical">
                  <div className="row">
                    <figure className="product-main-image dtimg">
                      <img
                        id="product-zoom"
                        src={images.product_1_1}
                        // "assets/images/products/single/1.jpg"
                        alt="product image"
                      />
                      <a
                        href="#"
                        id="btn-product-gallery"
                        className="btn-product-gallery"
                      >
                        <i className="icon-arrows" />
                      </a>
                    </figure>
                    {/* End .product-main-image */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .product-gallery */}
              </div>
              {/* End .col-md-6 */}
              <div className="col-md-6">
                <div className="product-details">
                  <h1 className="product-title">
                    Dark yellow lace cut out swing dress
                  </h1>
                  {/* End .product-title */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <a
                      className="ratings-text"
                      href="#product-review-link"
                      id="review-link"
                    >
                      ( 2 Reviews )
                    </a>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-price">$84.00</div>
                  {/* End .product-price */}
                  <div className="product-content">
                    <p>
                      Sed egestas, ante et vulputate volutpat, eros pede semper
                      est, vitae luctus metus libero eu augue. Morbi purus
                      libero, faucibus adipiscing. Sed lectus.{" "}
                    </p>
                  </div>
                  {/* End .product-content */}

                  <div className="details-filter-row details-row-size">
                    <label htmlFor="size">Size:</label>
                    <div className="select-custom">
                      <select
                        name="size"
                        id="size"
                        className="form-control"
                        value={selectedSize}
                        onChange={handleSizeChange}
                      >
                        <option value="#">Select a size</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                      </select>
                    </div>
                    {/* End .select-custom */}
                    <a href="#" className="size-guide">
                      <i className="icon-th-list" />
                      size guide
                    </a>
                  </div>
                  {/* End .details-filter-row */}
                  <div className="details-filter-row details-row-size">
                    <label htmlFor="qty">Qty:</label>
                    <div className="product-details-quantity">
                      <input
                        type="number"
                        id="qty"
                        className="form-control"
                        defaultValue={1}
                        min={1}
                        max={10}
                        step={1}
                        data-decimals={0}
                        required=""
                      />
                    </div>
                    {/* End .product-details-quantity */}
                  </div>
                  {/* End .details-filter-row */}
                  <div className="product-details-action">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                    <div className="details-action-wrapper">
                      <a
                        href="#"
                        className="btn-product btn-wishlist"
                        title="Wishlist"
                      >
                        <span>Add to Wishlist</span>
                      </a>
                      <a
                        href="#"
                        className="btn-product btn-compare"
                        title="Compare"
                      >
                        <span>Add to Compare</span>
                      </a>
                    </div>
                    {/* End .details-action-wrapper */}
                  </div>
                  {/* End .product-details-action */}
                  <div className="product-details-footer">
                    <div className="product-cat">
                      <span>Category:</span>
                      <a href="#">Women</a>,<a href="#">Dresses</a>,
                      <a href="#">Yellow</a>
                    </div>
                    {/* End .product-cat */}
                    <div className="social-icons social-icons-sm">
                      <span className="social-label">Share:</span>
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
                        title="Pinterest"
                        target="_blank"
                      >
                        <i className="icon-pinterest" />
                      </a>
                    </div>
                  </div>
                  {/* End .product-details-footer */}
                </div>
                {/* End .product-details */}
              </div>
              {/* End .col-md-6 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .product-details-top */}
          <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="product-review-link"
                  data-toggle="tab"
                  href="#product-review-tab"
                  role="tab"
                  aria-controls="product-review-tab"
                  aria-selected="false"
                >
                  Reviews (2)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-review-tab"
                role="tabpanel"
                aria-labelledby="product-review-link"
              >
                <div className="reviews">
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">Samanta J.</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                        </div>
                        {/* End .rating-container */}
                        <span className="review-date">6 days ago</span>
                      </div>
                      {/* End .col */}
                      <div className="col">
                        <h4>Good, perfect size</h4>
                        <div className="review-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus cum dolores assumenda asperiores
                            facilis porro reprehenderit animi culpa atque
                            blanditiis commodi perspiciatis doloremque,
                            possimus, explicabo, autem fugit beatae quae
                            voluptas!
                          </p>
                        </div>
                        {/* End .review-content */}
                        <div className="review-action">
                          <a href="#">
                            <i className="icon-thumbs-up" />
                            Helpful (2)
                          </a>
                          <a href="#">
                            <i className="icon-thumbs-down" />
                            Unhelpful (0)
                          </a>
                        </div>
                        {/* End .review-action */}
                      </div>
                      {/* End .col-auto */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .review */}
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">John Doe</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                        </div>
                        {/* End .rating-container */}
                        <span className="review-date">5 days ago</span>
                      </div>
                      {/* End .col */}
                      <div className="col">
                        <h4>Very good</h4>
                        <div className="review-content">
                          <p>
                            Sed, molestias, tempore? Ex dolor esse iure hic
                            veniam laborum blanditiis laudantium iste amet. Cum
                            non voluptate eos enim, ab cumque nam, modi, quas
                            iure illum repellendus, blanditiis perspiciatis
                            beatae!
                          </p>
                        </div>
                        {/* End .review-content */}
                        <div className="review-action">
                          <a href="#">
                            <i className="icon-thumbs-up" />
                            Helpful (0)
                          </a>
                          <a href="#">
                            <i className="icon-thumbs-down" />
                            Unhelpful (0)
                          </a>
                        </div>
                        {/* End .review-action */}
                      </div>
                      {/* End .col-auto */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .review */}
                </div>
                {/* End .reviews */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
