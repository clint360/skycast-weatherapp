import React from "react";
import Thermometer from "react-thermometer-component";
import './Temp.css';

const styles = {
  dial: {
    width: `300px`,
    height: `auto`,
    color: "inherit",
    border: "none",
    padding: "2px"
  },
  title: {
    fontSize: "1em",
    color: "inherit",
    marginTop: "15px"
  }
};

const Temp = ({ id, value, title }) => {
  return (
    <div className="tmpclass" style={styles.dial}>
      <Thermometer
        theme="dark"
        value={value}
        max="100"
        steps="1"
        format="°C"
        size="normal"
        height="150"
      />
      <div style={styles.title}>
        {title}: {value}°C
      </div>
    </div>
  );
};

export default Temp;