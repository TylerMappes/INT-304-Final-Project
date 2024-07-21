import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import Header from './Header';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <EmployeeForm onSubmit={addEmployee} />
              <div className="save-button-container">
                <button onClick={saveData}>Save Data</button>
              </div>
              <EmployeeList employees={employees} />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
