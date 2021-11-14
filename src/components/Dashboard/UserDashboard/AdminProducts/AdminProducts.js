import React, { useEffect, useState } from "react";
import UserDashboard from "../UserDashboard";
import './AdminProducts.css';


const AdminProducts = () => {

  const [deleteItem, setDeleteItem] = useState("");
  const [products,setProducts] = useState([])
  useEffect(()=>{
      fetch('https://stormy-lowlands-53575.herokuapp.com/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])
  const deleteService = (id) => {
    fetch('https://stormy-lowlands-53575.herokuapp.com/products/'+ id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteItem("Your Item is Deleted Successfully!!");
        window.location.replace("/");
      });
  };


  
  return (
    <div>
      <UserDashboard />

      <div className="mt-5 pt-5 w-75 mx-auto">
        <h4
          className="text-center pb-3"
          style={{ color: "green", fontSize: "20px" }}
        >
        Your Total Product is :{products.length}
        </h4>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">
                <h5>SL No</h5>
              </th>
              <th className="text-secondary" scope="col">
                <h5>Product Name</h5>
              </th>
              <th className="text-secondary" scope="col">
                <h5>Price</h5>
              </th>

              <th className="text-secondary" scope="col">
                <h5>Delete</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((pd, index) => (
              <tr>
                <td>
                  <h5>{index + 1}</h5>
                </td>
                <td>
                  <h5>{pd?.name}</h5>
                </td>
                <td>
                  <h5>{pd?.price}</h5>
                </td>
               

                <td>
                  <h4
                    onClick={() => {
                      deleteService(pd?.id);
                    }}
                    className=" deleteBtn"
                  >
                    Delete
                  </h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AdminProducts;