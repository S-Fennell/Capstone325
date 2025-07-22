import { useState } from 'react'
import { Link } from 'react-router-dom';

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
            <Link to="/"><div className='anc'>Home</div></Link>
            <Link to="/diet"><div className='anc'>Diet & Nutrition</div></Link>
            <Link to="/fatloss"><div className='anc'>Fat Loss</div></Link>
            <Link to="/strength"><div className='anc'>Build Strength</div></Link>
            
             <label htmlFor="dropDown"></label>
            <select className="dropDown" value={selectedValue} onChange={handleChange}>
                <option value="">Types of Training</option>
                <option value="Build Endurance"><a href="">Build Endurance</a></option>
                <option value="Build Muscle"><a href="">Build Muscle</a></option>
                <option value="Build Strength"><a href="">Build Strength</a></option>
            </select>
            <Link to="/subscribe"><div className='anc, sign'>Subscribe</div></Link>
          
            {selectedValue && <p>Let's {selectedValue}</p>}
            
        </div>
      </nav>
    );
}

export default Navbar