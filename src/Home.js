import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home__banner"/>
                
                {/* Product Rows */}
                {/* Row 1 */}
                <div className="home__row">
                    <Product 
                        id='12321341'
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        price={19.99}
                        rating={5}
                    />
                    
                    <Product 
                        id='87456321'
                        title='Kenwood kMix Stand  Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        image='https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._AC_SL1200_.jpg'
                        price={239.0}
                        rating={4}
                    />

                </div>

                {/* Row 2 */}
                <div className="home__row">
                    <Product 
                        id='23568974'
                        title="Echo Plus (2nd Gen) – Premium sound with a built-in smart home hub - Heather Grey Fabric"
                        image='https://images-na.ssl-images-amazon.com/images/I/71Nk6mmYFZL._AC_SL1000_.jpg'
                        price={98.85}
                        rating={4}
                    />
                    <Product 
                        id='13568974'
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SL1500_.jpg'
                        price={1398.85}
                        rating={5}
                    />
                    <Product 
                        id='23554474'
                        title="Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminum Case with Black Sport Band"
                        image='https://images-na.ssl-images-amazon.com/images/I/71O2f4-BvjL._AC_SL1500_.jpg'
                        price={299.99}
                        rating={4}
                    />
                </div>
                
                {/* Row 3 */}
                <div className="home__row">
                    <Product 
                        id='98765432'
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        image='https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg'
                        price={2599.99}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
