import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5", value: 4000 },
  { name: "11", value: 3000 },
  { name: "13", value: 2000 },
  { name: "15", value: 2780 },
  { name: "17", value: 1890 },
  { name: "18", value: 2390 },
  { name: "19", value: 3490 },
  { name: "20", value: 6000 },
  { name: "21", value: 11000 },
  { name: "22", value: 10000 },
  { name: "23", value: 8000 },
  { name: "24", value: 7000 },
  { name: "25", value: 9000 },
  { name: "27", value: 12000 },
];

const BasicBars = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BasicBars;
