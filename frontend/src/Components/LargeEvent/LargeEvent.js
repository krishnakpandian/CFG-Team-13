import React, {useState} from 'react';
import './LargeEvent.scss';
import { useParams } from 'react-router-dom';

const LargeEvent = async ({ match, location }) => {


    const { id } = useParams();
    const [pageData, setPageData] = useState('');
    fetch('http://localhost:8080/v1/api/calculate/', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(),
      })
      .then(response => response.json())
      .then(data => {
        setPageData(data)
      })


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
            <div class="LargeEvent-container">

                <div class="comment">
                    <input type="text" onChange= {e => onChange(e)}/>
                    <button onClick={submitComment}>GO</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LargeEvent;