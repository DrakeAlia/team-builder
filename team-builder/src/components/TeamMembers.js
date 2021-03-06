import React from 'react';

// Render your list of team members
const TeamMembers = props => {

    return (
        <div>
            {props.members.map(member => (
                <div className='card' key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers; 