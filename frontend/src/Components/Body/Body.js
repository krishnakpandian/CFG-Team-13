import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const Body = () => {
    return(
        <React.Fragment>
        <div class="main">
            <div class="main__container">
            <div class="main__content">
                <h1>Welcome To The</h1>
                <h2>QUINNITE</h2>
                <p>Nation</p>
                <button class="main__btn"><a href="#">Discover Us</a></button>
            </div>
            <div class="main__img--container">
                <img id="main__img" src={require('../../Assets/Tiger.png')} />
            </div>
            </div>
        </div>
    

        <div class="services">
            <h1>See what the hype is about</h1>
            <div class="services__container">
            <div class="services__card">
                <img src= {require('../../Assets/money.jpg')}/>
                <h2>Know The Costs</h2>
                <p>Affordable Private College</p>
                <button><Link to="/cost">Costs</Link></button>
            </div>
            <div class="services__card">
                <img src={require('../../Assets/success.jpg')}/>
                <h2>Some Success Stories</h2>
                <p>Hear From Our Students</p>
                <button><Link to="/stories">Learn More</Link></button>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Body;