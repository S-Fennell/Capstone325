import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function Navbar(){
  const [selectedValue, setSelectedValue] = useState(''); // State to hold the selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on change
  };

    return(
      <nav className="navbar">
        <div class="fit">
            <h1>Fit 🏃🏽‍♂️‍➡️🏃🏼‍♀️‍➡️ Life</h1>
        </div>
        
        <div className="links">
            <Link className='anc' to="/">Home</Link>
            <Link className='anc' to="/diet">Diet & Nutrition</Link>
            <Link className='anc' to="/fatlose">Fat Loss</Link>
            
             <label htmlFor="dropDown"></label>
            <select className="dropDown" value={selectedValue} onChange={handleChange}>
                <option value="">Types of Training</option>
                <option value="Build Endurance"><Link to="">Build Endurance</Link></option>
                <option value="Build Muscle"><Link to="">Build Muscle</Link></option>
                <option value="Build Strength"><Link to="">Build Strength</Link></option>
            </select>
            <Link className='anc, sign' to="">Sign Up |</Link>
            <Link to="/signIn.html"> Sign In</Link>
            {selectedValue && <p>Let's {selectedValue}</p>}
            
        </div>
      </nav>
    );
}

export default Navbar