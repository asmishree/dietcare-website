import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class BodyFatCalculator extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      gender: 'male',
      skinfold: '',
      bodyFatPercentage: null,
      bodyFatCategory: '',
      bodyFatMass: null,
      idealBodyFat: null,
      bodyFatToLose: null,
    };
  }

  calculateBodyFat = () => {
    const { age, gender, skinfold } = this.state;

    if (!age || !skinfold) {
      alert('Please fill in all fields');
      return;
    }

    // Jackson-Pollock formula for males
    const formulaConstant = gender === 'male' ? 0.29288 : 0.29669;
    const bodyFatPercentage =
      formulaConstant * parseFloat(skinfold) - 0.0005 * Math.pow(parseFloat(skinfold), 2) + 0.15845 * age - 5.76377;

    const bodyFatCategory = this.getBodyFatCategory(bodyFatPercentage);
    const bodyFatMass = (bodyFatPercentage / 100) * 100; // Assuming a 100 kg person
    const idealBodyFat = this.getIdealBodyFat(age, gender);
    const bodyFatToLose = idealBodyFat - bodyFatMass;

    this.setState({
      bodyFatPercentage,
      bodyFatCategory,
      bodyFatMass,
      idealBodyFat,
      bodyFatToLose,
    });
  };

  getBodyFatCategory = (bodyFatPercentage) => {
    if (bodyFatPercentage < 6) return 'Essential Fat';
    else if (bodyFatPercentage >= 6 && bodyFatPercentage < 14) return 'Athletes';
    else if (bodyFatPercentage >= 14 && bodyFatPercentage < 18) return 'Fitness';
    else if (bodyFatPercentage >= 18 && bodyFatPercentage < 24) return 'Average';
    else return 'Obese';
  };

  getIdealBodyFat = (age, gender) => {
    // You can define your own ideal body fat calculation logic here
    // This is a simplified example
    return gender === 'male' ? 15 : 22;
  };

  render() {
    const { age, gender, skinfold, bodyFatPercentage, bodyFatCategory, bodyFatMass, idealBodyFat, bodyFatToLose } =
      this.state;

    // Chart data
    const chartData = {
      labels: ['Body Fat Percentage', 'Ideal Body Fat'],
      datasets: [
        {
          label: 'Body Fat',
          data: [bodyFatPercentage, idealBodyFat],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        },
      ],
    };

    return (
      <div>
        <h1>Body Fat Calculator</h1>
        <div>
          <label>
            Age (years):
            <input type="number" value={age} onChange={(e) => this.setState({ age: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select value={gender} onChange={(e) => this.setState({ gender: e.target.value })}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Skinfold Thickness (mm):
            <input type="number" value={skinfold} onChange={(e) => this.setState({ skinfold: e.target.value })} />
          </label>
        </div>
        <div>
          <button onClick={this.calculateBodyFat}>Calculate</button>
        </div>
        {/* Display additional information */}
        {bodyFatPercentage !== null && (
          <div>
            <h2>Additional Information</h2>
            <p>Body Fat Percentage: {bodyFatPercentage.toFixed(2)}%</p>
            <p>Body Fat Category: {bodyFatCategory}</p>
            <p>Body Fat Mass: {bodyFatMass.toFixed(2)} kg</p>
            <p>Ideal Body Fat for Age and Gender: {idealBodyFat}%</p>
            <p>Body Fat to Lose to Reach Ideal: {bodyFatToLose.toFixed(2)} kg</p>
          </div>
        )}

        {/* Display the chart */}
        {bodyFatPercentage !== null && (
          <div>
            <h2>Body Fat Chart</h2>
            <Line data={chartData} />
          </div>
        )}
      </div>
    );
  }
}

export default BodyFatCalculator;
