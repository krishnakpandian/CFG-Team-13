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
                <div className = "data">Name</div> <input type= "text" size="30" value = {name ? name: ''} onChange={event => setName(event.target.value)}/>
                <div className = "data">Position</div> <input type= "text" size="30" value = {position ? position: ''} onChange={event => setPosition(event.target.value)}/> 
                <div className = "data">Major </div><input type= "text"size="30" value = {major ? major: ''} onChange={event => setMajor(event.target.value)}/> 
                <div className = "data">Year </div><input type= "text" size="30"value = {year ? year: ''} onChange={event => setYear(event.target.value)}/> 
                <div className = "data">Program</div> <input type= "text"size="30" value = {program ? program: ''} onChange={event => setProgram(event.target.value)}/> 
                <div className = "data">Image</div> <input type= "text" size="30"value = {image ? image: ''} onChange={event => setImage(event.target.value)}/> 
                <div className = "data"></div><button onClick = {submitData}>Submit</button>
            </div>
        </React.Fragment>
    );
}

export default Stories;