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
<<<<<<< HEAD
                <div>Name<input type= "text" value = {name ? name: ''} onChange={event => setName(event.target.value)}/> </div>
                <div>Position<input type= "text" value = {position ? position: ''} onChange={event => setPosition(event.target.value)}/> </div>
                <div>Major<input type= "text" value = {major ? major: ''} onChange={event => setMajor(event.target.value)}/> </div>
                <div>Year<input type= "number" value = {year ? year: ''} onChange={event => setYear(event.target.value)}/> </div>
                <div>Program<input type= "text" value = {program ? program: ''} onChange={event => setProgram(event.target.value)}/> </div>
                <div>Image<input type= "text" value = {image ? image: ''} onChange={event => setImage(event.target.value)}/> </div>
                <div>Description<input type= "text" maxlength ={500} value = {image ? image: ''} onChange={event => setDescription(event.target.value)}/> </div>
                <input type="file"></input>
                <button onClick = {submitData}></button>
=======
                <div className = "data">Name</div> <input type= "text" size="30" value = {name ? name: ''} onChange={event => setName(event.target.value)}/>
                <div className = "data">Position</div> <input type= "text" size="30" value = {position ? position: ''} onChange={event => setPosition(event.target.value)}/> 
                <div className = "data">Major </div><input type= "text"size="30" value = {major ? major: ''} onChange={event => setMajor(event.target.value)}/> 
                <div className = "data">Year </div><input type= "text" size="30"value = {year ? year: ''} onChange={event => setYear(event.target.value)}/> 
                <div className = "data">Program</div> <input type= "text"size="30" value = {program ? program: ''} onChange={event => setProgram(event.target.value)}/> 
                <div className = "data">Image</div> <input type= "text" size="30"value = {image ? image: ''} onChange={event => setImage(event.target.value)}/> 
                <div className = "data"></div><button onClick = {submitData}>Submit</button>
>>>>>>> 18b3ccc25d228b6a740dba6337af279e6ccd67a8
            </div>
        </React.Fragment>
    );
}

export default Stories;