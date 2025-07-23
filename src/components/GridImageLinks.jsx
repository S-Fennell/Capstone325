import diet from '../assets/diet.png';
import buildMuscle from '../assets/buildMuscle.png';
import buildStrength from '../assets/buildStrength.png';
import lifeStyle from '../assets/lifeStyle.png';
import fatloss from '../assets/fatloss.png';
import cardio from '../assets/cardio.png';
import { Link } from 'react-router-dom';

function GridImageLink(){

//life style cardio fat lose and build strength was left there for esthetic reasons instead of getting rid of it entirely. Too much work to put in to finish on time, If I hav havs time I'll try to finsh it.
    return(
   <div className='newbody'>
      <div className="divider">
        <h1>Fit Life Topics</h1>
      </div>
        <div className="navBox">
          <div>
            <div className='box'>
             <Link to="/diet"><img className='box2' src={diet} alt="" /></Link> 
              <h1>The Best Diet</h1>
            </div>

            <Link to="/strength"><div className='box'><img className='box2' src={buildStrength} alt="" /></div></Link>
            <h1>Build Strength</h1>
            <Link><div className='box'><img className='box2' src={buildMuscle} alt="" /></div></Link>
            <h1>Building Muscle</h1>
          </div>
          <div>
            <Link to="/lifestyle"><div className='box'><img className='box2' src={lifeStyle} alt="" /></div></Link>
            <h1>Lifestyle Habits</h1>
            <Link to=""><div className='box'><img className='box2' src={cardio} alt="" /></div></Link>
            <h1>Cardio</h1>
            <Link to="/fatloss"><div className='box'><img className='box2' src={fatloss} alt="" /></div></Link>
            <h1>Fat Loss</h1>
          </div>
        </div>
    </div>
    );
}

export default GridImageLink