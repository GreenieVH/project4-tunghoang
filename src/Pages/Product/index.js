import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import images from "~/Assets/images";
import Search from "../Search";
import "./style.css";
import {
  addCart,
  useCartList,
  useFetchBrands,
  useFetchCategory,
  useProductList,
} from "~/Context/api";
import config from "~/Context/config";
import { UserContext } from "~/Context/userContext";

function Product() {
  const { categories, error: errorCategory } = useFetchCategory();
  const { product, error: errorProduct } = useProductList();
  const { brands, error: errorBrand } = useFetchBrands();
  const { fetchCart } = useCartList();
  const [filteredBrand, setFilteredBrand] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [addError, setAddError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { setUser } = useContext(UserContext);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const renderCategories = (categories, level = 1) => {
    return categories
      .filter((item) => item.isActive)
      .map((category) => (
        <CategoryItem key={category.id} category={category} level={level} />
      ));
  };

  const BrandName = ({ idB }) => {
    const brand = brands.find((brand) => brand.id === idB);
    return (
      <p>{brand ? brand.name : 'Brand not found'}</p>
    );
  };

  const CategoryItem = ({ category, level }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={`filter-item level-${level}`}>
        <div className="custom-control custom-dropdown" onClick={toggleOpen}>
          <p
            className="custom-control-label"
            onClick={() => filterByCategory(category.id)}
          >
            {category.name}
          </p>
          {category.subCategories.length > 0 && (
            <span className="dropdown-icon">
              {isOpen ? (
                <i className="bi bi-caret-up-fill"></i>
              ) : (
                <i className="bi bi-caret-down-fill"></i>
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
    setFilteredBrand(brandId === filteredBrand ? null : brandId);
  };

  const getAllCategoryIds = (categoryId, categories) => {
    const result = [];
    const stack = [categoryId];

    while (stack.length) {
      const currentId = stack.pop();
      result.push(currentId);

      const currentCategory = categories.find((cat) => cat.id === currentId);
      if (currentCategory && currentCategory.subCategories) {
        stack.push(...currentCategory.subCategories.map((subCat) => subCat.id));
      }
    }

    return result;
  };

  const filterByCategory = (categoryId) => {
    setFilteredCategory(categoryId === filteredCategory ? null : categoryId);
  };

  const clearFilters = () => {
    setFilteredBrand(null);
    setFilteredCategory(null);
  };

  const filteredProducts = product.filter((item) => {
    const categoryIds = filteredCategory
      ? getAllCategoryIds(filteredCategory, categories)
      : [];
    const brandCondition = !filteredBrand || item.idBrand === filteredBrand;
    const categoryCondition =
      !filteredCategory || categoryIds.includes(item.idCategory);
    const searchCondition =
      searchTerm === "" ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return (
      item.isActive && brandCondition && categoryCondition && searchCondition
    );
  });

  const handleAddCart = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng!");
      return;
    }

    try {
      const data = await addCart(id);
      alert("Đã thêm vào giỏ hàng!");
      console.log("Đã thêm vào giỏ hàng:", data);
      await fetchCart(); 
      setAddError("");
    } catch (error) {
      console.error("Error add cart:", error);
      setAddError(error.message);
    }
  };

  return (
    <>
      <main className="main">
        <p>{errorCategory || errorProduct || errorBrand || addError}</p>
        <div
          className="page-header text-center"
          style={{ backgroundImage: `url(${images.page_header_bg})` }}
        >
          <div className="container">
            <h1 className="page-title">Shopping</h1>
          </div>
        </div>

        <div className="page-content mt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="toolbox">
                  <Search onSearchChange={setSearchTerm} />
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
                  </div>
                </div>
                <div className="products mb-3">
                  <div className="row justify-content-center">
                    {filteredProducts.slice(0, visibleCount).map((item) => (
                      <div className="col-6 col-md-4 col-lg-4" key={item.id}>
                        <div className="product product-7 text-center">
                          <figure className="product-media">
                            {item.stock === 0 && (
                              <span className="product-label label-out">
                                Out of Stock
                              </span>
                            )}
                            <Link to={`/detail/${item.id}`}>
                              <img
                                src={`${config.apiBaseUrl}/${item.img}`}
                                alt="Product image"
                                className="product-image"
                              />
                            </Link>
                            <div className="product-action-vertical">
                              <a
                                href=""
                                className="btn-product-icon btn-wishlist btn-expandable"
                              >
                                <span>add to wishlist</span>
                              </a>
                              <Link
                                to={`/detail/${item.id}`}
                                className="btn-product-icon btn-quickview"
                                title="Quick view"
                              >
                                <span>Quick view</span>
                              </Link>
                              <a
                                href=""
                                className="btn-product-icon btn-compare"
                                title="Compare"
                              >
                                <span>Compare</span>
                              </a>
                            </div>
                            <div
                              className="product-action"
                              onClick={() => handleAddCart(item.id)}
                            >
                              <a className="btn-product btn-cart">
                                <span>add to cart</span>
                              </a>
                            </div>
                          </figure>
                          <div className="product-body">
                            <div className="product-cat">
                              <BrandName idB={item.idBrand}/>
                            </div>
                            <h3 className="product-title">
                              <a href="product.html">{item.name}</a>
                            </h3>
                            <div className="product-price">
                              <span className="out-price">
                                ${item.priceSale} <del>${item.price}</del>
                              </span>
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
                </div>
                {visibleCount < filteredProducts.length && (
                  <div className="more-container text-center">
                    <button
                      onClick={handleLoadMore}
                      className="btn btn-outline-darker btn-more"
                    >
                      <span>Load more products</span>
                      <i className="icon-long-arrow-down" />
                    </button>
                  </div>
                )}
              </div>
              <aside className="col-lg-3 order-lg-first">
                <div className="sidebar sidebar-shop pd-sb">
                  <div className="widget widget-clean">
                    <label>Filters:</label>
                    <button
                      className="sidebar-filter-clear btn-clear"
                      onClick={clearFilters}
                    >
                      Clear All
                    </button>
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
                    <div className="collapse show" id="widget-4">
                      <div className="widget-body">
                        <div className="filter-items">
                          {brands
                            .filter((item) => item.isActive)
                            .map((item) => (
                              <div className="filter-item" key={item.id}>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={`brand-${item.id}`}
                                    checked={filteredBrand === item.id}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;
