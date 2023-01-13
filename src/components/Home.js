import React from 'react'
import './Home.css';
import banner from '../utils/amazon-pic.jpg';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
          <img className="home__image" src={banner} alt="" />
          <div className="home__row">
            <Product
            id="1" 
            title="Havells Zella Flap Auto Immersion Rod 1500 Watts" 
            image="https://m.media-amazon.com/images/I/616uEHVrfjL._SY879_.jpg" 
            price={1099} 
            rating={4}
            />
            <Product
            id="2" 
            title="HAANS Shakeit Protein Shaker Bottle, 500ml (Color-Grey)" 
            image="https://m.media-amazon.com/images/I/615vwtdTRBL._AC_UL320_.jpg" 
            price={239} 
            rating={3}
            />
          </div>
          <div className="home__row">
            <Product
            id="3" 
            title="LIVEONCE Coir Birds Breeding Box House for Cage All Birds Love Birds,Color -Brown, Size -L 12 x W12 x H22 cm -1 Pieces" 
            image="https://m.media-amazon.com/images/I/615elChgQ+L._AC_UL320_.jpg" 
            price={187} 
            rating={4}
            />
            <Product
            id="4" 
            title="Puma mens Smash V2 L White-White Sneakers  - 11 UK (36521507)" 
            image="https://m.media-amazon.com/images/I/61TubS5f1AL._AC_UL320_.jpg" 
            price={3499} 
            rating={4}
            />
            <Product
            id="5" 
            title="Steelbird SBA-7 7Wings ISI Certified Flip-Up Helmet for Men and Women with Inner Smoke Sun Shield" 
            image="https://m.media-amazon.com/images/I/61SpcDjsq8L._AC_UL320_.jpg" 
            price={1571} 
            rating={5}
            />
          </div>
          <div className="home__row">
          <Product
            id="6" 
            title="Sony Bravia 139 cm (55 inches) 4K HDR Certified Android OLED TV 55A8H (Black) (2020 Model)" 
            image="https://m.media-amazon.com/images/I/81CTYcbYHzL._SX679_.jpg" 
            price={124900} 
            rating={5}
            />
          </div>
        </div>
    </div>
  )
}
export default Home;
