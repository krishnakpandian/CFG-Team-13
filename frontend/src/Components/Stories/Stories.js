import React, {useState} from 'react';
import './Stories.scss';
import stories from './story.json';
import StoryCard from './StoryCard/StoryCard';

const Stories = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [major, setMajor] = useState('');
    const [year, setYear] = useState('');
    const [program, setProgram] = useState('');
    const [image, setImage] = useState('');

    const submitData = e => {
        if (name !== "" && position !== "" && year !=="" && major !=="" && image !=="") {
            alert('You Did it')
            setName('');
            setPosition('');
            setMajor('');
            setYear('');
            setProgram('');
            setImage('');
            fetch()
        }
        else {
            alert('Fill out All the Fields')
        }
    }
    return(
        <React.Fragment>
            <div class="story-container">
                Personal Success Stories 
                {stories.stories.map((story) => {
                    return(
                        <StoryCard data={story}/>
                    );
                }) }
            </div>
            <div class="fields">
                <div>Name<input type= "text" value = {name ? name: ''} onChange={event => setName(event.target.value)}/> </div>
                <div>Position<input type= "text" value = {position ? position: ''} onChange={event => setPosition(event.target.value)}/> </div>
                <div>Major<input type= "text" value = {major ? major: ''} onChange={event => setMajor(event.target.value)}/> </div>
                <div>Year<input type= "text" value = {year ? year: ''} onChange={event => setYear(event.target.value)}/> </div>
                <div>Program<input type= "text" value = {program ? program: ''} onChange={event => setProgram(event.target.value)}/> </div>
                <div>Image<input type= "text" value = {image ? image: ''} onChange={event => setImage(event.target.value)}/> </div>
                <button onClick = {submitData}></button>
            </div>
        </React.Fragment>
    );
}

export default Stories;