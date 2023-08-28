import { states } from "../datas/states";
import EmployeeInterface from "../interfaces/EmployeeInterface";

export const mockedEmployees: EmployeeInterface[] = [
    {
        id: 'sdfsbh211512sdg',
        firstName: 'Thierry',
        lastName: 'Desproges',
        dateOfBirth: '01/28/1962',
        startDate: '07/30/2003',
        street: '10st of street',
        city: 'Old York',
        state: states[20].name,
        zipCode: 12345,
        department: 'Sales'
    }, {
        id: 'hfhfhsr15451h',
        firstName: 'Henry',
        lastName: 'Patrick',
        dateOfBirth: '01/30/1985',
        startDate: '07/30/2012',
        street: '11st of street',
        city: 'Delhi',
        state: states[15].name,
        zipCode: 154131,
        department: 'Legal'
    }, {
        id: 'sdfsbgsdhd5h211512sdg',
        firstName: 'Jamy',
        lastName: 'Paris',
        dateOfBirth: '01/25/1982',
        startDate: '04/10/2020',
        street: '1251st of street',
        city: 'Melun',
        state: states[0].name,
        zipCode: 25,
        department: 'Marketing'
    }, {
        id: 'sdfsbh211dgj55512sdg',
        firstName: 'Henry',
        lastName: 'Bezos',
        dateOfBirth: '01/24/1962',
        startDate: '07/29/2003',
        street: '2st of street',
        city: 'Old Tork',
        state: states[14].name,
        zipCode: 12345,
        department: 'Marketing'
    }, {
        id: 'jkdthgw5154d',
        firstName: 'Annie',
        lastName: 'Julian',
        dateOfBirth: '01/10/2002',
        startDate: '07/10/2021',
        street: 'Place de la république',
        city: 'Paris',
        state: states[19].name,
        zipCode: 93000,
        department: 'Marketing'
    }, {
        id: 'sdfsbhhfk211dgj2sdg',
        firstName: 'Jessica',
        lastName: 'Rabbit',
        dateOfBirth: '01/10/1988',
        startDate: '07/29/1999',
        street: '2552st of place',
        city: 'Tokyo',
        state: states[9].name,
        zipCode: 4561,
        department: 'Marketing'
    },
]