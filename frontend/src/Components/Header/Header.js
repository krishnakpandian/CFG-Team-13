import React from 'react';
import './Header.scss';
import {Link, Router} from 'react-router-dom';

const Header = () => {
    return(
        <React.Fragment>
            <div class="header-container">
                Header Renders
                <Link to="/">Home</Link>
                <Link to="/cost">Costs</Link>
                <Link to="/initiative">Initiative</Link>
                <Link to="/stories">Stories</Link>
            </div>
        </React.Fragment>
    );
}

export default Header;
