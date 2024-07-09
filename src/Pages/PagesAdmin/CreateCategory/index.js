import { useState } from "react";
import { createCategory, useFetchCategory } from "~/Context/api";

function CreateCategory() {
  const { categories, error: errorCategories } = useFetchCategory();
  const [idCategory, setIdCategory] = useState("");
  const [error, setError] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const handleClick = (categoryId, categoryName) => {
    setIdCategory(categoryId);
    setCategoryName(categoryName);
  };
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
          <a
            className="custom-control-label"
            onClick={() => handleClick(category.id, category.name)}
          >
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
  console.log(idCategory, nameCategory);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!idCategory || !nameCategory) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      const data = await createCategory(nameCategory, idCategory);
      console.log("Category created:", data);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="card">
      <p style={{ fontSize: "16px", color: "red", textAlign: "center" }}>
        {errorCategories || error}
      </p>
      <div className="card-body">
        <h4 className="card-title">Create Category</h4>
        <form className="forms-sample" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="idCategory">
              Chọn 1 danh mục - Đã chọn : {categoryName}
            </label>
            {renderCategories(categories)}
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={nameCategory}
              onChange={(e) => setNameCategory(e.target.value)}
              placeholder="name.."
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
          <button type="button" className="btn btn-light">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
