import { createFileRoute } from '@tanstack/react-router'
import { getEmployeeById } from '../../../api/employee.api'

export const Route = createFileRoute('/employees/$employeeId/')({
  component: RouteComponent,
  loader: ({ params: { employeeId } }) => {
    const id = Number(employeeId)
    return getEmployeeById(id)
  }
})

function RouteComponent() {
  // const employeeDetails = {
  //   id: 1,
  //   name: 'John Doe',
  //   position: 'Software Engineer',
  //   department: 'Development',
  //   email: 'john.doe@example.com',
  // }
  const employeeDetails = Route.useLoaderData()

  return (
    <div className="p-2">
      <h1 className='text-2xl'>Employee Details</h1>
      <p>
        <strong>ID:</strong> {employeeDetails.id}
      </p>
      <p>
        <strong>Name:</strong> {employeeDetails.name}
      </p>
      <p>
        <strong>Position:</strong> {employeeDetails.position}
      </p>
      <p>
        <strong>Skills:</strong> {employeeDetails.skills.join(', ')}
      </p>
    </div>
  )
}
