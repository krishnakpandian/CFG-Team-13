import React from 'react';
import './StoryCard.scss';


const StoryCard = (story) => {
    return(
        <React.Fragment>
            <div class="story-card-container">
                <div class="attributes">
                    <div class="name"> {story.data.name} </div>
                    <div>{story.data.position}</div>
                    <div>{story.data.major}</div>
                    <div>{story.data.year}</div>
                    <div>Participated in {story.data.program !== "" ? story.data.program: "no"} Program</div>
                </div>
                <div class="content">
                    {story.data.description}
                </div>
            </div>
        </React.Fragment>
    );
}

export default StoryCard;