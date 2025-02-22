import * as React from 'react'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { getEmployees } from '../api/employee.api'

export const Route = createFileRoute('/employees')({
  component: EmployeesComponent,
  loader: () => getEmployees(),
})

function EmployeesComponent() {
  // const employees = [
  //   { id: 1, firstName: 'John', lastName: 'Doe' },
  //   { id: 2, firstName: 'Jane', lastName: 'Smith' },
  //   { id: 3, firstName: 'Alice', lastName: 'Johnson' },
  //   { id: 4, firstName: 'Bob', lastName: 'Brown' },
  //   { id: 5, firstName: 'Charlie', lastName: 'White' },
  // ];
  const employees = Route.useLoaderData()

  return (
    <div className="p-2">
      <h1 className='text-2xl'>Employees</h1>
      <Outlet />
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <Link
              to={`/employees/$employeeId`}
              params={{ employeeId: String(employee.id) }}
            >{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
