import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hook/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './PurchesePage.css'


const PurchesePage = () => {
    const { user } = useAuth();
    // console.log(user);
    const [product,setProduct] = useState([]);
    const { pId } = useParams();
    // console.log(pId);
  
    useEffect(()=>{
        fetch('https://stormy-lowlands-53575.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);


    

    const productId = product.find(pdId =>pdId._id === pId)
    // console.log(productId);
   

    const handlePurchese = ()=>{
        const formData = { 
            uName: user?.displayName,
            uemail: user?.email,
            pdName: productId?.name,
            pdPrice: productId?.price
        }
        // console.log(formData);

        fetch('https://stormy-lowlands-53575.herokuapp.com/purchese', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className = "container d-flex justify-content-center align-items-center">
                <div>
                <div className = "purcheseContainer text-start">
                    <h1>Purchese Here </h1>
                    <hr/>
                    <h5>Your name: {user?.displayName}</h5>
                    <h5>Your email:{user?.email}</h5>
                    <h5>Product name: {productId?.name}</h5>
                    <h5>product price: ${productId?.price}</h5>
                    
                    <Button onClick = {handlePurchese} className = "purcheseButton">Make a Purchese</Button>

                    

                </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default PurchesePage;