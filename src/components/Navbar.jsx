import { useState } from 'react'

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
            <a className='anc' href="/">Home</a>
            <a className='anc' href="/diet">Diet & Nutrition</a>
            <a className='anc' href="/fatlose">Fat Loss</a>
            
             <label htmlFor="dropDown"></label>
            <select className="dropDown" value={selectedValue} onChange={handleChange}>
                <option value="">Types of Training</option>
                <option value="Build Endurance"><a href="">Build Endurance</a></option>
                <option value="Build Muscle"><a href="">Build Muscle</a></option>
                <option value="Build Strength"><a href="">Build Strength</a></option>
            </select>
            <a className='anc, sign' href="">Subscribe</a>
          
            {selectedValue && <p>Let's {selectedValue}</p>}
            
        </div>
      </nav>
    );
}

export default Navbar