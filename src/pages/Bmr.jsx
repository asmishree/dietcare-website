// BmrCalculator.js
import React, { Component } from 'react';
import './Bmr.css'; // Import the CSS file for styling

class BmrCalculator extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      gender: 'male',
      weight: '',
      height: '',
      activityLevel: 'sedentary',
      bmr: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "age" && value >= 0) {
      this.setState({
        [name]: value,
      });
    }
    if (name === "weight" && value >= 0) {
      this.setState({
        [name]: value,
      });
    }
    if (name === "height" && value >= 0) {
      this.setState({
        [name]: value,
      });
    }
    if (name === "gender") {
      this.setState({
        gender: value,
      });
    }
  };

  handleActivityLevelChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  calculateBMR = () => {
    const { age, gender, weight, height, activityLevel } = this.state;

    if (age === '' || weight === '' || height === '') {
      return;
    }

    let bmr = null;

    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === 'female') {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }

    switch (activityLevel) {
      case 'sedentary':
        bmr *= 1.2;
        break;
      case 'lightlyActive':
        bmr *= 1.375;
        break;
      case 'moderatelyActive':
        bmr *= 1.55;
        break;
      case 'veryActive':
        bmr *= 1.725;
        break;
      case 'superActive':
        bmr *= 1.9;
        break;
      default:
        break;
    }

    this.setState({ bmr });
  };

  render() {
    const { bmr, activityLevel } = this.state;

    return (
      <div className='bmr-main'>
        <div className="bmr-calculator">
          <div className="description">
            <h1>BMR Calculator</h1>
          </div>
          <form>
            <div className="input-group">
              <label>Age (years):</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={this.state.age}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={this.state.gender}
                onChange={this.handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="input-group">
              <label>Weight (kg):</label>
              <input
                type="number"
                name="weight"
                placeholder="Enter your weight"
                value={this.state.weight}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Height (cm):</label>
              <input
                type="number"
                name="height"
                placeholder="Enter your height"
                value={this.state.height}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Activity Level:</label>
              <select
                name="activityLevel"
                value={activityLevel}
                onChange={this.handleActivityLevelChange} 
              >
                <option value="sedentary">Sedentary</option>
                <option value="lightlyActive">Lightly Active</option>
                <option value="moderatelyActive">Moderately Active</option>
                <option value="veryActive">Very Active</option>
                <option value="superActive">Super Active</option>
              </select>
            </div>
            <button type="button" onClick={this.calculateBMR}>
              Calculate BMR
            </button>
          </form>
          {bmr !== null && (
            <div className="bmr-result">
              <h2>Your BMR is:</h2>
              <p>{bmr.toFixed(2)} calories per day</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BmrCalculator;
