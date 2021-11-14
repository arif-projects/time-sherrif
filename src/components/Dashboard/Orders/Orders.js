import React from 'react';
import useAuth from '../../Hook/useAuth';
import UserDashboard from '../UserDashboard/UserDashboard';

 
const Orders = () => {
    const { user } = useAuth();
    const [orderProducts,setOrderProduct]=React.useState([]);

    React.useEffect(() => {
        fetch('https://stormy-lowlands-53575.herokuapp.com/purchesedata')
        .then(res=>res.json())
        .then(data=>setOrderProduct(data))
    },[])
    return (
        <div>
         <UserDashboard/>
            
            <div className="mt-5 pt-5 w-75 mx-auto">
            <h4 className="text-center pb-3" style={{color:"green",fontSize:"20px"}}>Your Total Order is {orderProducts.length}</h4>
            <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col"><h5>SL No</h5></th>
            <th className="text-secondary" scope="col"><h5>Name</h5></th>
            <th className="text-secondary" scope="col"><h5>Email</h5></th>
            <th className="text-secondary" scope="col"><h5>Product Name</h5></th>
            <th className="text-secondary" scope="col"><h5>Price</h5></th>
             
             
            </tr>
        </thead>
        <tbody>
            {
                orderProducts.map((pd, index) => 
                    
                <tr>
                    <td><h5>{index + 1}</h5></td>
                    <td><h5>{pd?.shipment?.name}</h5></td>
                    <td><h5>{pd?.shipment?.email}</h5></td>
                    <td><h5 className="text-danger">{pd?.productName}</h5></td>
                    <td><h5 className="text-primary">${pd?.price}</h5></td>
                    
                     
                </tr>
                )
            }
        </tbody>
    </table>

            </div>
            </div>
    );
};

export default Orders;