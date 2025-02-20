import { useState } from "react";

function Calculator(income){//deleted income prop
const [budget, setBudget] = useState({ needs: 0, wants: 0, savings: 0});

    function captureValue(e){
        income = e.target.value
    }
    function Calculations({ 
        const handleClick = () =>
        console.log('button clicked')
        /*setBudget({
        ...budget,
        needs: (budget * .5),
        wants: (budget * .3),
        savings: (budget * .2)
    */
    }
    return (
        <>
        <label for="incomeInterval">How often do you get paid</label>
        <select className ="incomeInterval">
            <option value = "weekly"> Weekly </option>
            <option value = "biWeekly"> Every two weeks</option>
            <option value = "monthly"> Monthly </option>
            <option value = "semiAnnually"> Semi-Annually </option>
            <option value = "annually"> Annually </option>
        </select>
        <input className = "incomeInput" type= "number" onChange={captureValue} />
        <button onClick = {Calculations}>Calculate</button>


        </>
    )
}
    
export default Calculator;