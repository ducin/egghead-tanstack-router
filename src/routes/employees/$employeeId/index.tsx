import { createFileRoute, notFound } from '@tanstack/react-router'
import { getEmployeeById } from '../../../api/employee.api'

export const Route = createFileRoute('/employees/$employeeId/')({
  component: RouteComponent,
  loader: async ({ params: { employeeId } }) => {
    const id = Number(employeeId)
    try {
      return await getEmployeeById(id)
    } catch (e) {
      throw notFound()
    }
  },
  notFoundComponent: () => {
    return <p>This employee doesnt exist</p>
  },
  onEnter(match) {
    console.log('ENTER', {match})
  },
  onStay(match) {
    console.log('STAY', {match})
  },
  onLeave(match) {
    console.log('LEAVE', {match})
  },
})

function RouteComponent() {
  const employeeDetails = Route.useLoaderData()
  const { employeeId } = Route.useParams()
  return (
    <div className="p-2">
      <h2 className='text-xl'>Employee Details</h2>
      <p>
        <strong>ID:</strong> {employeeId}
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

// function RouteComponent() {
//   const employeeDetails = Route.useLoaderData()
//   const { employeeId } = Route.useParams()
//   return <EmployeeDetails employee={employeeDetails} />
// }
