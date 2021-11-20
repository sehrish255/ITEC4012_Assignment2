import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='header'>
            <img 
                className="header_logo" alt="amazon logo"
                src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png"
            />

        <div 
        className="search_bar">
            <input
            className="header_searchInput" type= "text"/>

        </div>
            
            <div className="header_nav">
                <Link to='/login'>
                <div className='header_option'>
                    <span className='header_option1'>Returns</span>
                    <span className='header_option2'>& Orders</span>
                </div>
                </Link>

            <div className='header_option'>
                <span className='header_option1'>Hello Guest</span>
                <span className='header_option2'>Sign In</span>
            </div>

            <div className='header_option'>
                <span className='header_option1'>.</span>
                <span className='header_option2'>Cart</span>
            </div>
            
            </div>
        </div>
    );

}
export default Navbar
