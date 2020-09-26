import React from 'react';
import './Events.scss';
import events from './events.json';
import EventCard from './EventCard/EventCard';

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
