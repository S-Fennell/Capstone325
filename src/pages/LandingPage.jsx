import HeroImage from '../components/HeroImage'
import GridImageLink from '../components/GridImageLinks'
import InfoBar from '../components/InfoBar'
import '../App.css'
import SignIn from '../pages/signIn'

export default function LandingPage(){

    return(
        <>
            <HeroImage/>
            <InfoBar/>
            <GridImageLink/>
        </>
    );
}