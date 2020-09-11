import React from 'react';
import './Body.css';
import Image from './Image';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Body() {
    return (
        <div className="body">
          <div className="body__main">
            {/* <Sidebar /> */}
            <div className="body__mainImage">
              <Image />
            </div>
          </div>
          <Footer />
        </div>
    )
}

export default Body;
