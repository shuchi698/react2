import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {

const [employees, setEmployees] = useState([]);

const addEmployeeHandler = (employee) => {
  setEmployees([...employees, employee]);
}

  return (
    <div className="App">
      <Form  addEmployeeHandler={addEmployeeHandler}/>
      <List employees={employees}/>
    </div>
  );
}

export default App;
