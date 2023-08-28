import React, { useState } from 'react';
import DateTimePicker from '@milonte/datetimepicker/dist'
import { Link } from 'react-router-dom';
import { states } from './datas/states';
import { useDispatch } from 'react-redux';
import { addEmployee } from './redux/employeeSlice';
import { AppDispatch } from './redux/store';
import './App.css';
import { Box, Modal, Typography } from '@mui/material';

function App() {

  const dispatch: AppDispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function saveEmployee(): void {
    const randomId: string = (Math.random() + 1).toString(36).substring(2);
    const form = document.getElementById('create-employee') as HTMLFormElement
    const formDatas = new FormData(form)

    const formChildrens: NodeListOf<HTMLInputElement | HTMLSelectElement> = form.querySelectorAll(
      'input[form="create-employee"], select[form="create-employee"]'
    )

    if (isValid(formChildrens)) {
      dispatch(addEmployee({
        id: randomId,
        firstName: formDatas.get('first-name'),
        lastName: formDatas.get('last-name'),
        dateOfBirth: formDatas.get('date-of-birth'),
        startDate: formDatas.get('start-date'),
        street: formDatas.get('street'),
        city: formDatas.get('city'),
        state: formDatas.get('state'),
        zipCode: formDatas.get('zip-code'),
        department: formDatas.get('department')
      }))
      form.reset()
      setShow(true)
    }

  }

  function isValid(elts: NodeListOf<HTMLInputElement | HTMLSelectElement>): boolean {
    let isValid: boolean = true
    elts.forEach((elt: HTMLInputElement | HTMLSelectElement) => {
      if (!elt.validity.valid) {
        isValid = false
        elt.classList.add('novalid')
        elt.classList.remove('valid')
      }
      else {
        elt.classList.add('valid')
        elt.classList.remove('novalid')
      }
    })

    return isValid
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
          <input type="text" id="first-name" required minLength={2} form='create-employee' name='first-name' />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" required minLength={2} name='last-name' form='create-employee' />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DateTimePicker
            maxDate={new Date()}
            inputNodes={{
              id: 'date-of-birth',
              name: 'date-of-birth',
              form: 'create-employee',
              required: true
            }}
          />

          <label htmlFor="start-date">Start Date</label>
          <DateTimePicker
            inputNodes={{
              id: 'start-date',
              name: 'start-date',
              form: 'create-employee',
              required: true
            }} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" name='street' form='create-employee' required minLength={2} />

            <label htmlFor="city">City</label>
            <input id="city" type="text" name='city' form='create-employee' required minLength={2} />

            <label htmlFor="state">State</label>
            <select name="state" id="state" form='create-employee'>
              {states.map((state: { name: string, abbreviation: string }, key: number) => {
                return <option key={key} value={state.abbreviation}>{state.name}</option>
              })}
            </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" name='zip-code' form='create-employee' required />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department" form='create-employee'>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>

          <button className='save-btn' onClick={() => { saveEmployee() }}>Save</button>
        </form>
      </div>

      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title">
            Employee Created !
          </Typography>
        </Box>
      </Modal>
    </div >

  );
}

export default App;
