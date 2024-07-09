import React from "react";
import { useFetchCategory } from "~/Context/api";
import "./style.css";


function CategoryTable() {
  const { categories, error } = useFetchCategory();

  const countCategories = (categories) => {
    let count = 0;
  
    const recursiveCount = (categories) => {
      for (const category of categories) {
        count++;
        if (category.subCategories && category.subCategories.length > 0) {
          recursiveCount(category.subCategories);
        }
      }
    };
  
    recursiveCount(categories);
    return count;
  };
  const totalCategories = countCategories(categories);

  const SubCategoryRow = ({ subCategories, level = 1 }) => {
    return (
      <>
        {subCategories.map((category) => (
          <React.Fragment key={category.id}>
            <tr>
              <td>{category.id}</td>
              <td style={{ paddingLeft: `${level * 20}px` }}>
                {category.name}
              </td>
              <td>{category.isActive ? "Active" : "Inactive"}</td>
              <td>
                    <button className="btn-action btn-action-c">Sửa</button>
                    <button className="btn-action btn-action-d">Xóa</button>
                  </td>
            </tr>
            {category.subCategories.length > 0 && (
              <SubCategoryRow
                subCategories={category.subCategories}
                level={level + 1}
              />
            )}
          </React.Fragment>
        ))}
      </>
    );
  };
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Category Table</h4>
        <p>Tổng: {totalCategories}</p>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category.id}>
                  <tr>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.isActive ? "Active" : "Inactive"}</td>
                    <td>
                    <button className="btn-action btn-action-c">Sửa</button>
                    <button className="btn-action btn-action-d">Xóa</button>
                  </td>
                  </tr>
                  {category.subCategories.length > 0 && (
                    <SubCategoryRow subCategories={category.subCategories} />
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoryTable;
