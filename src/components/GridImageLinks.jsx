import diet from "../assets/diet.png";
import buildMuscle from "../assets/buildMuscle.png";
import buildStrength from "../assets/powerWoman.png";
import lifeStyle from "../assets/lifeStyle.png";
import fatloss from "../assets/fatloss.png";
import cardio from "../assets/coupleCardio.jpeg";
import { Link } from "react-router-dom";

function GridImageLink() {
  //life style cardio fat lose and build strength was left there for esthetic reasons instead of getting rid of it entirely. Too much work to put in to finish on time, If I hav havs time I'll try to finsh it.
  return (
    <div className="newbody">
      <div className="divider">
        <h1>Fit Life Topics</h1>
      </div>
      <div className="navBox">
        <div>

          <div className="box">
            <Link to="/diet">
              <img className="box2" src={diet} alt="" />
            </Link>
            <h1>The Best Diet</h1>
          </div>

          
            <div className="box">
              <Link to="/strength">
              <img className="box2" src={buildStrength} alt="" />
              </Link>
              <h1>Build Strength</h1>
            </div>
          
          
          
            <div className="box">
              <Link to="muscle">
              <img className="box2" src={buildMuscle} alt="" />
              </Link>
              <h1>Building Muscle</h1>
            </div>
            
          
        </div>
        <div>
         
            <div className="box">
               <Link to="/lifestyle">
              <img className="box2" src={lifeStyle} alt="" />
              </Link>
              <h1>Lifestyle Habits</h1>
            </div>
            
          
          
          
            <div className="box">
              <Link to="/cardio">
              <img className="box2" src={cardio} alt="" />
              </Link>
               <h1>Cardio</h1>
            </div>
            
          
         
          
            <div className="box">
              <Link to="/fatloss">
              <img className="box2" src={fatloss} alt="" />
              </Link>
              <h1>Fat Loss</h1>
            </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default GridImageLink;
