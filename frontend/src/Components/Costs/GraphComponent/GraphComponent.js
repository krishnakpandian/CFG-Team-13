import React from 'react'
import './GraphComponent.scss';
import {Bar} from 'react-chartjs-2'; 

const GraphComponent = (props) => {
    console.log(props);
    
    
    const timeToPayDebt = {
        labels: ['Paul Quinn', 'National Average'],
        datasets: [
          {
            yAxisID: 'first-y-axis',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [props.data.quinnYTP, props.data.otherYTP]
          }
        ]
      }
      const totalDebt = {
        labels: ['Paul Quinn', 'National Average'],
        datasets: [
          {
            yAxisID: 'first-y-axis',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [props.data.quinnASD, props.data.otherASD]
          }
        ]
      }
      const monthlyPayment = props.data.monthlyRate;

    return (
      <div class = "graph-container">
        <div class = "title">Monthly Payment: ${monthlyPayment}.00</div>
        <div class = "graphs">
          <div class = "graph1">
        <Bar
          data={timeToPayDebt}
          options={{
            legend: {
              display: false
            },
              responsive: true,
              maintainAspectRatio: false,
            title:{
              display:true,
              text:'Time Spent Paying Off Student Loans',
              fontColor: "#ffffff",
              backgroundColor: "#222222",
              fontSize:20
            },
            scales: {
                yAxes: [{
                    id: 'first-y-axis',
                    type: 'linear',
                    ticks : {
                        min: 0,
                        max: 30
                    },
                    beginAtZero: true
                }]
            }
          }}
        />
        </div>
        <div class = "graph2">
        <Bar
        data={totalDebt}
        
        options={{
          legend: {
            display: false,
        },
          responsive: true,
          maintainAspectRatio: false,
          title:{
            fontColor: "#ffffff",
            display:true,
            text:'Total Debt',
            fontSize:20
          },
          scales: {
            yAxes: [{
                id: 'first-y-axis',
                type: 'linear',
                ticks : {
                    min: 0,
                    max: 120000
                },
                beginAtZero: true
            }]
        }
        }}
      />
       
      </div>
      </div>
      <div class = "info">
       You will spend {props.data.otherYTP} 
       paying off your debt at the average 
       private college considering your projected 
       income and financial aid. Paul Quinn will 
       save you ${props.data.otherASD - props.data.quinnASD}.00 
       in the long run. Still looking unachievable? Try work study
       or apply for one of our scholarships.
     </div>
      </div>
      
 
     
    );
}

export default GraphComponent;
