import React from 'react';
import { Line } from 'react-chartjs-2';


const Chart = (props) => {

  const newInfo = props.sortedInfo.filter(o => o.name === props.target)

  const w = newInfo.map(i => i.weight);
  const d = newInfo.map(i => i.date.slice(0, 10));

  const data = {
    labels: d,
    datasets: [{
      label: 'Weight in Pounds',
      data: w,
      fill: false,
      backgroundColor: '#F46D2A',
      borderColor: '#FCD7C5',
      lineTension: 0,
      showLine: true
    }]
  }

  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#F46D2A",
      fontSize: 14
    }
  };

  const options = {
    showScale: true,
    pointDot: true,
    maintainAspectRatio: false,

    title: {
      display: true,
      text: `${props.target}'s Weight`
    },

    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true,
              min: 0,
              max: 120    
          }
        }]
     }
  }


  return (
    <>

    <div className='chart'>

      <Line data={data} legend={legend} options={options} height={400}/>
    </div>
    </>
  );
}

export default Chart;