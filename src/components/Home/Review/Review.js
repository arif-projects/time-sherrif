import React, { useEffect, useState } from 'react';
import './Review.css'

const Review = () => {
    const [review,setReview] = useState([])
    useEffect(()=>{
        fetch('https://stormy-lowlands-53575.herokuapp.com/reviewsdata')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <div className="mb-5 mt-5">
            <div className="container">
                <h3 className = "banner-header">Customer Reviews</h3>
                <p className = "review-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna</p>
                <div className="row">

                    {
                        review.map(pd=>(
                            <div className="col-md-4">
                            <div className="feedback">
                                <img className="feedback-image" src={pd.img} alt="" />
                                <h6>{pd.name}</h6>
                                <p>{pd.job}</p>
                                <p>{pd.comments}</p>
    
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

export default Review;