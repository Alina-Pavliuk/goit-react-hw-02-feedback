import React from 'react';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification.js'
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {

  return (
    <div>
      <h2 className={styles.statisticsList_title}>Statistics</h2>
      {countTotalFeedback() ? <ul className={styles.statisticsList}>
        <li className="statisticsList_item">Good: {good}</li>
        <li className="statisticsList_item">Neutral: {neutral}</li>
        <li className="statisticsList_item">Bad: {bad}</li>
        <li className="statisticsList_item">Total: {countTotalFeedback()}</li>
        <li className="statisticsList_item">Positive feedback: {countPositiveFeedbackPercentage() ? countPositiveFeedbackPercentage() : '0'}%</li>
      </ul>
        : <Notification message={"No feedback given"} />}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func
}