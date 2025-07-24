import dietImage from "../assets/diet.png";

export default function DietPage() {
  return (
    <div className="dietPage">
      <div className="hero1">
        {" "}
        {/*div for hero image*/}
        <img src={dietImage} alt="" />
      </div>

      <div className="midbar">
        <h1 className="dietBar">What You Should know About Different Diets</h1>
      </div>

      <div className="flex">
        <div className="mediteranian divs">
          <h2 className="diet med">Mediteranian Diet</h2>
          <p className="paragraph1">
            The Mediterranean diet is based on the traditional foods of
            countries bordering the Mediterranean Sea, including France, Spain,
            Greece, and Italy. The Mediterranean is also considered the
            healtiest diet in the world according to studies.
          </p>
          <p className="paragraph">
            {" "}
            This diets is rich in fruits, vegetables, whole grains, and
            heart-healthy fats, the Mediterranean diet is both delicious and
            nutritious. It may help manage your weight, protect your heart, and
            prevent diabetes. This diet minimizes processed foods, added sugars
            and refined grains. The Mediterranean diet is a suitable option for
            those looking to improve their health and protect against chronic
            disease.
          </p>
        </div>
        <div className="medImage">
          {/* removing this empty images tag breaks my code so I need it to hold the imag place from my css file */}
          <img src="{}" alt="" /> 
        </div>
      </div>

      <div className="flex">
        <div className="vegan divs">
          <h2 className="diet vegan1">Vagen Diet</h2>
          <p className="paragraph1">
            {" "}
            class="paragraph" Veganism is defined as a way of living that
            attempts to exclude all forms of animal exploitation and cruelty,
            whether for food, clothing, or any other purpose. That’s why a vegan
            diet avoids all animal products, including meat, eggs, and dairy.
            People choose to follow a vegan diet for various reasons. These
            usually range from ethics to environmental concerns, but they can
            also stem from a desire to improve health.
          </p>
          <p className="paragraph">
            There is diferent types of vegan diets, but this topic is a general
            minus processed vegan foods which are not a healthy option. The
            vegan diet avoids all animal producted and animal derived products
            such as cheese, milk and real buuter. Vegans tend to be thinner and
            have a lower body mass index (BMI) than non-vegans. This might
            explain why an increasing number of people turn to vegan diets as a
            way to lose weight. Part of the weight-related benefits vegans
            experience may be explained by factors other than diet. These may
            include healthier lifestyle choices, such as physical activity, and
            other health-related behaviors. However, several randomized
            controlled studies, which control for these external factors, report
            that vegan diets are more effective for weight loss than the diets
            they are compared to. Researchers also generally report that
            participants on vegan diets lose more weight than those following
            calorie-restricted diets, even when they’re allowed to eat until
            they feel full. The natural tendency to eat fewer calories on a
            vegan diet may be caused by a higher dietary fiber intake, which can
            make you feel fuller.
          </p>
        </div>
        <div className="veganImage"></div>
      </div>

      <div className="flex">
        <div className="carnivore divs">
          <h2 className="diet carnivore1">The Carnivore Diet</h2>
          <p className="paragraph1">
            No controlled studies support claims that the carnivore diet can
            help eliminate health issues. It lacks beneficial nutrients,
            including fiber and plant compounds like antioxidants. It may be
            unsafe for some people. There is a community of people that swear by
            the carnivore diet and has has reported a number of health benifits.
          </p>
          <p className="paragraph">
            The carnivore diet consists entirely of meat and animal products,
            excluding all other foods. It’s claimed to aid weight loss, mood
            issues, and blood sugar regulation, among other health issues.
            However, the diet is extremely restrictive and likely unhealthy in
            the long term. Plus, no research backs its purported benefits. The
            carnivore diet eliminates all foods except meat and animal products.
            Thus, it’s low in vitamin c, folate, has no fiber, and is difficult
            to maintain. You should follow a well-rounded diet instead. Foods to
            eat include beef, chicken, pork, lamb, turkey, organ meats, salmon,
            sardines, white fish, and small amounts of heavy cream and hard
            cheese. Butter, lard, and bone marrow are also allowed. Proponents
            of the diet emphasize eating fatty cuts of meat to reach your daily
            energy needs, and organ meats such as liver, to ensure intake of
            vitamins low in other cuts of meat such as vitamin C. The carnivore
            diet encourages drinking water and bone broth but discourages
            drinking tea, coffee, and other drinks made from plants. Carnivore
            diet plans may offer little guidance regarding calorie intake,
            serving sizes, or how many meals or snacks to eat per day. Most
            proponents of the diet suggest eating as often as you desire.
          </p>
        </div>
        <div className="carnivoreImage"></div>
      </div>

      <div className="flex">
        <div className="keto divs">
          <h2 className="diet keto1">Keto Diet</h2>
          <p className="paragraph1">
            The ketogenic diet involves consuming a very low amount of
            carbohydrates and replacing them with fat to help your body burn fat
            for energy. Health benefits can include weight loss and lowering
            your risk for certain diseases.
          </p>
          <p className="paragraph">
            The ketogenic diet is a very low carb, high fat diet that shares
            many similarities with the Atkins and low carb diets. It involves
            drastically reducing carbohydrate intake and replacing it with fat.
            This reduction in carbs puts your body into a metabolic state called
            ketosis. When this happens, your body becomes incredibly efficient
            at burning fat for energy. It also turns fat into ketones in the
            liver, which can supply energy for the brain. Ketogenic diets can
            cause significant reductions in blood sugar and insulin levels.
            This, along with the increased ketones, has some health benefits.
            However, only the standard and high protein ketogenic diets have
            been studied extensively. Cyclical or targeted ketogenic diets are
            more advanced methods and primarily used by bodybuilders or
            athletes. Ketosis is a metabolic state in which your body uses fat
            for fuel instead of carbs. It occurs when you significantly reduce
            your consumption of carbohydrates, limiting your body’s supply of
            glucose (sugar), which is the main source of energy for the cells.
            Following a ketogenic diet is the most effective way to enter
            ketosis. Generally, this involves limiting carb consumption to
            around 20 to 50 grams per day and filling up on fats, such as meat,
            fish, eggs, nuts, and healthy oils. It’s also important to moderate
            your protein consumption. This is because protein can be converted
            into glucose if consumed in high amounts, which may slow your
            transition into ketosis.
          </p>
        </div>
        <div className="ketoImage">
          <img src="{}" alt="" />
        </div>
      </div>
    </div>
  );
}
