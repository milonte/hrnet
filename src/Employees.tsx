import React from 'react';
import './Employee.css';
import { DataGrid, GridColDef, GridComparatorFn } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import EmployeeInterface from './interfaces/EmployeeInterface';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { mockedEmployees } from './_mocks/mockedEmployees';


function Employees() {
  const employees: EmployeeInterface[] = useSelector((state: RootState) => state.employee)

  const dateComparator: GridComparatorFn<Date> = (v1, v2) =>
    Date.parse(v1.toUTCString()) - Date.parse(v2.toUTCString());

  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    {
      field: 'dateOfBirth', headerName: 'Date Of Birth', width: 100,
      type: 'date',
      valueGetter: (params) => new Date(params.row.dateOfBirth),
      sortComparator: dateComparator,
      valueFormatter: (param) => param.value.toLocaleString().split(' ')[0],
    },
    {
      field: 'startDate', headerName: 'Start Date', width: 100,
      type: 'date',
      valueGetter: (params) => new Date(params.row.startDate),
      sortComparator: dateComparator,
      valueFormatter: (param) => param.value.toLocaleString().split(' ')[0],
    },
    { field: 'street', headerName: 'Street', width: 150 },
    { field: 'city', headerName: 'City' },
    { field: 'state', headerName: 'State', width: 100 },
    { field: 'zipCode', headerName: 'Zip Code', width: 80 },
    { field: 'department', headerName: 'Department' },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div id="employee-table">
        <DataGrid
          rows={mockedEmployees}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
            sorting: {
              sortModel: [{ field: 'startDate', sort: 'desc' }],
            }
          }}
          disableColumnSelector
          disableVirtualization
          density='compact'
          pageSizeOptions={[5, 10, 25, 50, 100]}
        />
      </div>
      <Link to={'/'}>Home</Link>
    </div>

  );
}

export default Employees;
