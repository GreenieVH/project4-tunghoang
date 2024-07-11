import { useState } from "react";
import { useParams } from "react-router";
import images from "~/Assets/images";
import { addCart, useProductList } from "~/Context/api";
import config from "~/Context/config";

function ProductDetail() {
  const { product, error } = useProductList();
  const [addError, setAddError] = useState("");
  let { id } = useParams();

  // Tìm sản phẩm tương ứng với ID từ danh sách sản phẩm
  const currentProduct = product.find((item) => item.id === parseInt(id));

  if (!currentProduct) {
    return <p>Loading...</p>; // Xử lý khi sản phẩm không tồn tại
  }

  const handleAddCart = async (id)=>{
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      alert("Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng!");
      return;
    }
    try {
      const data = await addCart(id);
      alert("Đã thêm vào giỏ hàng!")
      console.log("Đã thêm vào giỏ hàng:", data);
      setAddError("");
    } catch (error) {
      console.error("Error add cart:", error);
      setAddError(error.message);
    }
  }
  return (
    <main className="main">
      <p>{error || addError}</p>
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
        </div>
      </nav>
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
                        src={config.apiBaseUrl + '/' + currentProduct.img}
                        // "assets/images/products/single/1.jpg"
                        alt="product image"
                        style={{height:'600px'}}
                      />
                      <a
                        href="#"
                        id="btn-product-gallery"
                        className="btn-product-gallery"
                      >
                        <i className="icon-arrows" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-details">
                  <h1 className="product-title">
                  {currentProduct.name}
                  </h1>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                    </div>
                    <a
                      className="ratings-text"
                      href="#product-review-link"
                      id="review-link"
                    >
                      ( 2 Reviews )
                    </a>
                  </div>
                  <div className="product-price">${currentProduct.price}</div>
                  <div className="product-content">
                    <p>
                     {currentProduct.describe}
                    </p>
                  </div>

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
                  </div>
                  <div className="product-details-action">
                    <p className="btn-product btn-cart" onClick={()=>handleAddCart(currentProduct.id)}>
                      <span>add to cart</span>
                    </p>
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
                  </div>
                  <div className="product-details-footer">
                    <div className="product-cat">
                      <span>Category:</span>
                      <a href="#">Women</a>,<a href="#">Dresses</a>,
                      <a href="#">Yellow</a>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
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
                          </div>
                        </div>
                        <span className="review-date">6 days ago</span>
                      </div>
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
                      </div>
                    </div>
                  </div>
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
                          </div>
                        </div>
                        <span className="review-date">5 days ago</span>
                      </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
