import React, {useState} from 'react';
import './EventCard.scss';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from '../../Image/Image'



const Events = (event) => {

    return(
        <React.Fragment>
            <div class="event-card-container">
            <Link to={`/comment?id=${event.data.id}`}>
                <Card>
                    <Card.Header>{event.data.name}</Card.Header>
                    <Card.Body>
                    <Card.Text>
                        {event.data.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Image(event.data.image)} />
                </Card>
                </Link>

            </div>
        </React.Fragment>
    );
}

export default Events;

