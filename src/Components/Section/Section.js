import React from 'react';
import styles from './Section.module.css';
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={styles.titleFeedBack}>{title}</h2>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired
}