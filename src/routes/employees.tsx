import { createFileRoute } from '@tanstack/react-router'
import { getEmployees } from '../api/employee.api';

export const Route = createFileRoute('/employees')({
  component: EmployeesComponent,
  // loader: async () => [
  //   { id: 1, firstName: 'John', lastName: 'Doe' },
  //   { id: 2, firstName: 'Jane', lastName: 'Smith' },
  //   { id: 3, firstName: 'Alice', lastName: 'Johnson' },
  //   { id: 4, firstName: 'Bob', lastName: 'Brown' },
  //   { id: 5, firstName: 'Charlie', lastName: 'White' },
  // ]
  loader: () => getEmployees()
})

function EmployeesComponent() {
  const employees = Route.useLoaderData();

  return (
    <div className="p-2">
      <h1 className='text-2xl'>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
