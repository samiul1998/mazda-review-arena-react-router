import React from 'react';
import './Home.css'
import carImg from  '../../resources/images/home-car.png'
import { Button } from "react-bootstrap";
import useReviews from '../../hooks/useReviews';
import Review from './../Review/Review';
import { Link } from 'react-router-dom';



const Home = () => {
    const [reviews,setReviews]=useReviews();
    return (
      <div>
        <div className="home-container">
          <div className="text-section">
            <h1>
              <span className="text-purple"> Mazda</span>
              <span className="text-orange"> CX-5 </span>
            </h1>
            <p>
              With this impressive look,Mazda CX-5 will provide you stunning
              performance in speed.Very economic fuel consumption will give a
              long ride economic experience.High technology traction controll
              will provide you extra smooth driving in offroading
              roads.Impressive Desing will make the diffeence.
            </p>
            <h2 className="text-orange">Stunning Performance</h2>
            <p>
              Mazda CX-5 users can have 6 free services and 3 services @50% off
              at Mazda center.Register below to avail this offer.
            </p>
            <Button variant="info">Register Now</Button>
          </div>
          <div className="img-section">
            <img src={carImg} alt="car-overview" />
          </div>
        </div>
        <div className="reviews-container">
          <h2>Customer Reviews ({reviews.slice(0, 3).length})</h2>
          <div className="reviews">
            {reviews.slice(0, 3).map((customerReview) => (
              <Review
                key={customerReview.id}
                customerReview={customerReview}
              ></Review>
            ))}
          </div>

          <Link to="/reviews">
            <Button variant="info"> See All Reviews </Button>
          </Link>
        </div>
      </div>
    );
};

export default Home;