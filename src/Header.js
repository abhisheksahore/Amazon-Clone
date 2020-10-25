import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [state, dispatch] = useStateValue();

    return ( 
        <div className="header">
            {/* Logo of amazon */}
            <Link to='/'>
                <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon__logo"/>
            </Link>
            {/* Header Search Bar */}
            <div className='header__search'>
                
                {/* Input Box */}
                <input className='header__searchInput' type="text"/>
               
                {/* Search icon will come here */}
                <SearchIcon className='header__searchIcon' />

            </div>

            {/* Header Nav Menu */}
            <div className="header__nav">
                {/* header Option One */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello
                    </span>  
                    <span className="header__optionLineTwo">
                        Sign in    
                    </span>  
                </div>

                {/* header Option two */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>  
                    <span className="header__optionLineTwo">
                        & Orders    
                    </span>  
                </div>
                
                {/* header option three */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>  
                    <span className="header__optionLineTwo">
                        Prime    
                    </span>
                </div>

                {/* Shoping Basket */}
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLinetwo header__basketCount">
                            {state.basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header