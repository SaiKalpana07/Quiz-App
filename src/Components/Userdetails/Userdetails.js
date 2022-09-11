
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Userdetails.css";
const Login = () => {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [education, setEducation] = useState('');
  let navigate = useNavigate();

  const handleClick = () => {
    if (name === null || name === "") {
      alert("Name can't be blank");
      return false;
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, dob, education)

  };

  return (
    <div className='section'>
      <form className='form' onChange={handleClick}> 
      



        <div className='Form-container'>
          <h1>Login</h1>
          <label>
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>
            DOB
          </label>
          <input
            type='text'
            id='name'
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />

          <label for="education">Education:</label>
          <select id="edu" name="edu">
            <option value="PG">PG</option>
            <option value="UG">UG</option>
            <option value="Diploma">Diploma</option>
            <option value="HSC">HSC</option>
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          </select>
          <div className="button2">
            <button type="submit" onClick={()=>{handleSubmit()}}>Submit</button>
            <button type="button" onClick={() => { navigate("/Question") }} class="button2">Take Quiz</button>
          </div>
        </div>
      </form>
    </div>


  );
};

export default Login;
