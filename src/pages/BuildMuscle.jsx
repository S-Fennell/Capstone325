import Muscle from "../assets/buildMuscle.png";

export default function BuildMuscle() {
  return (
    <>
      <div className="cardioHero">

        {/*div for hero image*/}
        <img src={Muscle} height="600px" />
      </div>

      <div className="midbar">
        <h1 className="muscleBar">Building Muscle 101</h1>
      </div>
    
      <div>
        <div className="muscle">
          <div className="muscleContainer">
          <h1>Build Muscle</h1>
          <div className="muscleSections">
            <h2>The Fundimentals</h2>
            <p>
              To build muscle effectively, focus on a ombination of strength
              training, a balanced diet with sufficient protein and calories,
              and adequate rest. Strength training involves progressively
              overloading your muscles, challenging them to adapt and grow. A
              well-rounded diet provides the necessary building blocks for
              muscle tissue, while sleep allows your body to repair and rebuild
              muscle.
            </p>
            <p>
              Prioritize exercises that work multiple muscle groups
              simultaneously, such as squats, deadlifts, bench presses, and
              rows. These exercises are more efficient for overall muscle
              growth.
            </p>
          </div>

          <div className="muscleSections">
            <h2>Rest | Frequency | Proper Form</h2>
            <p>
              Allow adequate rest between sets and workouts to allow your
              muscles to recover and rebuild. Typically, 30-90 seconds between
              sets and 1-2 days of rest for each muscle group per week is
              recommended. Aim for 2-3 strength training sessions per week, with
              each session focusing on different muscle groups or a total body
              approach. Focus on maintaining proper form throughout each
              exercise to maximize muscle activation and minimize the risk of
              injury.
            </p>
          </div>

          <div className="muscleSections">
            <h2>Calories | Protein | Carbohydrates | Healthy Fats</h2>
            <p>
              Consume more calories than you burn to provide the energy needed
              for muscle growth. Ensure adequate protein intake (around 0.8-1
              gram per pound of body weight) to support muscle repair and
              growth. Don't neglect carbohydrates, as they provide the energy
              needed for intense workouts and help spare protein from being used
              for energy. nclude healthy fats in your diet for overall health
              and hormone production. Consume a protein-rich meal or snack
              shortly after your workouts to optimize muscle recovery.
            </p>
          </div>

          <div className="muscleSections">
            <h2>Sleep | Manage Stress | Listen to Your Body</h2>
            <p>
              Aim for 7-9 hours of quality sleep per night, as this is when your
              body releases growth hormones and repairs muscle tissue. Chronic
              stress can hinder muscle growth, so find healthy ways to manage
              stress levels. Don't push yourself too hard, especially when
              starting. Pay attention to your body's signals and allow for
              adequate rest and recovery.
            </p>
          </div>

          <div className="muscleSections">
            <h2>Must Be Patient | Track Progress | Stay Consistent</h2>
            <p>
              Muscle growth takes time and consistency. Stick to your training
              and nutrition plan, a nd you will see results. Monitor your
              progress through measurements, photos, or strength gains to stay
              motivated and make adjustments as needed. Regularity is crucial.
              Make exercise and healthy eating a part of your lifestyle.
            </p>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
