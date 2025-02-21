import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({budget}){
    const data = {
        labels: ["Needs", "Wants", "Savings"],
        datasets:[
            {
                data: [budget.needs, budget.wants, budget.savings],
                backgroundColor: ["red", "blue", "green"],
            },
        ],
    };
      

    return <PieChart data ={data} />
}
