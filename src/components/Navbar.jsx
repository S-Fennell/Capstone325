import { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
  const [selectedValue, setSelectedValue] = useState(''); // State to hold the selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on change
  };

    return(
      <nav className="navbar">
        <div className="fit">
            <h1>Fit 🏃🏽‍♂️‍➡️🏃🏼‍♀️‍➡️ Life</h1>
        </div>
        
        <div className="links">
            <Link to="/"><div className='anc'>Home</div></Link>
            <Link to="/diet"><div className='anc'>Diet & Nutrition</div></Link>
            <Link to="/fatloss"><div className='anc'>Fat Loss</div></Link>
            <Link to="/strength"><div className='anc'>Build Strength</div></Link>
            
            <select className="dropDown" value={selectedValue} onChange={handleChange}>
                <option value="">Types of Training</option>
                <option value="Build Endurance"><Link to="">Build Endurance</Link></option>
                <option value="Build Muscle"><Link to="">Build Muscle</Link></option>
                <option value="Build Strength"><Link to="">Build Strength</Link></option>
            </select>
            <Link to="/subscribe"><div className='anc, sign'>Subscribe</div></Link>
          
            {selectedValue && <p>Let's {selectedValue}</p>}
            
        </div>
      </nav>
    );
}

export default Navbar