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
            <Link to="/"><div className='anc' href="/">Home</div></Link>
            <Link to="/diet"><div className='anc'>Diet & Nutrition</div></Link>
            <Link to="/fatlose"><a className='anc' href="/fatlose">Fat Loss</a></Link><a className='anc' href="/fatlose">Fat Loss</a>
            <Link to="/strength"><a className='anc' href="/strength">Build Strength</a></Link>
            
             <label htmlFor="dropDown"></label>
            <select className="dropDown" value={selectedValue} onChange={handleChange}>
                <option value="">Types of Training</option>
                <option value="Build Endurance"><a href="">Build Endurance</a></option>
                <option value="Build Muscle"><a href="">Build Muscle</a></option>
                <option value="Build Strength"><a href="">Build Strength</a></option>
            </select>
            <a className='anc, sign' href="/subscribe">Subscribe</a>
          
            {selectedValue && <p>Let's {selectedValue}</p>}
            
        </div>
      </nav>
    );
}

export default Navbar