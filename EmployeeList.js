import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeForm.css'; 

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.employeeNumber}>
            <Link to={`/employees/${employee.employeeNumber}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
