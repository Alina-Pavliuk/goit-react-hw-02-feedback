import React from 'react';
import styles from './FeedbackOptions.module.css'
import PropTypes from "prop-types";

const FeedbackOptions = ({ addFeedback }) => {
  return (
    <div className="buttonWrapper">
      <button className={styles.buttonFeedback} type="button" name="good" onClick={addFeedback}>Good</button>
      <button className={styles.buttonFeedback} type="button" name="neutral" onClick={addFeedback}>Neutral</button>
      <button className={styles.buttonFeedback} type="button" name="bad" onClick={addFeedback}>Bad</button>
    </div>
  )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func.isRequired
};