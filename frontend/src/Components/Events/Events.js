import React from 'react';
import './Events.scss';
import events from './events.json';
import EventCard from './EventCard/EventCard';

//Info Sourced in events.json
//(https://www.nbcdfw.com/news/local/paul-quinn-college-resuming-covid-19-testing-site/2412308/)
// (https://www.tramarketplace.com/attend/event/paul-quinn-colleges-food-project)
//https://www.globenewswire.com/news-release/2019/04/29/1811428/0/en/Paul-Quinn-College-Announces-Strategic-Energy-Initiative-in-Partnership-With-GridMarket-EarthX-Environ-Partners-and-Go-Big-Solar.html)

const Events = () => {
    return(
        <React.Fragment>
            <head>
            <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=5f6f332f457f9c00128637be&product=inline-share-buttons" async="async"></script>
            </head>
            <div class="events-container">
                {events.events.map((event) => {
                    return(
                        <EventCard data={event} />
                        
                    );
                }) }
            </div>
            
        </React.Fragment>
    );
}

export default Events;
