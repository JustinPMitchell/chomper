import React, { Component } from 'react';


class MealDescription extends Component {
  render() {
    return (
      <div className="meal-description-wrapper">
        <form className="save-meal-form" action="SAVE ROUTE HERE" method="POST">
          <input value="Save" type="submit" class="save-meal-btn" />
        </form>
        <p className="meal-description">
          <b>Calories:</b> {this.props.mealCal}
          <br />
          <br />
          <b>Ingredients:</b> {this.props.mealIngredients}
        </p>
      </div>
    );
  }
}

export default MealDescription;