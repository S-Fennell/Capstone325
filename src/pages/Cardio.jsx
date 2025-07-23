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
             <div className='cardioContainer'>

            <div className='cardioParagraph'>
                <div className="hiit cardio">
                    <h2>HIIT Cardio</h2>
                    <p>
                        High intensity interval training (HIIT) involves alternating 
                        short bursts of intense activity with short recovery periods.

                        The primary goal of HIIT is to elevate your heart rate and push 
                        your body to its limits, which enhancesTrusted Source endurance, 
                        strength, and cardiovascular fitness. This approach also positively 
                        impacts metabolism and blood pressure.

                        Beyond its physical benefits, HIIT is linked to mood enhancement 
                        and stress reduction, contributing to overall well-being. Importantly, 
                        it’s a time-efficientTrusted Source exercise option, and you can 
                        design workouts to suit your needs.
                   </p>
                   <h6>Porvided by Healthline.com</h6>
                     <img className='cardioPng' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjhlazJpd211NGpkaWZrc2hkajFqcTB6bHZraDRwbThlcGFzbGs4aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lPIreDSP3hG6Ds6jOg/giphy.gif" alt="" />
                     <br />
                     <a href="https://www.healthline.com/health/best-hiit-exercises" target='_blank'>Click here for more info</a>
                </div>

                 <div className="ssc cardio">
                    <h2>Steady State Cardio</h2>
                    <p>
                    Steady-state cardio (SSC) is a cardiorespiratory-based exercise that is of low to moderate intensity 
                    that can be sustained for an extended period. Physiologically speaking, the steady state is achieved 
                    when the exerciser can provide enough oxygen to keep the aerobic energy system providing for most of 
                    the body’s energy needs, allowing them to continue exercising at that pace. More specifically, this 
                    occurs when the exerciser maintains a heart rate of around 45 to 65 percent of their maximum heart 
                    rate though this can be lower in beginners and higher in experienced endurance athletes (Powers & Howley, 2018). 
                   </p>
                   <h6>Porvided by NASM</h6>
                   <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjEwaXFuaDFjNDJ0enZrMmFzMjFmMm1vbWtobmdxbXNwMTZ2ZGJvcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/E4VKK43kiegbI6QqYc/giphy.gif" alt="" className="cardioPng" />
                   <br />
                   <a href="https://blog.nasm.org/what-is-steady-state-cardio" target='_blank'>Click here for more info</a>
                </div>

                 <div className="lic cardio">
                    <h2>Low Impact Cardio</h2>
                    <p>
                        Low-impact cardio exercises get your heart rate up while placing minimal stress on your joints. 
                        A workout might include lunges, squats, and planks. 
                        You can lose weight with a low-impact cardio workout and reduce the risk of heart disease and type 2 diabetes.
                        MedlinePlus. Benefits of exercise.
                        This doesn't mean low-impact cardio workouts are easier than rounds of burpees or box jumps. 
                        Some people can mistake "low-impact" for "low-intensity," but these moves can be just as effective at raising the heart rate. 
                        Read on to learn about low-impact cardio and some exercises to try.                  
                    </p>
                    <h6>Porvided by Healthline.com</h6>
                   <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXIxY3h6NG81ODUyYWcwemEwcm42NjQxdjcxcnk1MjVtcXFrZjJoZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9RUNLDje8reCnbNzgv/giphy.gif" alt="" className="cardioPng" />
                   <br />
                   <a href="https://www.health.com/fitness/cardio-workouts/low-impact-cardio" target='_blank'>Click here for more info</a>
                </div>

                 <div className="vo2 cardio">
                    <h2>VO2 Max</h2>
                    <p>
                        To go back to biology class: When we inhale, the lungs take in oxygen. 
                        The heart and blood transport that oxygen into the muscles, which fuels a 
                        chemical reaction that allows the muscles to move. 
                        To put it simply, VO2 max is the maximum amount, or volume (V), of oxygen (O2) your 
                        body can use as a fuel source for exercise. Even more simply, it’s a gauge of how much 
                        hard work your body can do. 
                        The number is measured by the milliliters of oxygen consumed in one minute per kilogram o
                        f body weight. The higher the number, the better your cardiometabolic health.   
                   </p>
                   <h6>Porvided by hss.edu</h6>
                   <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZlOG00eDV2eGFsa2o2bmdjc2N3MzEzOXQyODA5c3FzenVyMHl3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AHcxSHiHfKtHfvPNve/giphy.gif" alt="" className="cardioPng" />
                   <br />
                   <a href="https://www.hss.edu/health-library/move-better/vo2-max" target='_blank'>Click here for more info</a>
                   
                </div>
            </div>
        </div>
        </>
   
    )
}