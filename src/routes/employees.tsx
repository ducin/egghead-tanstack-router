import * as React from 'react'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/employees')({
  component: EmployeesComponent,
})

function EmployeesComponent() {
  const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie Davis' },
  ];

  return (
    <div className="p-2">
      <h3>Employees</h3>
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
      <Outlet />
    </div>
  )
}
