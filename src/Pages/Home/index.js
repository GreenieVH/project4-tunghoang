// import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useProductList } from "~/Context/api";
import images from "~/Assets/images";
import config from "~/Context/config";
function Home() {
  const { product, error: errorProduct } = useProductList();

  // if (errorProduct) {
  //   return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  // }
  return (
    <>
      <main className="main">
        <div className="intro-section bg-lighter pt-5 pb-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0">
                  <div
                    className="intro-slider intro-slider-1 owl-carousel owl-simple owl-light owl-nav-inside"
                    data-toggle="owl"
                    data-owl-options='{
              "nav": false,
              "responsive": {
                "768": {
                  "nav": true
                }
              }
            }'
                  >
                    <div className="intro-slide">
                      <figure className="slide-image">
                        <img src={images.slide1} alt="Image Description" />
                      </figure>
                      <div className="intro-content">
                        <h3 className="intro-subtitle">Topsale Collection</h3>
                        <h1 className="intro-title">
                          Living Room
                          <br />
                          Furniture
                        </h1>
                        <a
                          href="category.html"
                          className="btn btn-outline-white"
                        >
                          <span>SHOP NOW</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>

                    <div className="intro-slide">
                      <figure className="slide-image">
                        <img src={images.slide2} alt="Image Description" />
                      </figure>
                      <div className="intro-content">
                        <h3 className="intro-subtitle">News and Inspiration</h3>
                        <h1 className="intro-title">New Arrivals</h1>
                        <a
                          href="category.html"
                          className="btn btn-outline-white"
                        >
                          <span>SHOP NOW</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>

                    <div className="intro-slide">
                      <figure className="slide-image">
                        <img src={images.slide3} alt="Image Description" />
                      </figure>
                      <div className="intro-content">
                        <h3 className="intro-subtitle">Outdoor Furniture</h3>
                        <h1 className="intro-title">
                          Outdoor Dining <br />
                          Furniture
                        </h1>
                        <a
                          href="category.html"
                          className="btn btn-outline-white"
                        >
                          <span>SHOP NOW</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="slider-loader" />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="intro-banners">
                  <div className="row row-sm">
                    <div className="col-md-6 col-lg-12">
                      <div className="banner banner-display">
                        <Link to="/product">
                          <img src={images.banner1} alt="Banner" />
                        </Link>
                        <div className="banner-content">
                          <h4 className="banner-subtitle text-darkwhite">
                            <Link to="/product">Clearance</Link>
                          </h4>
                          <h3 className="banner-title text-white">
                            <Link to="/product">
                              Chairs &amp; Chaises <br />
                              Up to 40% off
                            </Link>
                          </h3>
                          <Link
                            to="/product"
                            className="btn btn-outline-white banner-link"
                          >
                            Shop Now
                            <i className="icon-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-12">
                      <div className="banner banner-display mb-0">
                        <Link to="/product">
                          <img src={images.banner2} alt="Banner" />
                        </Link>
                        <div className="banner-content">
                          <h4 className="banner-subtitle text-darkwhite">
                            <Link to="/product">New In</Link>
                          </h4>
                          <h3 className="banner-title text-white">
                            <Link to="/product">
                              Best Lighting <br />
                              Collection
                            </Link>
                          </h3>
                          <Link
                            to="/product"
                            className="btn btn-outline-white banner-link"
                          >
                            Discover Now
                            <i className="icon-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6" />

            <div
              className="owl-carousel owl-simple"
              data-toggle="owl"
              data-owl-options='{
        "nav": false,
        "dots": false,
        "margin": 30,
        "loop": false,
        "responsive": {
          "0": {
            "items": 2
          },
          "420": {
            "items": 3
          },
          "600": {
            "items": 4
          },
          "900": {
            "items": 5
          },
          "1024": {
            "items": 6
          }
        }
      }'
            >
              <a href="#" className="brand">
                <img src={images.brand1} alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src={images.brand2} alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src={images.brand3} alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src={images.brand4} alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src={images.brand5} alt="Brand Name" />
              </a>
              <a href="#" className="brand">
                <img src={images.brand6} alt="Brand Name" />
              </a>
            </div>
          </div>
        </div>
        {/* End .bg-lighter */}
        <div className="mb-6" />
        <div className="container categories pt-6">
          <h2 className="title-lg text-center mb-4">Shop by Categories</h2>
          {/* End .title-lg text-center */}
          <div className="row">
            <div className="col-6 col-lg-4">
              <div className="banner banner-display banner-link-anim">
                <Link to="/product">
                  <img src={images.banner_1} alt="Banner" />
                </Link>
                <div className="banner-content banner-content-center">
                  <h3 className="banner-title text-white">
                    <Link to="/product">Outdoor</Link>
                  </h3>
                  {/* End .banner-title */}
                  <Link
                    to="/product"
                    className="btn btn-outline-white banner-link"
                  >
                    Shop Now
                    <i className="icon-long-arrow-right" />
                  </Link>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-6 col-lg-4 order-lg-last">
              <div className="banner banner-display banner-link-anim">
                <Link to="/product">
                  <img src={images.banner_4} alt="Banner" />
                </Link>
                <div className="banner-content banner-content-center">
                  <h3 className="banner-title text-white">
                    <Link to="/product">Lighting</Link>
                  </h3>
                  {/* End .banner-title */}
                  <Link
                    to="/product"
                    className="btn btn-outline-white banner-link"
                  >
                    Shop Now
                    <i className="icon-long-arrow-right" />
                  </Link>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-12 col-lg-4 banners-sm">
              <div className="row">
                <div className="banner banner-display banner-link-anim col-lg-12 col-6">
                  <Link to="/product">
                    <img src={images.banner_2} alt="Banner" />
                  </Link>
                  <div className="banner-content banner-content-center">
                    <h3 className="banner-title text-white">
                      <Link to="/product">Furniture and Design</Link>
                    </h3>
                    {/* End .banner-title */}
                    <Link
                      to="/product"
                      className="btn btn-outline-white banner-link"
                    >
                      Shop Now
                      <i className="icon-long-arrow-right" />
                    </Link>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}
                <div className="banner banner-display banner-link-anim col-lg-12 col-6">
                  <Link to="/product">
                    <img src={images.banner_3} alt="Banner" />
                  </Link>
                  <div className="banner-content banner-content-center">
                    <h3 className="banner-title text-white">
                      <Link to="/product">Kitchen &amp; Utensil</Link>
                    </h3>
                    {/* End .banner-title */}
                    <Link
                      to="/product"
                      className="btn btn-outline-white banner-link"
                    >
                      Shop Now
                      <i className="icon-long-arrow-right" />
                    </Link>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}
              </div>
            </div>
            {/* End .col-sm-6 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="mb-5" />
        {/* End .mb-6 */}
        <div className="container">
          <div className="heading heading-center mb-6">
            <h2 className="title">Recent Arrivals</h2>
            {/* End .title */}
            <ul
              className="nav nav-pills nav-border-anim justify-content-center"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="top-all-link"
                  data-toggle="tab"
                  href="#top-all-tab"
                  role="tab"
                  aria-controls="top-all-tab"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="top-fur-link"
                  data-toggle="tab"
                  href="#top-fur-tab"
                  role="tab"
                  aria-controls="top-fur-tab"
                  aria-selected="false"
                >
                  Furniture
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="top-decor-link"
                  data-toggle="tab"
                  href="#top-decor-tab"
                  role="tab"
                  aria-controls="top-decor-tab"
                  aria-selected="false"
                >
                  Decor
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="top-light-link"
                  data-toggle="tab"
                  href="#top-light-tab"
                  role="tab"
                  aria-controls="top-light-tab"
                  aria-selected="false"
                >
                  Lighting
                </a>
              </li>
            </ul>
          </div>
          {/* End .heading */}
          <div className="tab-content">
            <div
              className="tab-pane p-0 fade show active"
              id="top-all-tab"
              role="tabpanel"
              aria-labelledby="top-all-link"
            >
              <div className="products">
                <div className="row justify-content-center" >
                  {product.slice(0,4).map((item) => (
                    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                      <div className="product product-11 mt-v3 text-center">
                        <figure className="product-media">
                          <a href="product.html">
                            <img
                              src={`${config.apiBaseUrl + '/'}${item.img}`} 
                              alt="Product image"
                              className="product-image"
                            />
                            {/* <img
                              src={images.product_6}
                              alt="Product image"
                              className="product-image-hover"
                            /> */}
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist "
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>
                        </figure>
                        <div className="product-body">
                          <h3 className="product-title">
                            <a href="product.html">{item.name}</a>
                          </h3>
                          <div className="product-price">${item.price}</div>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="more-container text-center">
            <a  className="btn btn-outline-darker btn-more">
              <span>Load more products</span>
              <i className="icon-long-arrow-down" />
            </a>
          </div>
          {/* End .more-container */}
        </div>
        {/* End .container */}
        <div className="container">
          <hr />
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="icon-box icon-box-card text-center">
                <span className="icon-box-icon">
                  <i className="icon-rocket" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Payment &amp; Delivery</h3>
                  {/* End .icon-box-title */}
                  <p>Free shipping for orders over $50</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-lg-4 col-sm-6 */}
            <div className="col-lg-4 col-sm-6">
              <div className="icon-box icon-box-card text-center">
                <span className="icon-box-icon">
                  <i className="icon-rotate-left" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Return &amp; Refund</h3>
                  {/* End .icon-box-title */}
                  <p>Free 100% money back guarantee</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-lg-4 col-sm-6 */}
            <div className="col-lg-4 col-sm-6">
              <div className="icon-box icon-box-card text-center">
                <span className="icon-box-icon">
                  <i className="icon-life-ring" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Quality Support</h3>
                  {/* End .icon-box-title */}
                  <p>Alway online feedback 24/7</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-lg-4 col-sm-6 */}
          </div>
          {/* End .row */}
          <div className="mb-2" />
          {/* End .mb-2 */}
        </div>
        {/* End .container */}
        <div
          className="blog-posts pt-7 pb-7"
          style={{ backgroundColor: "#fafafa" }}
        >
          <div className="container">
            <h2 className="title-lg text-center mb-3 mb-md-4">From Our Blog</h2>
            {/* <div
              className="owl-carousel owl-simple carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                      "nav": false, 
                      "dots": true,
                      "items": 3,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":1
                          },
                          "600": {
                              "items":2
                          },
                          "992": {
                              "items":3
                          }
                      }
                  }'
            >
              <article className="entry entry-display">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/home/post-1.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>
                <div className="entry-body pb-4 text-center">
                  <div className="entry-meta">
                    <a href="#">Nov 22, 2018</a>, 0 Comments
                  </div>
                  <h3 className="entry-title">
                    <a href="single.html">Sed adipiscing ornare.</a>
                  </h3>
                  <div className="entry-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit.
                      <br />
                      Pelletesque aliquet nibh necurna.{" "}
                    </p>
                    <a href="single.html" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </article>
              <article className="entry entry-display">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/home/post-2.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>
                <div className="entry-body pb-4 text-center">
                  <div className="entry-meta">
                    <a href="#">Dec 12, 2018</a>, 0 Comments
                  </div>
                  <h3 className="entry-title">
                    <a href="single.html">Fusce lacinia arcuet nulla.</a>
                  </h3>
                  <div className="entry-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet
                      <br />
                      viverra, tortor libero sodales leo, eget blandit nunc
                      tortor eu nibh. Nullam mollis justo.{" "}
                    </p>
                    <a href="single.html" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </article>
              <article className="entry entry-display">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/home/post-3.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>
                <div className="entry-body pb-4 text-center">
                  <div className="entry-meta">
                    <a href="#">Dec 19, 2018</a>, 2 Comments
                  </div>
                  <h3 className="entry-title">
                    <a href="single.html">Quisque volutpat mattis eros.</a>
                  </h3>
                  <div className="entry-content">
                    <p>
                      Suspendisse potenti. Sed egestas, ante et vulputate
                      volutpat, eros pede semper est, vitae luctus metus libero
                      eu augue.{" "}
                    </p>
                    <a href="single.html" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div> */}
          </div>
          <div className="more-container text-center mb-0 mt-3">
            <a href="" className="btn btn-outline-darker btn-more">
              <span>View more articles</span>
              <i className="icon-long-arrow-right" />
            </a>
          </div>
        </div>
        <div
          className="cta cta-display bg-image pt-4 pb-4"
          style={{
            backgroundImage: `url(${images.bg_6})`,
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9 col-xl-8">
                <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                  <div className="col">
                    <h3 className="cta-title text-white">
                      Sign Up &amp; Get 10% Off
                    </h3>
                    <p className="cta-desc text-white">
                      Molla presents the best in interior design
                    </p>
                  </div>
                  <div className="col-auto">
                    <Link to="/login/signup" className="btn btn-outline-white">
                      <span>SIGN UP</span>
                      <i className="icon-long-arrow-right" />
                    </Link>
                  </div>
                  {/* End .col-auto */}
                </div>
                {/* End .row no-gutters */}
              </div>
              {/* End .col-md-10 col-lg-9 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .cta */}
      </main>
      {/* End .main */}
    </>
  );
}

export default Home;
