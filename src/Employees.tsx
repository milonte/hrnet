import React from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimePicker from '@milonte/datetimepicker/dist'
import { Link } from 'react-router-dom';
function Employees() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to={'/'}>Home</Link>
    </div>

  );
}

export default Employees;
