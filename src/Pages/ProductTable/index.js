import { useProductList } from "~/Context/api";
import "./style.css";
import config from "~/Context/config";

function ProductTable() {
  const { product, error: errorProduct } = useProductList();
  if (errorProduct) {
    return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Product Table</h4>
        <span>Tong SP:{product.length}</span>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Describe</th>
                <th>Price</th>
                <th>CountProduct</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="py-1">
                    <img src={`${config.apiBaseUrl + '/'}${item.img}`} 
                      style={{width:'50px'}}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.describe}</td>
                  <td>{item.price}</td>
                  <td>{item.countProduct}</td>
                  <td>
                    <button>Sua</button>
                    <button>Xoa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
