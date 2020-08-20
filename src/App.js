import React, { useState } from 'react';
import Form from './components/form'
import Results from './components/results'
import './App.css';

function App() {
  const[state, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});
  return (
    <div className="App">
      <Form inputs={state} setForm={setForm}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
