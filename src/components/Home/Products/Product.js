import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-lowlands-53575.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="container mt-5">
                 <div className = "products">
                     <h1 className = "mb-3 banner-header">Feature Products</h1>
                <div className="row">
                {
                        products.slice(0,6).map(pd =>(
                            <div className = "col-md-4">
                                        <div className="card mb-4">
                                        <div className="card-image">
                                            <img className="w-75 card-image" src={pd.img} alt="" />
                                        </div>
                                        <div className="card-text">
                                            <div className="row">
                                                <div className="col-md-8 d-flex align-items-srart justify-content-start">
                                                    <h4>{pd.name}</h4>
                                                </div>
                                                <div className="col-md-4 d-flex align-items-end justify-content-end">
                                                    <p className="price-text">${pd.price}</p>
                                                </div>
                                            </div>
                                            

                                            <Link to={`/purchese/${pd._id}`} style={{ textDecoration: 'none' }}>
                                                <button className="BuyButton mb-3">Buy now</button>
                                            </Link>

                                        </div>

                                    </div>

                            </div>
                        ))
                    }
                </div>

            </div>
            </div>
        </div>
    );
};

export default Product;