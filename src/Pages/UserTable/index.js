import './style.css'

function UserTable() {
    return ( 
        <div className="card">
      <div className="card-body">
        <h4 className="card-title">User Table</h4>
        
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User</th>
                <th>First name</th>
                <th>Progress</th>
                <th>Amount</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">
                  <img src="../../assets/images/faces/face1.jpg" alt="" />
                </td>
                <td>Herman Beck</td>
                <td>Herman Beck</td>
                <td>$ 77.99</td>
                <td>May 15, 2015</td>
                <td><button>Suwar</button><button>Xoas</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
     );
}

export default UserTable;