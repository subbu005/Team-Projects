import React from 'react';
import { useState } from 'react';
import './App.css';

      const App = () => {
      // Define state variables for user inputs
      const [user, setUser] = useState({
        name: '',
        password: ''
      });
    
      // Function to handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      // Function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, like submitting it to a server
        console.log('Form submitted with data:', user);
      };
    
      return (
        <div className="login">
            <div className="ogcode">
                <p id="og">The OG Coders</p>
            </div>
            <center>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={user.name} 
            onChange={handleChange} 
          />
          <br/>
          
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={user.password} 
            onChange={handleChange} 
          />
          <br/>
    
          <button type="submit">Submit</button>
        </form>
        </center>
        </div>
      );
    };
    
export default App;

