import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "~/Assets/images";
import Search from "../Search";
import "./style.css";
import {
  useFetchBrands,
  useFetchCategory,
  useProductList,
} from "~/Context/api";
import config from "~/Context/config";

function Product() {
  const { categories, error: errorCategory } = useFetchCategory();
  const { product, error: errorProduct } = useProductList();
  const { brands, error: errorBrand } = useFetchBrands();
  const [filteredBrand, setFilteredBrand] = useState(null);

  const renderCategories = (categories, level = 1) => {
    return categories.map((category) => (
      <CategoryItem key={category.id} category={category} level={level} />
    ));
  };
  const CategoryItem = ({ category, level }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={`filter-item level-${level}`}>
        <div className="custom-control custom-dropdown" onClick={toggleOpen}>
          <Link to="" className="custom-control-label">
            {category.name}
          </Link>
          {category.subCategories.length > 0 && (
            <span className="dropdown-icon">
              {isOpen ? (
                <i class="bi bi-caret-up-fill"></i>
              ) : (
                <i class="bi bi-caret-down-fill"></i>
              )}
            </span>
          )}
        </div>
        {isOpen && category.subCategories.length > 0 && (
          <div className="sub-categories">
            {renderCategories(category.subCategories, level + 1)}
          </div>
        )}
      </div>
    );
  };

  const filterByBrand = (brandId) => {
    console.log(brandId)
    setFilteredBrand(brandId === filteredBrand ? null : brandId); // Áp dụng bộ lọc hoặc đảo ngược nếu đã áp dụng
  };
  const filteredProducts = filteredBrand
    ? product.filter((product) => product.brandId === filteredBrand)
    : product;

  // if (errorCategory || errorProduct || errorBrand) {
  //   return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  // }
  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: `url(${images.page_header_bg})` }}
        >
          <div className="container">
            <h1 className="page-title">Shopping</h1>
          </div>
          {/* End .container */}
        </div>
        {/* End .page-header */}

        <div className="page-content mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="toolbox">
                  <Search />
                  <div className="toolbox-right">
                    <div className="toolbox-sort">
                      <label htmlFor="sortby">Sort by:</label>
                      <div className="select-custom">
                        <select
                          name="sortby"
                          id="sortby"
                          className="form-control"
                          defaultValue="popularity"
                        >
                          <option value="popularity">Most Popular</option>
                          <option value="rating">Most Rated</option>
                          <option value="date">Date</option>
                        </select>
                      </div>
                    </div>
                    {/* End .toolbox-sort */}
                    <div className="toolbox-layout">
                      <a href="category-list.html" className="btn-layout">
                        <svg width={16} height={10}>
                          <rect x={0} y={0} width={4} height={4} />
                          <rect x={6} y={0} width={10} height={4} />
                          <rect x={0} y={6} width={4} height={4} />
                          <rect x={6} y={6} width={10} height={4} />
                        </svg>
                      </a>
                      <a href="category-2cols.html" className="btn-layout">
                        <svg width={10} height={10}>
                          <rect x={0} y={0} width={4} height={4} />
                          <rect x={6} y={0} width={4} height={4} />
                          <rect x={0} y={6} width={4} height={4} />
                          <rect x={6} y={6} width={4} height={4} />
                        </svg>
                      </a>
                      <a href="category.html" className="btn-layout active">
                        <svg width={16} height={10}>
                          <rect x={0} y={0} width={4} height={4} />
                          <rect x={6} y={0} width={4} height={4} />
                          <rect x={12} y={0} width={4} height={4} />
                          <rect x={0} y={6} width={4} height={4} />
                          <rect x={6} y={6} width={4} height={4} />
                          <rect x={12} y={6} width={4} height={4} />
                        </svg>
                      </a>
                      <a href="category-4cols.html" className="btn-layout">
                        <svg width={22} height={10}>
                          <rect x={0} y={0} width={4} height={4} />
                          <rect x={6} y={0} width={4} height={4} />
                          <rect x={12} y={0} width={4} height={4} />
                          <rect x={18} y={0} width={4} height={4} />
                          <rect x={0} y={6} width={4} height={4} />
                          <rect x={6} y={6} width={4} height={4} />
                          <rect x={12} y={6} width={4} height={4} />
                          <rect x={18} y={6} width={4} height={4} />
                        </svg>
                      </a>
                    </div>
                    {/* End .toolbox-layout */}
                  </div>
                  {/* End .toolbox-right */}
                </div>
                {/* End .toolbox */}
                <div className="products mb-3">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="product product-7 text-center">
                        <figure className="product-media">
                          <span className="product-label label-out">
                            Out of Stock
                          </span>
                          <a href="product.html">
                            <img
                              src={images.product_6}
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a href="#" className="btn-product btn-cart">
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Jackets</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Khaki utility boiler jumpsuit
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="out-price">$120.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 6 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                    {filteredProducts.map((item) => (
                      <div className="col-6 col-md-4 col-lg-4" key={item.id}>
                        <div className="product product-7 text-center">
                          <figure className="product-media">
                            {item.stock === 0 && (
                              <span className="product-label label-out">
                                Out of Stock
                              </span>
                            )}
                            <a href="product.html">
                              <img
                                src={`${config.apiBaseUrl + "/"}${item.img}`}
                                alt="Product image"
                                className="product-image"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                              <a
                                href="popup/quickView.html"
                                className="btn-product-icon btn-quickview"
                                title="Quick view"
                              >
                                <span>Quick view</span>
                              </a>
                              <a
                                href="#"
                                className="btn-product-icon btn-compare"
                                title="Compare"
                              >
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="product-action">
                              <a href="#" className="btn-product btn-cart">
                                <span>add to cart</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <a href="#">Jackets</a>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">{item.name}</a>
                            </h3>
                            <div className="product-price">
                              <span className="out-price">${item.price}</span>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  // style={{ width: `${item.rating}%` }}
                                />
                              </div>
                              <span className="ratings-text">
                                {/* ( {item.reviews} Reviews ) */}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .products */}
                <div className="more-container text-center">
                  <a href="#" className="btn btn-outline-darker btn-more">
                    <span>Load more products</span>
                    <i className="icon-long-arrow-down" />
                  </a>
                </div>
              </div>
              {/* End .col-lg-9 */}
              <aside className="col-lg-3 order-lg-first">
                <div className="sidebar sidebar-shop pd-sb">
                  <div className="widget widget-clean">
                    <label>Filters:</label>
                    <Link to="/product" className="sidebar-filter-clear">
                      Clean All
                    </Link>
                  </div>
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <Link
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-1"
                      >
                        Category
                      </Link>
                    </h3>
                    <div className="collapse show" id="widget-1">
                      <div className="widget-body">
                        <div className="filter-items filter-items-count">
                          {renderCategories(categories)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .widget */}
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-2"
                      >
                        Size
                      </a>
                    </h3>
                    {/* End .widget-title */}
                    <div className="collapse show" id="widget-2">
                      <div className="widget-body">
                        <div className="filter-items">
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="size-1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="size-1"
                              >
                                XS
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="size-2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="size-2"
                              >
                                S
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                defaultChecked=""
                                id="size-3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="size-3"
                              >
                                M
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                defaultChecked=""
                                id="size-4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="size-4"
                              >
                                L
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="size-5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="size-5"
                              >
                                XL
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="size-6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="size-6"
                              >
                                XXL
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}
                        </div>
                        {/* End .filter-items */}
                      </div>
                      {/* End .widget-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                  {/* End .widget */}
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-4"
                      >
                        Brand
                      </a>
                    </h3>
                    {/* End .widget-title */}
                    <div className="collapse show" id="widget-4">
                      <div className="widget-body">
                        <div className="filter-items">
                          {brands.map((item) => (
                            <div className="filter-item" key={item.id}>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={`brand-${item.id}`}
                                  checked={filteredBrand === item.id }
                                  onChange={() => filterByBrand(item.id)}
                                  />
                                <label
                                  className="custom-control-label"
                                  htmlFor={`brand-${item.id}`}
                                >
                                  {item.name}
                                </label>
                              </div>
                            </div>
                          ))}
                          {/* End .filter-item */}
                        </div>
                        {/* End .filter-items */}
                      </div>
                      {/* End .widget-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .sidebar sidebar-shop */}
              </aside>
              {/* End .col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .page-content */}
      </main>
      {/* End .main */}
    </>
  );
}

export default Product;
