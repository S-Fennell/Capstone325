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
            <Link to="/diet"><div className='anc'>Diets</div></Link>
            <Link to="/lifestyle"><div className='anc'>Lifestyle Habits</div></Link>
            <Link to="/cardio"><div className='anc'>Cardio</div></Link>
            <Link to="/strength"><div className='anc'>Build Strength</div></Link>
            <Link to="/muscle"><div className='anc'>Build Muscle</div></Link>
            <Link to="/fatloss"><div className='anc'>Fat Loss</div></Link>
           
            <Link to="/subscribe"><div className='anc, sign'>Subscribe</div></Link>
          
            {selectedValue && <p>Let's {selectedValue}</p>}
            
        </div>
      </nav>
    );
}

export default Navbar