import { useParams } from "@tanstack/react-router"
import { Employee } from "../api/employee.api"

type EmployeeDetailsProps = {
    employee: Employee
}

export function EmployeeDetails({ employee }: EmployeeDetailsProps) {
  const { employeeId, projectId } = useParams({ strict: false })
  return (
    <div className="p-2">
      <h2 className='text-xl'>Employee Details</h2>
      <p>
        <strong>ID:</strong> {employeeId}
      </p>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Position:</strong> {employee.position}
      </p>
      <p>
        <strong>Skills:</strong> {employee.skills.join(', ')}
      </p>
    </div>
  )
}