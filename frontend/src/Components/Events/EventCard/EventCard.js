import React, {useState} from 'react';
import './EventCard.scss';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Events = (event) => {
    const [comment,setComment] = useState('');
    
    const onChange = e => {
        setComment(e.target.value);
    };
    const submitComment = e => {

        fetch("", {
            method: "GET",
            dataType: "JSON",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: {"comment": comment}
        })
        .then(resp => {
            return resp.json();
        });

    }

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
                    <Card.Img variant="bottom" src="holder.js/100px180" />
                </Card>
                <div class="comment">
                    <input type="text" onChange= {e => onChange(e)}/>
                    <button></button>
                </div>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Events;