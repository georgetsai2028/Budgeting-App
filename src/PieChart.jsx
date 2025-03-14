import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({budget}) {
 const data = {
  labels: ["Needs", "Wants", "Savings"],
  datasets: [
    {
      data: Object.values(budget),

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(0, 187, 31, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgb(8, 168, 40)',
      ],
      borderWidth: 1,
    },
  ],
};

  return <Pie data={data} />;
}