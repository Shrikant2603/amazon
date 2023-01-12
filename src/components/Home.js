import React from 'react'
import './Home.css';
import banner from '../utils/amazon-pic.jpg';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
          <img className="home__image" src={banner} alt="" srcset="" />
          <div className="home__row">
            <Product
            id="1" 
            title="Lorem ipsum dolor sit amet." 
            image="https://m.media-amazon.com/images/I/616uEHVrfjL._SY879_.jpg" 
            price={100.00} 
            rating={4}
            />
            <Product/>
          </div>
          <div className="home__row">
            <Product/>
            <Product/>
            <Product/>
          </div>
          <div className="home__row">
            <Product/>
          </div>
        </div>
    </div>
  )
}
export default Home;
