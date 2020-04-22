import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import TeamMembers from "./components/TeamMembers";

import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState([
    {
    id: 1,
    name: 'Paul Atreides',
    email: 'ArtMan@Dune.com',
    role: 'Data Scientist'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <Form addNewMember={addNewMember}/>
          <TeamMembers members={members}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;