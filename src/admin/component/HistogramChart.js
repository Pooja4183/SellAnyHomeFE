import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const HistogramChart = () => {
  const data = [
    { category: "January", frequency: 10 },
    { category: "February", frequency: 15 },
    { category: "March", frequency: 10 },
    { category: "April", frequency: 15 },
    { category: "May", frequency: 5 },
    { category: "June", frequency: 20 },
    { category: "January", frequency: 10 },
    { category: "February", frequency: 15 },
    { category: "March", frequency: 10 },
    { category: "April", frequency: 15 },
    { category: "May", frequency: 5 },
    { category: "June", frequency: 20 },
  ];

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#237377", "#ff0043", "#ff7f58"]; // Define an array of colors

  const renderCustomBar = (props) => {
    const { x, y, width, height, index } = props;
    const fill = colors[index % colors.length]; // Retrieve color based on the index

    return <rect x={x} y={y} width={width} height={height} fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category">
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Categories
          </Typography>
        </XAxis>
        <YAxis>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Frequency
          </Typography>
        </YAxis>
        <Tooltip />
        <Bar dataKey="frequency" shape={renderCustomBar} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistogramChart;
