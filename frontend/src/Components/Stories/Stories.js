import React, {useState} from 'react';
import './Stories.scss';
import stories from './story.json';
import StoryCard from './StoryCard/StoryCard';

const Stories = async () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [major, setMajor] = useState('');
    const [year, setYear] = useState('');
    const [program, setProgram] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const submitData = e => {
        if (name !== "" && position !== "" && year !=="" && major !=="" && image !=="") {
            fetch('http://localhost:8080/v1/api/stories/', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name": name, "position": position, "year": year, "major":major, "image":image, "program":program, "description":description }),
              })
              .then(response => response.json())
              .then(alert('Submission Added'))
              .catch((error) => {
                console.error('Error:', error);
              })


            setName('');
            setPosition('');
            setMajor('');
            setYear('');
            setProgram('');
            setImage('');
            setDescription('');
        }
        else {
            alert('Fill out All the Fields')
        }
    }

    const [storydata, setStoryData] = useState(null);
    await fetch('http://localhost:8080/v1/api/stories/', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(data => setStoryData(data))
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      })

    return(
        <React.Fragment>
            <div class="story-container">
                Personal Success Stories 
                {storydata !== null && storydata.map((story) => {
                    return(
                        <StoryCard data={story}/>
                    );
                }) }
            </div>
            <div class="fields">
            <div class = "field1">
            <div class="field"><input placeholder = "name" type= "text" value = {name ? name: ''} onChange={event => setName(event.target.value)}/> </div>
            <div class="field"><input placeholder = "program" type= "text" value = {position ? position: ''} onChange={event => setPosition(event.target.value)}/> </div>
            <div class="field"><input placeholder = "major" type= "text" value = {major ? major: ''} onChange={event => setMajor(event.target.value)}/> </div>
            </div>
            <div class = "field2">
            <div class="field"><input placeholder = "year" type= "text" value = {year ? year: ''} onChange={event => setYear(event.target.value)}/> </div>
            <div class="field"><input placeholder = "position" type= "text" value = {program ? program: ''} onChange={event => setProgram(event.target.value)}/> </div>
            <div class="field"><input placeholder = "image" type= "text" value = {image ? image: ''} onChange={event => setImage(event.target.value)}/> </div>
            </div>
            <div class="field" id = "d"><input placeholder = "description" type= "text" value = {description ? description: ''} onChange={event => setDescription(event.target.value)}/> </div>
            </div>
            <div class = "button">
            <button onClick = {submitData}>Submit</button>
            </div>
        </React.Fragment>
    );
}

export default Stories;