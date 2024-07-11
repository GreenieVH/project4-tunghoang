import { useState } from "react";
import './style.css'
import { createProduct, useFetchBrands, useFetchCategory } from "~/Context/api";

function CreateProduct() {
  const { brands, error: errorBrands } = useFetchBrands();
  const { categories, error: errorCategories } = useFetchCategory();

  const [formData, setFormData] = useState({
    name: "",
    describe: "",
    price: "",
    priceSale: "",
    isSale: "",
    countProduct: "",
    idCategory: "",
    idBrand: "",
    image: null,
  });

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
    }
  };

  const handleClick = (categoryId) => {
    setFormData({
      ...formData,
      idCategory: categoryId 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("describe", formData.describe);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("priceSale", formData.priceSale);
      formDataToSend.append("isSale", formData.isSale);
      formDataToSend.append("countProduct", formData.countProduct);
      formDataToSend.append("idCategory", formData.idCategory);
      formDataToSend.append("idBrand", formData.idBrand);
      formDataToSend.append("img", formData.image);
      
      const data = await createProduct(formDataToSend);
      console.log("Product created:", data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  

  if (errorBrands || errorCategories) {
    return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  }

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
        <div className="custom-control custom-dropdown1" onClick={toggleOpen}>
          <a className="custom-control-label" onClick={() => handleClick(category.id)}>
            {category.name}
          </a>

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
          <div className="sub-categories1">
            {renderCategories(category.subCategories, level + 1)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Create Product</h4>
        <form className="forms-sample" >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Product name.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="describe">Describe</label>
            <input
              type="text"
              className="form-control"
              id="describe"
              value={formData.describe}
              onChange={handleInputChange}
              placeholder="Describe.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="priceSale">Price Sale</label>
            <input
              type="text"
              className="form-control"
              id="priceSale"
              value={formData.priceSale}
              onChange={handleInputChange}
              placeholder="Price Sale.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="isSale">Is Sale</label>
            <select
              id="isSale"
              className="form-control"
              value={formData.isSale}
              onChange={handleInputChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="countProduct">Count Product</label>
            <input
              type="text"
              className="form-control"
              id="countProduct"
              value={formData.countProduct}
              onChange={handleInputChange}
              placeholder="Count Product.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="idCategory">Id Category</label>
            {renderCategories(categories)}
          </div>

          <div className="form-group">
            <label htmlFor="idBrand">Id Brand</label>
            <select
              className="form-control"
              id="idBrand"
              value={formData.idBrand}
              onChange={handleInputChange}
            >
              <option value="">Choose a brand</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-check form-check-flat form-check-primary">
            <label className="form-check-label">
              Image
              <input
                type="file"
                className="form-control"
                onChange={handleInputChange}
              />
            </label>
            <img
              src={formData.image ? URL.createObjectURL(formData.image) : ""}
              alt="Preview"
              style={{width:'200px'}}
            />
          </div>
          <button type="button" onClick={handleSubmit} className="btn btn-primary me-2">
            Submit
          </button>
          <button type="button" className="btn btn-light">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
