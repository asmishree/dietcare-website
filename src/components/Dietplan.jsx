import React, { useState } from 'react';
import './Dietplan.css'; 

function Dietplan() {
  const [bmr, setBmr] = useState('');
  const [dietPreference, setDietPreference] = useState('vegetarian');
  const [dietPlan, setDietPlan] = useState('');
  const randomVeg = Math.floor(Math.random()*vegetarian.length);
  const randomNonveg = Math.floor(Math.random()*nonVegetarian.length);
  const handleGetDietPlan = () => {
     const vegetarianDiet = vegetarian[randomVeg]

    const nonVegetarianDiet = nonVegetarian[randomNonveg]

    const selectedDiet = dietPreference === 'vegetarian' ? vegetarianDiet : nonVegetarianDiet;

    setDietPlan(selectedDiet);
  };

  const handleGenerateNewPlan = () => {
      setDietPlan('');
  };

  return (
    <div className='Diet-main'>
    <div className="App">
      <h1>Diet Plan</h1>
      <div className="form">
        <label htmlFor="bmr">Enter your BMR:</label>
        <input
          type="number"
          id="bmr"
          value={bmr}
          onChange={(e) => {
            const newValue = parseFloat(e.target.value);
            if (!isNaN(newValue) && newValue > 0) {
              setBmr(newValue);
            } else {
              
              setBmr('');
            }
          }}
          placeholder="BMR (e.g., 1500)"
        />
        <label htmlFor="dietPreference">Select your dietary preference:</label>
        <select
          id="dietPreference"
          value={dietPreference}
          onChange={(e) => setDietPreference(e.target.value)}
        >
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
        <button onClick={handleGetDietPlan}>Get Diet Plan</button>
       
      </div>
      <h2>Your Diet Plan:</h2>
      {dietPlan && (
        <div className="diet-plan">
          <p>Breakfast: {dietPlan.breakfast}</p>
          <p>Lunch: {dietPlan.lunch}</p>
          <p>Dinner: {dietPlan.dinner}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Dietplan;
const vegetarian = [
  {
    breakfast: 'Oatmeal with fruits',
    lunch: 'Chickpea salad',
    dinner: 'Grilled vegetable stir-fry',
  },
  {
    breakfast: 'Scrambled eggs with spinach and feta',
    lunch: 'Mushroom and spinach quiche',
    dinner: 'Baked acorn squash with quinoa stuffing',
  },
  {
    breakfast: 'Pancakes with maple syrup and berries',
    lunch: 'Spinach and artichoke stuffed mushrooms',
    dinner: 'Cauliflower and chickpea curry with rice',
  },
  {
    breakfast: 'Yogurt parfait with granola and mixed berries',
    lunch: 'Avocado and black bean quesadilla',
    dinner: 'Sweet potato and black bean enchiladas',
  },
  {
    breakfast: 'Peanut butter and banana sandwich',
    lunch: 'Roasted red pepper and tomato soup with a side salad',
    dinner: 'Eggplant and zucchini lasagna',
  },
  {
    breakfast: 'Smoothie bowl with spinach, banana, and almond butter',
    lunch: 'Greek salad with olives and feta cheese',
    dinner: 'Vegetable and tofu stir-fry with brown rice',
  },
  {
    breakfast: 'Fruit salad with a drizzle of honey',
    lunch: 'Quinoa and roasted vegetable salad',
    dinner: 'Creamy mushroom and spinach pasta',
  },
];
const nonVegetarian = [
  {
    breakfast: 'Scrambled eggs with bacon and toast',
    lunch: 'Chicken Caesar salad',
    dinner: 'Grilled salmon with asparagus and rice',
  },
  {
    breakfast: 'Ham and cheese omelette',
    lunch: 'Tuna sandwich with a side of coleslaw',
    dinner: 'Beef stir-fry with broccoli and noodles',
  },
  {
    breakfast: 'Sausage and mushroom breakfast burrito',
    lunch: 'Shrimp and avocado salad',
    dinner: 'Lamb chops with roasted potatoes and green beans',
  },
  {
    breakfast: 'Smoked salmon with cream cheese on a bagel',
    lunch: 'Turkey club sandwich with chips',
    dinner: 'Pan-seared tilapia with quinoa and steamed vegetables',
  },
  {
    breakfast: 'Steak and eggs with hash browns',
    lunch: 'Spicy chicken wings with ranch dip',
    dinner: 'Pork tenderloin with mashed potatoes and gravy',
  },
  {
    breakfast: 'Bacon and egg breakfast sandwich',
    lunch: 'Lobster bisque with a Caesar salad',
    dinner: 'Grilled shrimp with garlic butter and pasta',
  },
];


