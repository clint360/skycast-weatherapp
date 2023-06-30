import React from "react";
import GaugeChart from "react-gauge-chart";

const styles = {
  dial: {
    display: "inline-block",
    width: `300px`,
    height: `200px`,
    color: "#fff",
    padding: "2px"
  },
  title: {
    fontSize: "1em",
    color: "#000"
  }
};

const Dial = ({ id, value, title }) => {
  let percent = value / 100;

  return (
    <div style={styles.dial}>
      <GaugeChart
        id={id}
        nrOfLevels={30}
        colors={["#00cccc", "#00ffff", "#ff0000"]}
        arcWidth={0.5}
        percent={percent}
        textColor={"#FFFFFF"}
        formatTextValue={(value) => value}
        needleColor="inherit"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default Dial;
