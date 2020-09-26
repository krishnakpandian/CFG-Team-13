import React, {useState} from 'react';
import './Costs.scss';
import GraphComponent from './GraphComponent/GraphComponent';



const JOB_LIST = [{value: 1, viewValue: "Biology"},
                    {value: 2, viewValue: "Business"},
                    {value: 3, viewValue: "Health/Wellness"},
                    {value: 4, viewValue: "Legal Studies"},
                    {value: 5, viewValue: "Religious Studies"},
                    {value: 6, viewValue: "Communication"}];

const LOAN_LIST =   [{value: 10, viewValue: "10%"},
                    {value: 11, viewValue: "11%"},
                    {value: 12, viewValue: "12%"},
                    {value: 13, viewValue: "13%"},
                    {value: 14, viewValue: "14%"},
                    {value: 15, viewValue: "15%"},
                    {value: 16, viewValue: "16%"},
                    {value: 17, viewValue: "17%"},
                    {value: 18, viewValue: "18%"},
                    {value: 19, viewValue: "19%"},
                    {value: 20, viewValue: "20%"}];


const FAFSA_LIST = [{value: 0, viewValue: "$0.00"},
                    {value: 1, viewValue: "$1000.00"},
                    {value: 2, viewValue: "$2000.00"},
                    {value: 3, viewValue: "$3000.00"},
                    {value: 4, viewValue: "$4000.00"},
                    {value: 5, viewValue: "$5000.00"},
                    {value: 6, viewValue: "$6000.00"}];
                    
const SCHOLARSHIP_LIST  = 
                    [{value: 0, viewValue: "$0.00"},
                    {value: 1, viewValue: "$1000.00"},
                    {value: 2, viewValue: "$2000.00"},
                    {value: 3, viewValue: "$3000.00"},
                    {value: 4, viewValue: "$4000.00"},
                    {value: 5, viewValue: "$5000.00"},
                    {value: 6, viewValue: "$6000.00"},
                    {value: 7, viewValue: "$7000.00"},
                    {value: 8, viewValue: "$8000.00"},
                    {value: 9, viewValue: "$9000.00"},
                    {value: 10, viewValue: "$10000.00"},
                    {value: 11, viewValue: "$110000.00"}];

const Costs = () => {
    const [fafsa, setFafsa] = useState(0);
    const [workStudy, setWork] = useState(false);
    const [job, setJobs] = useState(1);
    const [loans, setLoans] = useState(10);
    const [scholarship, setScholarship] = useState(0);
    const [ready, setGraphReady] = useState(false);
    const [graphData, setGraphData] = useState('');
    return(
        <React.Fragment>
            <div class="costs-container">
                Cost Renders
                <select>
                    {JOB_LIST.map((job) => {
                        return(
                          <option onClick={e => setJobs(job.value)}> {job.viewValue}</option>  
                        );
                    })}
                </select>

                <select>
                    {FAFSA_LIST.map((fafsa) => {
                        return(
                          <option onClick={e => setFafsa(fafsa.value)}> {fafsa.viewValue}</option>  
                        );
                    })}
                </select>

                <select>
                {LOAN_LIST.map((loan) => {
                    return(
                      <option onClick={e => setLoans(loan.value)}> {loan.viewValue}</option>  
                    );
                })}
                </select>
                <input type="radio"  name="true" value='true' checked ={workStudy === true} onChange={e => setWork(true)}/>
                <label for="true">Yes</label>
                <input type="radio"  name="false" value='false' checked ={workStudy === false} onChange={e => setWork(false)}/>
                <label for="false">No</label>
                <select>
                {SCHOLARSHIP_LIST.map((scholarship) => {
                    return(
                      <option onClick={e => setScholarship(scholarship.value)}> {scholarship.viewValue}</option>  
                    );
                })}
                </select>
                <button onClick= { e =>   
                    fetch('http://localhost:8080/v1/api/calculate/', {
                    method: 'POST', 
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"fafsa": fafsa, "workStudy": workStudy, "majorId":job, "loan": loans, "scholarship": scholarship }),
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Success:', data);
                    setGraphReady(true);
                    setGraphData(data);
                    console.log(graphData);
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  })}></button>

                  {setGraphReady ? <GraphComponent data={graphData}/>: null}

            </div>
        </React.Fragment>
    );
}

export default Costs;