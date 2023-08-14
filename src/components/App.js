import { Feedback } from './Feedback/Feedback';
import React, { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
    
    
  };
  onClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  onClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  onClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
 
  
  render() {
    return (
      <>
        <Feedback
          countFeed={this.countTotalFeedback}
          countPerc={this.countPositiveFeedbackPercentage}
          onGood={this.onClickGood}
          onBad={this.onClickBad}
          onNeutral={this.onClickNeutral}
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
        />
       
      </>
      
    );
  }
}
