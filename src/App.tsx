import React from 'react';
import './App.css';
import DateTimePicker from '@milonte/datetimepicker/dist'
import { Link } from 'react-router-dom';
import { states } from './datas/states';
function App() {

  function saveEmployee(): void {
    const formDatas = new FormData(
      document.getElementById('create-employee') as HTMLFormElement
    )

    // set values to redux
  }

  return (
    <div className="App">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={'/employees'}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name='first-name' />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name='last-name' />

          <label htmlFor="date-of-birth_input">Date of Birth</label>
          <DateTimePicker id='date-of-birth'
            datePicker
            maxDate={new Date()}
          />

          <label htmlFor="start-date_input">Start Date</label>
          <DateTimePicker id='start-date' datePicker
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" name='street' />

            <label htmlFor="city">City</label>
            <input id="city" type="text" name='city' />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {states.map((state: { name: string, abbreviation: string }, key: number) => {
                return <option key={key} value={state.abbreviation}>{state.name}</option>
              })}
            </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" name='zip-code' />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={() => { saveEmployee() }}>Save</button>
      </div>
      <div id="confirmation" className="modal">Employee Created!</div>
    </div>

  );
}

export default App;
