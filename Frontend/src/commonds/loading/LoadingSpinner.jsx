import React from "react";
import {
    RingSpinner,
} from "react-spinner-overlay";
import styles from "./loadingSpinner.module.css";

const LoadingSpinner = (props) => {
  const { loading } = props;
  //loading es bool
  return (
    <div className={styles.loadingContainer}>
      <RingSpinner
        loading={loading}
        overlayColor="rgba(0,153,255,0.2)"
        color="#673AB7"
        message="Un momento por favor..."
      />
    </div>
  );
};

export default LoadingSpinner;
