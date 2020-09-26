import React from 'react'
import './GraphComponent.scss';
import {Bar} from 'react-chartjs-2'; 

const GraphComponent = (props) => {
    console.log(props);
    
    
    const timeToPayDebt = {
        labels: ['Paul Quinn', 'National Average'],
        datasets: [
          {
            yAxisID: 'y-axis-2',
            xAxisID: 'first-x-axis',
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
            xAxisID: 'first-x-axis',
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
        <div class = "title">Monthly Payment: ${monthlyPayment}</div>
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
                    id: 'y-axis-2',
                    type: 'linear',
                    ticks : {
                        fontColor: "black",
                        fontSize: 14,
                        min: 0,
                        max: 30
                    }
                }],
                xAxes : [{
                  id: 'first-x-axis',
                  ticks : {
                    fontColor: "black",
                    fontSize: 14
                  }
                }],
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
                    max: 150000,
                    fontColor: "black",
                    stepSize: 3000,
                    fontSize: 14
                },
                beginAtZero: true
            }],
            xAxes : [{
              id: 'first-x-axis',
              ticks : {
                fontColor: "black",
                fontSize: 14
              }
            }],
        }
        }}
      />
       
      </div>
      </div>
      
      </div>
      
 
     
    );
}

export default GraphComponent;
