import React, { Component } from 'react';
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addFeedback = ({ target: { name } }) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
  }

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state)
    return totalFeedback.reduce((acc, el) => (acc + el), 0)
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback()

    return Math.round(this.state.good * 100 / totalFeedback)
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <Section title={"Please leave feedback"}>

        <FeedbackOptions addFeedback={this.addFeedback} />

        <Statistics
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          good={good}
          neutral={neutral}
          bad={bad}
        >
        </Statistics>

      </Section>
    );
  }
}

export default App;