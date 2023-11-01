import React, { useState } from 'react';
import './Bmi.css'; // Import a CSS file for styling

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  const isInputsValid = !isNaN(parseFloat(weight)) && !isNaN(parseFloat(height)) && weight >= 0 && height >= 0;

  const getBMIClass = () => {
    if (bmi === null) {
      return '';
    } else if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Normal Weight';
    } else if (bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div className='bmi-main'>
      <div className="bmi-container"> {/* Apply styling to this container */}
        <h1>BMI Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container"> {/* Apply styling to input container */}
            <label>Weight (in kg):</label>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => {
                const newValue = e.target.value;
                setWeight(newValue);
              }}
              required
            />
          </div>
          <div className="input-container"> {/* Apply styling to input container */}
            <label>Height (in cm):</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => {
                const newValue = e.target.value;
                setHeight(newValue);
              }}
              required
            />
          </div>
          <div>
            <button type="submit" disabled={!isInputsValid}>Calculate BMI</button>
          </div>
        </form>
        {bmi !== null && (
          <div>
            <h2>Your BMI is: {bmi}</h2>
            <p className={getBMIClass()}>Classification: {getBMIClass()}</p>
            <div className="bmi-scale">
              <p>Underweight: &lt; 18.5</p>
              <p>Normal Weight: 18.5 - 24.9</p>
              <p>Overweight: 25 - 29.9</p>
              <p>Obese: &gt; 29.9</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
