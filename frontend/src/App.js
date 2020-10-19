import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import './App.css';
// Import components
import Chart from './components/Chart';
import Form from './components/Form';
import Item from './components/Item';

const App = () => {

  const [info, setInfo] = useState([]);
  const [target, setTarget] = useState('Mochi');

  // Create function to fetch data from API
  const fetchInfo = async () => {
    const items = await fetch('http://localhost:5000/api');
    setInfo(await items.json());
  };

  // Trigger fetch function on render
  useEffect(() => {
    fetchInfo();
  }, []);

  // Prepare data for passing props
  // Sort JSON array by date
  const sortedInfo = info.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
  // Send by per-item
  const items = sortedInfo.map(i => <Item info={i} key={i._id} fetchInfo={fetchInfo} />)


  const handleSelect = (e, data) => {
    setTarget(data.value);
    console.log(target);
  }

  const n = info.map(i => i.name)
  const unique = n.filter((v, i, a) => a.indexOf(v) === i);
  
  const ops = unique.map(i => ({key: i, text: i, value: i}))

  return (

    <div className="App">
      <Switch>

        <Route path='/' exact>
          <h1>Track your weight!</h1>
          
          <Form fetchInfo={fetchInfo}/>
          <div className='dropdown'>
            <Dropdown
              placeholder='Select from others to check out their progress!'
              fluid
              selection
              options={ops}
              onChange={handleSelect}
            />
          </div>
          
          {target ? <Chart sortedInfo={sortedInfo} target={target} /> : 'Select name!'}

          <Link to='/list' className='home-link'>See all data</Link>
        </Route>

        <Route path='/list'>
          <h1>Complete list </h1>
          <table className='ui celled table'>
            <thead>
              <tr>
                {['Name', 'Weight', 'Date', 'Delete'].map(i => <th key={i}>{i}</th>)}
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
          <Link to='/'>Go back to home </Link>
        </Route>

      </Switch>
    </div>
  );
}

export default App;