import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton } from '@material-ui/core';


function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <h1>SCWS</h1>
          <img 
            src="https://t3.ftcdn.net/jpg/02/70/91/20/240_F_270912040_74qCtqgqhW87QIVrO2xdkos87SnNI3wF.jpg"
            alt=""
          />
        </div>
        <div className="header__center">
          <div className="header__center1">
            <div className="header__centerIcon">
              <HomeIcon fontSize="large" />
            </div>
            <div className="header__centerText">
              <h3>Home</h3>
            </div>
          </div>
          <div className="header__center2">
            <div className="header__centerIcon">
              <PhoneIcon fontSize="large" />
            </div>
            <div className="header__centerText">
              <h3>623-734-6815</h3>
            </div>
          </div>
        </div>
        
          </div>
          
    
    )
}

export default Header


// import React from 'react';
// import './Header.css';
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import HomeIcon from '@material-ui/icons/Home';
// import BuildIcon from '@material-ui/icons/Build';
// import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
// import InvertColorsIcon from '@material-ui/icons/InvertColors';
// import InfoIcon from '@material-ui/icons/Info';
// import PhoneIcon from '@material-ui/icons/Phone';

// function Header() {
//   return (
//     <nav className="header">
  
//         <img className="header_logo" 
//           src="https://t3.ftcdn.net/jpg/02/70/91/20/240_F_270912040_74qCtqgqhW87QIVrO2xdkos87SnNI3wF.jpg"
//           alt=""
//         />
 

    
//       <div className="header_nav">
        
//           <div className="header_option">
//             <span className="header_optionLineOne">Hello Mike</span>
//             <span className="header_optionLineTwo">Home</span>
//           </div>
        

        
//           <div className="header_option">
//             <span className="header_optionLineOne">Returns</span>
//             <span className="header_optionLineTwo">623-734-6815</span>
//           </div>
  
//           <div className="header_optionBasket">
//             <BuildIcon className="header_shoppingBasketIcon" />
//             <span className="header_optionLineTwo header_BasketCount">Service</span>
//           </div>
        
//           <div className="header_optionBasket">
//             <LocalCarWashIcon className="header_shoppingBasketIcon" />
//             <span className="header_optionLineTwo header_BasketCount">Equipment</span>
//           </div>
       
//           <div className="header_optionBasket">
//             <InvertColorsIcon className="header_shoppingBasketIcon" />
//             <span className="header_optionLineTwo header_BasketCount">Chemical</span>
//           </div>
      
//       </div>
//     </nav>
//   )
// }

// export default Header;