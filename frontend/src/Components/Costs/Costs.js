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
                <div class = "box">
                  Major <br/>
                <select value = {job} onChange= {e => setJobs(e.target.value)}>
                    {JOB_LIST.map((job) => {
                        return(
                          <option value={job.value}> {job.viewValue}</option>  
                        );
                    })}
                </select>
                </div>
                <div class = "box">
                  Projected Annual FAFSA Grants 
                  <br/>
                <select value = {fafsa} onChange= {e=> setFafsa(e.target.value)}>
                    {FAFSA_LIST.map((fafsa) => {
                        return(
                          <option value = {fafsa.value} > {fafsa.viewValue}</option>  
                        );
                    })}
                </select>
                </div>
                <div class = "box">
                  Percentage of Income Paid to Loans Post Graduation <br/>
                <select value = {loans} onChange= {e=> setLoans(e.target.value)}>
                {LOAN_LIST.map((loan) => {
                    return(
                      <option value = {loan.value}> {loan.viewValue}</option>  
                    );
                })}
                </select>
                </div>
                <div class = "box">
                  Participate in Work Study <br/>
                <input type="radio"  name="true" value='true' checked ={workStudy === true} onChange={e => setWork(true)}/>
                <label for="true">Yes</label>
                <input type="radio"  name="false" value='false' checked ={workStudy === false} onChange={e => setWork(false)}/>
                <label for="false">No</label>
                </div>

                <div class = "box">
                  Scholarships Awarded Annually <br/>
                <select value = {scholarship} onChange= {e=> setScholarship(e.target.value)}>
                {SCHOLARSHIP_LIST.map((scholarship) => {
                    return(
                      <option value={scholarship.value}> {scholarship.viewValue}</option>  
                    );
                })}
                


                </select>
                </div>
                <div class = "submit-button">
                <button onClick= { e =>  
                    fetch('http://localhost:8080/v1/api/calculate/', {
                    method: 'POST', 
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"fafsa": fafsa, "workStudy": workStudy, "majorId":job, "loan": loans, "scholarship": scholarship }),
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log(JSON.stringify({"fafsa": fafsa, "workStudy": workStudy, "majorId":job, "loan": loans, "scholarship": scholarship }))
                    setGraphReady(true);
                    setGraphData(data);
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  })}>Calculate!</button>
                  </div>
                  Going to college is possible! <br/>
                  <a href = "https://studentaid.gov/h/apply-for-aid/fafsa/">calculate fafsa here</a>
                  <br/>
                  <a href = "https://www.pqc.edu/financial-aid/">see scholarships here</a>
                  
            
            
              </div>
              
            <div class = "graph">
                  {ready ? <GraphComponent data={graphData}/>: <div>"No Data"</div>}  
          </div>
          <div class = "info">
          { ready ? <div>
                    You will spend {graphData.otherYTP} years
                    paying off your debt if you attend the average 
                    private college considering your projected 
                    income and financial aid. Paul Quinn will 
                    save you ${graphData.otherASD - graphData.quinnASD} in the long run. Still looking unachievable? Try work study
                    or apply for one of our scholarships.
                  </div>
                  :
                  <div>Enter your financial plans on the left side of the screen
                    to see budgeting information and to compare Paul Quinn to other private
                    institutions.</div>}
          </div>
             
        </React.Fragment>
    );
}

export default Costs;