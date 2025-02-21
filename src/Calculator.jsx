import { useState } from "react";
import PieChart from "./PieChart";

function Calculator({income}){//deleted income prop
const [budget, setBudget] = useState({ needs: 0, wants: 0, savings: 0});

    function captureValue(e){
        income = e.target.value
        
    };

    function resetDisplay()
    {

    }

    function Calculations(){ 
        setBudget({
        needs: (income * .5),
        wants: (income * .3),
        savings: (income * .2),
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
        <p>Needs: ${budget.needs.toFixed(2)}</p>
        <p>Wants: ${budget.wants.toFixed(2)}</p>
        <p>Savings: ${budget.savings.toFixed(2)}</p>



        </>
    )
}
    
export default Calculator;