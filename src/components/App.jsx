import { Component } from 'react';
import { Controls } from './Controls/Controls';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCount = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] + 1,
      };
    });
  };

  totalFeedbackCount = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentageFeedbackCount = totalFeedback => {
    const { good } = this.state;
    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.totalFeedbackCount();
    const positivePercentage =
      this.positivePercentageFeedbackCount(totalFeedback);
    return (
      <>
        <Section title="Please leave feedback">
          <Controls
            options={Object.keys(this.state)}
            feedbackCount={this.feedbackCount}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
