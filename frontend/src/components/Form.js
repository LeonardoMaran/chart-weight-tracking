import React, { useState } from 'react';
// import { prependOnceListener } from '../../../models/Mochi';

const Form = (props) => {

  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, weight: weight, date: date })
    });

    props.fetchInfo();
    setName('');
    setWeight('');
    setDate('');
    
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="inline fields">
        <div className="five wide field">
          <label>Enter</label>
          <input type="text" value={name} placeholder='Enter name' onChange={e => setName(e.target.value)}/>
        </div>
        <div className="three wide field">
          <input type="text" value={weight} placeholder='Enter weight' onChange={e => setWeight(e.target.value)}/>
        </div>
        <div className="five wide field">
          <input type="date" onChange={e => setDate(e.target.value)}/>
        </div>
        <button className="ui orange right labeled icon button" type='submit'>
          <i className="plus icon"></i>
          Add
        </button>
      </div>
    </form>
  )
}

export default Form;