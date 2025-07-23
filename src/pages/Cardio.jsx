import cardioImage from '../assets/cardio.png'

export default function Cardio(){

    return(
        <>
            <div className='cardioHero'> {/*div for hero image*/}
                <img src={cardioImage}/>
            </div>

            <div className="midbar">
                <h1 className="cardioBar">Cardio 101</h1>
            </div>
        </>
    )
}