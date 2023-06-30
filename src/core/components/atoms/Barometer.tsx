import React from "react";
import { Chart } from "react-google-charts";

const styles = {
    dial: {
        width: `100px`,
        height: `200px`,
        color: "#000",
        padding: "2px"
    },
    title: {
        fontSize: "1em",
        color: "#000"
    }
};

const Barometer = ({ id, value, title }: any) => {
    return (
        <div style={styles.dial}>
            <Chart
                height={200}
                chartType="Gauge"
                loader={<div></div>}
                data={[
                    ["Label", "Value"],
                    ["title", Number(90)]
                ]}
                options={{
                    redFrom: 90,
                    redTo: 200,
                    yellowFrom: 50,
                    yellowTo: 90,
                    minorTicks: 5,
                    min: -200,
                    max: 200
                }}
            />
        </div>
    );
};

export default Barometer;
