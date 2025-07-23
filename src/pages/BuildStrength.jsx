import strength from "../assets/powerWoman.png"

export default function BuildStrength(){
    //I could have added more details but that would eat up a lot of time that I don't have
    //to complete the project so I lead with the basics. But this is the idea of this page

    return(
        <>
                <div class='hero2'>
                    <img src={strength} height="600px"/>
                </div>
                <h1 class="h1Bar">Training for Strength is Not like Training for Muscle Size</h1>
                <div className="gradient">
                     <div className="strengthContainer">
                    <h2>The Principles of Building Strength</h2>
                    <p>
                        To prioritize strength gains over muscle size, 
                        focus on high-intensity, low-volume training 
                        with longer rest periods and compound exercises. 
                        This approach emphasizes neural adaptations and 
                        efficient force production rather than muscle 
                        hypertrophy.
                    </p>
                    <p>
                        A primary goal of strength training is to get your body to adapt to lifting heavier loads. 
                        To assess if your strength has increased, you can perform a test.
                        For example, you can test if your 1 rep max (1RM) lift of a specific exercise, 
                        such as the bench press or squat, improves over time. In other words, you can identify 
                        if you can perform one repetition of an exercise with increasing loads as you progress.
                        Studies have shown that increasing strength requires lifting with loads at greater 
                        than or equal to 60% of your 1RM load. Loads of at least 80% of your 1RM load may produce 
                        better strength gains if you have previous training experience.

                        Current recommendations for increasing strength through resistance training are to complete 
                        1–8 repetitions until muscle failure — which is when you’re unable to perform another repetition. 
                        Research suggests performing 3–6 of these sets per exercise.

                        One study found that rest periods of 3 minutes are optimal for inducing strength changes. 
                        Yet, resting for 1–3 minutes between sets may be more beneficial from a time-saving standpoint.
                        Keep in mind that strength training will vary with the individual. It’s reliant on previous 
                        training history, injuries, age, motivation, and more.

                        Thus, it’s best to adjust training parameters to your ability, time allotment, 
                        and motivation level. For example, if you’re over 45 years of age, you may benefit 
                        from lower loads, such as 60% of your 1-RM load.
                    </p>
                    <p>
                        <strong>Content from Healthline.com</strong>
                    </p>
                </div>
                </div>
               
        </>
    );
}