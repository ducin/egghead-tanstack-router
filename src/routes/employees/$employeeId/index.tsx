import { createFileRoute, useParams } from '@tanstack/react-router'
import { getEmployeeById } from '../../../api/employee.api'
import { EmployeeDetails } from '../../../components/EmployeeDetails'

export const Route = createFileRoute('/employees/$employeeId/')({
  component: RouteComponent,
  loader: ({ params: { employeeId } }) => {
    const id = Number(employeeId)
    return getEmployeeById(id)
  }
})

function RouteComponent() {
  const employeeDetails = Route.useLoaderData()
//   const { employeeId } = Route.useParams()
  return <EmployeeDetails employee={employeeDetails} />
}
