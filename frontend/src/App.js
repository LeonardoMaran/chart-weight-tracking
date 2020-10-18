import React, { useState, useEffect } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';

const App = () => {
  return (
    <div className="App">
      Hello this is the frontend!
      <List />
    </div>
  );
}

const List = () => {

  const [info, setInfo] = useState([]);

  const fetchInfo = async () => {
    const items = await fetch('http://localhost:5000/posts');
    setInfo(await items.json());
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  const d = info.map(i => i.weight)

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: '# of Votes',
      data: d,
      fill: false,
      backgroundColor: '#742774',
      lineTension: 0
    }]
  }

  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };

  const options = {
    showScale: true,
    pointDot: true,
    maintainAspectRatio: false,

    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    },

    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true,
              min: 40,
              max: 120    
          }
        }]
     }
  }

  return (
    <div style={{ width: `50%`}}>
      <Line data={data} legend={legend} options={options} width={1} height={500}/>
    </div>
  );
}


export default App;
