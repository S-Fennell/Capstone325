import diet from '../assets/diet.png';
import buildMuscle from '../assets/buildMuscle.png';
import buildStrength from '../assets/buildStrength.png';
import lifeStyle from '../assets/lifeStyle.png';
import fatloss from '../assets/fatloss.png';
import cardio from '../assets/cardio.png';

function GridImageLink(){


    return(
            <div className='newbody'>
        <div class="navBox">
          <div>
            <div className='box'>
              <img className='box2' src={diet} alt="" />
              <h1>The Best Diet</h1>
            </div>

            <div className='box'><img className='box2' src={buildStrength} alt="" /><h1>Build Strength</h1></div>
            <div className='box'><img className='box2' src={buildMuscle} alt="" /><h1>Building Muscle</h1></div>
          </div>
          <div>
            <div className='box'><img className='box2' src={lifeStyle} alt="" /><h1>Life Style Habbits</h1></div>
            <div className='box'><img className='box2' src={cardio} alt="" /><h1>Cardio</h1></div>
            <div className='box'><img className='box2' src={fatloss} alt="" /><h1>Fat lose</h1></div>
          </div>
        </div>
    </div>
    );
}

export default GridImageLink