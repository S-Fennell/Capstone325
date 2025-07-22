import image from '../assets/hero2.png'

function HeroImage (){

    return(

        <div className='hero'>
             <img src={image} alt="image of mediteranian food" />
        </div>
       
    );
}
export default HeroImage