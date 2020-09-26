import React from 'react';
import './Events.scss';
import events from './events.json';
import EventCard from './EventCard/EventCard';





const Events = () => {
    return(
        <React.Fragment>
            <div class="events-container">
                Events Renders
                {events.events.map((event) => {
                    return(
                        <EventCard data={event}/>
                    );
                }) }
            </div>
        </React.Fragment>
    );
}

export default Events;