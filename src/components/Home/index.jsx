import React from 'react';
import './styles.css';
import Product from '../Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg" alt="background"
                />
            <div className="home_row">
                <Product 
                id="23445930"
                title='Just Dance'
                price={12.99}
                image="src=https://m.media-amazon.com/images/I/51J2qISZnwL.jpg"
                />
                <Product
                id="23445931"
                title='Headphones'
                price={98.99}
                image="https://m.media-amazon.com/images/I/61+WYAjltpL._AC_SR180,120_QL70_.jpg"
                />
               
            </div>

            <div className="home_row">
                <Product 
                id="23445932"
                title='GoPro'
                price={50.90}
                image="https://m.media-amazon.com/images/I/31TEODDJZbL.jpg"/>
                
                <Product 
                id="23445933"
                title='Blender'
                price={30.99}
                image="https://m.media-amazon.com/images/I/41A2Lzj-RML.jpg"/>
                
                <Product 
                id="23445934"
                title='Thermostat'
                price={25.00}
                image="https://m.media-amazon.com/images/I/21EkxqPNE4L.jpg"
                />
            </div>
        </div>
        </div>
    );
}

export default Home;
