import React, {useState, Component} from 'react';
import './Stories.scss';
import stories from './story.json';
import StoryCard from './StoryCard/StoryCard';

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            major: '',
            year: '',
            program: '',
            image: '',
            description: '',
            storydata: []
        }
    }
    // const [name, setName] = useState('');
    // const [position, setPosition] = useState('');
    // const [major, setMajor] = useState('');
    // const [year, setYear] = useState('');
    // const [program, setProgram] = useState('');
    // const [image, setImage] = useState('');
    // const [description, setDescription] = useState('');
    submitData = e => {
        if (this.state.name !== "" && this.state.position !== "" && this.state.year !=="" && this.state.major !=="" && this.state.image !=="") {
            fetch('http://localhost:8080/v1/api/stories/', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name": this.state.name, "position": this.state.position, "year": this.state.year, "major":this.state.major, "image":this.state.image, "program":this.state.program, "description":this.state.description }),
              })
              .then(response => response.json())
              .then(alert('Submission Added'))
              .catch((error) => {
                console.error('Error:', error);
              })

            this.setState({name:'', position: '', major: '', year: '', program: '', image: '', description: ''})
            // setName('');
            // setPosition('');
            // setMajor('');
            // setYear('');
            // setProgram('');
            // setImage('');
            // setDescription('');
        }
        else {
            alert('Fill out All the Fields')
        }
    }
    componentDidMount() {
        
        fetch('http://localhost:8080/v1/api/stories/', {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => this.setState({storydata: data}))
          .then(data => console.log(data));
    }




    render() {
    return(
        <React.Fragment>
            <div class="story-container">
                <div class="head">Personal Success Stories </div>
                {this.state.storydata !== null && this.state.storydata.map((story) => {
                    return(
                        <StoryCard data={story}/>
                    );
                }) }
            </div> 
            <div class="fields">
            <div class = "field1">
                <div class="field"><div>Name</div><input placeholder = "name" name="name" type= "text" value = {this.state.name ? this.state.name: ''} onChange={event => this.setState({name:event.target.value})}/> </div>
                <div class="field"><div>Program</div><input placeholder = "program" name="program" type= "text" value = {this.state.position ? this.state.position: ''} onChange={event => this.setState({position:event.target.value})}/> </div>
                <div class="field"><div>Major</div><input placeholder = "major" name="major" type= "text" value = {this.state.major ? this.state.major: ''} onChange={event => this.setState({major:event.target.value})}/> </div>
            </div>
            <div class = "field2">
                <div class="field"><div>Year</div><input placeholder = "year" name="year" type= "text" value = {this.state.year ? this.state.year: ''} onChange={event => this.setState({year:event.target.value})}/> </div>
                <div class="field"><div>Position</div><input placeholder = "position" name="position" type= "text" value = {this.state.program ? this.state.program: ''} onChange={event => this.setState({program:event.target.value})}/> </div>
                <div class="field"><div>Image</div><input placeholder = "image" type= "text" name="image" value = {this.state.image ? this.state.image: ''} onChange={event => this.setState({image:event.target.value})}/> </div>
            </div>
            <div class="field" id = "d"><div>Description</div><input placeholder = "description" name="description" type= "text" value = {this.state.description ? this.state.description: ''} onChange={event => this.setState({description:event.target.value})}/> </div>
            </div>
            <div class = "button">
            <button onClick = {this.submitData}>Submit</button>
            </div>
        </React.Fragment>
    );
    }
}

export default Stories;
