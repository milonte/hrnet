import { createSlice } from '@reduxjs/toolkit'
import EmployeeInterface from '../interfaces/EmployeeInterface'

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: []
    },
    reducers: {
        addEmployee: (
            state: { employees: EmployeeInterface[] },
            actions: { payload: any, type: string }) => {
            const employee: EmployeeInterface = {
                firstName: actions.payload.firstName,
                lastName: actions.payload.lastName,
                dateOfBirth: actions.payload.dateOfBirth,
                startDate: actions.payload.startDate,
                street: actions.payload.street,
                city: actions.payload.city,
                state: actions.payload.state,
                zipCode: actions.payload.zipCode,
                department: actions.payload.department
            }
            state.employees.push(employee)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer