import React, {useState} from 'react';
import './EventCard.scss';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from '../../Image/Image'

import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton
  } from "react-share";
  import {
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TwitterIcon
  } from "react-share";

const Events = (event) => {
    var url='https://www.facebook.com/'
    return(
        <React.Fragment>
            <div class="event-card-container">
                <Card>
                    <Link to={`/comment?id=${event.data.id}`}>
                    <Card.Header>{event.data.name}</Card.Header>
                    </Link>
                    <Card.Body>
                    <Card.Text>
                        {event.data.description}
                        <div class = "share">
                        <div>
                            Share Now:
                        </div>
                        
                        <a href="#" ><FacebookIcon size={32} round={true}  title={event.data.name} /></a>
                        <a href="#" ><TwitterIcon size={32} round={true}  title={event.data.name} /></a>
                        <a href="#" ><LinkedinIcon size={32} round={true}  title={event.data.name} /></a>
                        <a href="#" ><RedditIcon size={32} round={true}  title={event.data.name} /></a>
                        </div>
                    </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src={Image(event.data.image)} />
                    </Card>

                

            </div>
        </React.Fragment>
    );
}

export default Events;

