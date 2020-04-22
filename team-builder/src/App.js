import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Team from './Team';

function App() {
  const [teamMember, setTeamMember] = useState([{
    id: 0,
    name: 'Kylo Ren',
    email: 'kyren@firstorder.com',
    role: 'Intern',

    id: 1,
    name: 'Leon Kennedy',
    email: 'leonsken@raccooncity.com',
    role: 'Cop',

    id: 2,
    name: 'Geralt of Rivia',
    email: 'grivia@whitewolf.com',
    role: 'Monster Slayer',

    id: 3,
    name: 'Paul Atreides',
    email: 'paulatr@dune.com',
    role: 'Part-time Messiah',

    id: 4,
    name: 'Link',
    email: 'mrfairy@hyrule.com',
    role: 'Full-time Hero',

  }]);

    const addTeamMember = teammate => {
      const newTeammate = {
        id: Number.now(),
        name: teammate.name,
        email: teammate.email,
        role: teammate.role,
      };
      setTeamMember ([...teammate, newTeammate]);
    };


  return (
    <div className="App">
    <h1>My Team</h1>
    <Form addTeamMember={addTeamMember} />
    <Team teammate={teammate} />
  </div>
  );
}

export default App;
