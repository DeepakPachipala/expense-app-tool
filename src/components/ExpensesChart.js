import React from "react";
import Chart from "../Charts/Chart";
// import { saveAs } from 'file-saver';


const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "may", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

//   const handleDownload = () => {
//     const jsonData = JSON.stringify(props.expenses);
//     const blob = new Blob([jsonData], { type: "application/json" });
//     saveAs(blob, "expenses.json");
//   };

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <div>
      <Chart dataPoints={chartDataPoints} />;
      {/* <button onClick={handleDownload}>Download</button> */}
    </div>
  );
};

export default ExpensesChart;
