import React from 'react'
import './GraphComponent.scss';
import {Bar} from 'react-chartjs-2'; 
import BubbleChart from '@weknow/react-bubble-chart-d3';
const GraphComponent = (props) => {
    console.log(props);
    
    
    const timeToPayDebt = {
        labels: ['Paul Quinn', 'National Average'],
        datasets: [
          {
            yAxisID: 'y-axis-2',
            xAxisID: 'first-x-axis',
            backgroundColor: ["#421C52", "teal"],
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
            backgroundColor: ["#421C52", "teal"],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [props.data.quinnASD, props.data.otherASD]
          }
        ]
      }
      const monthlyPayment = props.data.monthlyRate;
      const pay = props.data.pay;
      const quinnTotalDebt = props.data.quinnASD;
      const otherTotalDebt = props.data.otherASD;
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
                    gridLines: {
                      color: "white"
                    },
                    ticks : {
                        fontColor: "white",
                        fontSize: 14,
                        min: 0,
                        max: 30
                    }
                }],
                xAxes : [{
                  id: 'first-x-axis',
                  ticks : {
                    fontColor: "white",
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
                gridLines: {
                  color: "white"
                },
                ticks : {
                    min: 0,
                    max: 150000,
                    fontColor: "white",
                    stepSize: 3000,
                    fontSize: 14
                },
                beginAtZero: true
            }],
            xAxes : [{
              id: 'first-x-axis',
              ticks : {
                fontColor: "white",
                fontSize: 14
              }
            }],
        }
        }}
      />
       
      </div>
      <div class = "graph3">
        <BubbleChart
  graph= {{
    zoom: .5,
    offsetX: .1,
    offsetY: -0.01,
  }}
  width={700}
  overflow={true}
  height={400}
  padding={0} // optional value, number that set the padding between bubbles
  showLegend={false} // optional value, pass false to disable the legend.
  legendPercentage={20} // number that represent the % of with that legend going to use.
  legendFont={{
        family: 'Arial',
        size: 12,
        color: '#000',
        weight: 'bold',
      }}
  labelFont={{
        family: 'Arial',
        size: 16,
        color: '#fff',
        weight: 'bold',
      }}
  valueFont={{
        family: 'Arial',
        size: 0,
        color: '#fff',
        weight: 'bold',
      }}
  
  
  data={[
    { label: 'Income', value:  pay},
    { label: 'QC Debt', value: quinnTotalDebt },
    { label: 'Average Debt', value: otherTotalDebt }
  ]}
/>
      
      </div>
      </div>
      </div>
 
     
    );
}

export default GraphComponent;
