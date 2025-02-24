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
  const employeeDetails = Route.useLoaderData()
  return (
    <div className="p-2">
      <h2 className='text-xl'>Employee Details</h2>
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
