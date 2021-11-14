import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Offer from '../Home/Offer/Offer';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-lowlands-53575.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className ="container">
            <h1 className = "mb-3 banner-header">All products</h1>
            <div className="row">
            {
                products.map(pd=>(
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
            <Offer></Offer>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;