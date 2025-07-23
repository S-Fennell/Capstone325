import Muscle from '../assets/buildMuscle.png'

export default function BuildMuscle(){

    return(
        <>
            <div className='cardioHero'> {/*div for hero image*/}
                <img src={Muscle}/>
            </div>

            <div className="midbar">
                <h1 className="muscleBar">Building Muscle 101</h1>
            </div>
        </>
    )
}