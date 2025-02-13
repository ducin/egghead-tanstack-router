import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employees/$employeeId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const employeeDetails = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Development',
    email: 'john.doe@example.com',
  }

  return (
    <div className="p-2">
      <h3>Employee Details</h3>
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
        <strong>Department:</strong> {employeeDetails.department}
      </p>
      <p>
        <strong>Email:</strong> {employeeDetails.email}
      </p>
    </div>
  )
}
