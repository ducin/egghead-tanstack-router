import { API_URL } from "./config";

export type Employee = {
  id: number;
  name: string;
  position: string;
  skills: string[];
};

export const getEmployees = async (): Promise<
  Employee[]
> => {
  const params = new URLSearchParams(); // play with it...
  const response = await fetch(
    `${API_URL}/employees?${params.toString()}`
  );
  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
};

export const getEmployeeById = async (
  id: Employee["id"]
): Promise<Employee> => {
  const response = await fetch(
    `${API_URL}/employees/${id}`
  );
  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
};
