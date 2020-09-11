import React from 'react';
import './Header2.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import BuildIcon from '@material-ui/icons/Build';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton } from '@material-ui/core';



function Header2() {
    return (
        <div className="header2">
          <div className="header__right">
            <div className="header__options">
              <IconButton>
                <span><BuildIcon /></span>
                <span className="header__optionLineTwo">Tools</span>
              </IconButton>
            </div>
            <div className="header__options">
              <IconButton>
                <span><LocalCarWashIcon /></span>
                <span className="header__optionLineTwo">Equipment</span>
              </IconButton>
            </div>
            <div className="header__options">
              <IconButton>
                <span><InvertColorsIcon /></span>
                <span className="header__optionLineTwo">Chemical</span>
              </IconButton>
            </div>
            <div className="header__options">
              <IconButton>
                <span><InfoIcon /></span>
                <span className="header__optionLineTwo">About Us</span>
              </IconButton>
            </div>
          </div>
        </div>
    )
}

export default Header2
