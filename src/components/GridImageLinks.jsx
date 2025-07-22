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
        <div class="navBox">
          <div>
            <div className='box'>
             <Link to="/diet"><img className='box2' src={diet} alt="" /></Link> 
              <h1>The Best Diet</h1>
            </div>

            <Link to="/strength"><div className='box'><img className='box2' src={buildStrength} alt="" /><h1>Build Strength</h1></div></Link>
            <Link><div className='box'><img className='box2' src={buildMuscle} alt="" /><h1>Building Muscle</h1></div></Link>
          </div>
          <div>
            <Link to=""><div className='box'><img className='box2' src={lifeStyle} alt="" /><h1>Life Style Habbits</h1></div></Link>
            <Link to=""><div className='box'><img className='box2' src={cardio} alt="" /><h1>Cardio</h1></div></Link>
            <Link to=""><div className='box'><img className='box2' src={fatloss} alt="" /><h1>Fat lose</h1></div></Link>
          </div>
        </div>
    </div>
    );
}

export default GridImageLink