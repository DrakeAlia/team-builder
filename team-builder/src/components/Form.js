import React, { useState } from 'react';

// In `Form.js` build out your markup
const Form = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };
// Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''});  
    };
    
// Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination)
return (
    <form onSubmit={submitForm}>
    <div>
        <label htmlFor='name'>Full Name</label>
        <input id='name' type='text' name='name' placeholder='Full Name' onChange={handleChanges} value={member.name} />
    </div>

    <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' placeholder='email address' onChange={handleChanges} value={member.email} />
    </div>

    <div>
        <label htmlFor='select'>Role</label>
         <select id='role' name='role' placeholder='select role' onChange = {handleChanges} value={member.role}>
                <option/>
                <option>UI Designer</option>
                <option>Frontend Engineer</option>
                <option>Backend Engineer</option>
                <option>Data Scientist</option>
            </select>
    </div>

        <button type='submit'>Add Member</button>
    </form>
)
};

export default Form; 