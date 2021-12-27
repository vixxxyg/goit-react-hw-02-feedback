import React, { Component } from 'react';
import Statistics from './Components/Statistics/Statistics';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Notification from './Components/Notification/Notification';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  calcTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);

  positivePercentage = () => {
    const total = this.calcTotalFeedback();

    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const total = this.calcTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.positivePercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given yet" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
