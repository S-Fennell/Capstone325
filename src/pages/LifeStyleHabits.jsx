import lifestyle from "../assets/lifeStyle.png";
import sleep from "../assets/sleep.png";
import fatloss from "../assets/weightLoss.png";
import exercise from "../assets/exercise.png";
import healthyDiet from "../assets/healthyDiet.png";
import hydrate from "../assets/hydrate.png";
import noSmoking from "../assets/noSmoking.png";
import nasal from "../assets/nasal.png";


export default function LifeStyleHabits() {
  return (
    <>
      <div className="fatLossHero">
        <img src={lifestyle} alt="" />
      </div>
      <div className="midbar">
        <h1>Good Lifestyle Habits</h1>
      </div>
      <div className="midbar2">
        <h3 className="topicBar">
          Sleep | Exercise | Body weight | Healthy diet | Staying hydrated | No
          smoking | Nasal breathing
        </h3>
      </div>
      <div className="contentContainer">
        <div className="topic">
          <img className="topicImg" src={sleep}></img>
          <h2>Sleep</h2>
          <p>Sleep</p>
        </div>

        <div className="topic">
          <img className="topicImg" src={exercise}></img>
          <h2>Exercise</h2>
          <p>Exercise</p>
        </div>

        <div className="topic">
          <img className="topicImg" src={fatloss}></img>
          <h2>Body weight</h2>
          <p>Body weight</p>
        </div>

        <div className="topic">
          <img className="topicImg" src={healthyDiet}></img>
          <h2>Healthy diet</h2>
          <p>Healthy diet</p>
        </div>

        <div className="topic">
          <img className="topicImg" src={hydrate}></img>
          <h2>Staying hydrated</h2>
          <p>Staying hydrated</p>
        </div>

        <div className="topic">
          <img className="topicImg" src={noSmoking}></img>
          <h2>No smoking</h2>
          <p>No smoking</p>
        </div>

        <div className="topic">
          <img className="topicImg" src={nasal}></img>
          <h2>Nasal breathing</h2>
          <p>Nasal breathing</p>
        </div>
      </div>
    </>
  );
}
