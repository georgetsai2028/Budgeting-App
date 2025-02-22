import { useState } from "react";
import {PieChart} from './PieChart.jsx'

export function Calculator({income}){//deleted income prop
const [budget, setBudget] = useState({ Needs: 0, Wants: 0, Savings: 0});

    function captureValue(e){
        income = e.target.value
        
    };

   /* function resetDisplay()
    {
        if (isNaN(Number(income))){
        return(
        setBudget({
            needs: 0.00,
            wants: 0.00,
            savings: 0.00,
        }));
    }
    }
    */

    function Calculations(){ 
        setBudget({
        Needs: (income * .5),
        Wants: (income * .3),
        Savings: (income * .2),
    });

   }

   

    return (
        <>
        <h1>How often do you get paid</h1>
        <select className ="incomeInterval">
            <option value = "weekly"> Weekly </option>
            <option value = "biWeekly"> Every two weeks</option>
            <option value = "monthly"> Monthly </option>
            <option value = "semiAnnually"> Semi-Annually </option>
            <option value = "annually"> Annually </option>
        </select>
        <input value = {income} type= "number" onChange={captureValue} />
        <button onClick = {Calculations}>Calculate</button>
        <h2>Budget Breakdown</h2>

        <p>Needs: ${budget.Needs.toFixed(2)}</p>
        <p>Wants: ${budget.Wants.toFixed(2)}</p>
        <p>Savings: ${budget.Savings.toFixed(2)}</p>

        <PieChart budget={budget} />
        </>
    )
}