import { createFileRoute } from '@tanstack/react-router'
import { getEmployees } from '../api/employee.api';

export const Route = createFileRoute('/employees')({
  component: EmployeesComponent,
  loader: () => getEmployees(),
  // preload: false
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
