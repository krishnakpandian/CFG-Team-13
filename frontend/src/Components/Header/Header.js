import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import image from '../../Assets/PQC_Logo.png';

const Header = () => {
    return(
        <React.Fragment>
            <div class="header-container">
                <img src= {image}/>
                <Link to="/">Home</Link>
                <Link to="/cost">Costs</Link>
                <Link to="/initiative">Initiative</Link>
                <Link to="/stories">Stories</Link>
            </div>
        </React.Fragment>
    );
}

export default Header;
