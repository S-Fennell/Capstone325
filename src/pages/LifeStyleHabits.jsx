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
          <p className="ls">
            Sleep is essential for both physical and mental well-being,
            impacting various bodily functions and cognitive abilities. Getting
            enough quality sleep is crucial for maintaining overall health,
            improving mood, enhancing cognitive function, and reducing the risk
            of chronic diseases
          </p>
        </div>

        <div className="topic">
          <img className="topicImg" src={exercise}></img>
          <h2>Exercise</h2>
          <p className="ls">
            Regular exercise is crucial for maintaining both physical and mental
            health. It plays a vital role in preventing chronic diseases,
            improving mood, boosting energy levels, and enhancing overall
            well-being. Incorporating physical activity into your daily routine
            can significantly impact your healthspan and quality of life.
          </p>
        </div>

        <div className="topic">
          <img className="topicImg" src={fatloss}></img>
          <h2>Body weight</h2>
          <p className="ls">
            Maintaining a healthy body weight is crucial for overall health and
            well-being, offering numerous benefits like reduced risk of chronic
            diseases, increased energy levels, and improved mental health. Being
            overweight or obese can significantly increase the risk of
            developing conditions such as heart disease, type 2 diabetes, and
            certain cancers. Conversely, achieving and maintaining a healthy
            weight can help prevent these conditions and improve various aspects
            of life
          </p>
        </div>

        <div className="topic">
          <img className="topicImg" src={healthyDiet}></img>
          <h2>Healthy diet</h2>
          <p className="ls">
            A healthy diet is crucial for maintaining overall well-being,
            impacting physical and mental health, and reducing the risk of
            chronic diseases. It provides essential nutrients for energy,
            growth, and disease prevention.
          </p>
        </div>

        <div className="topic">
          <img className="topicImg" src={hydrate}></img>
          <h2>Staying hydrated</h2>
          <p className="ls">
            Staying hydrated is crucial for maintaining overall health and
            bodily functions. Water supports essential processes like regulating
            body temperature, aiding digestion, and transporting nutrients. It
            also helps with waste removal, protects organs, and supports brain
            function.
          </p>
        </div>

        <div className="topic">
          <img className="topicImg" src={noSmoking}></img>
          <h2>No smoking</h2>
          <p className="ls">
            Quitting smoking is important because it significantly improves your
            health, reduces the risk of serious diseases, and can add years to
            your life. It also protects those around you from secondhand smoke,
            and offers a chance to improve your overall well-being and quality
            of life.{" "}
          </p>
        </div>

        <div className="topic">
          <img className="topicImg" src={nasal}></img>
          <h2>Nasal breathing</h2>
          <p className="ls">
            
            Nasal breathing is crucial for optimal respiratory and overall
            health because it filters, warms, and humidifies inhaled air,
            promoting better oxygen absorption and reducing the risk of
            infections. It also supports the production of nitric oxide, a
            molecule beneficial for lung function and circulation. Additionally,
            nasal breathing encourages a more relaxed and efficient breathing
            pattern, impacting sleep quality and overall well-being.
          </p>
        </div>
      </div>
    </>
  );
}
