import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { getEmployees } from '../api/employee.api';

export const Route = createFileRoute('/employees')({
  component: EmployeesComponent,
  loader: () => getEmployees(),
  // preload: false
  staleTime: 10_000,
  // notFoundComponent: () => {
  //   return <p>This employee doesnt exist</p>
  // }
})

function EmployeesComponent() {
  const employees = Route.useLoaderData();

  return (
    <div className="p-2">
      <h1 className='text-2xl'>Employees</h1>
      <Outlet />
      <ul>
          <li key={123}>
            <Link
              to={`/employees/$employeeId`}
              params={{ employeeId: '123' }}
            >i dont exist at all</Link>
          </li>
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
