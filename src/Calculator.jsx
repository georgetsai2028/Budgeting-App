import { useState } from "react";

function Calculator({income}){
const [budget, setBudget] = useState({ needs: 0, wants: 0, savings: 0});


    function calculations(e){ 
        setBudget({
        income = e.target.value
        needs: (income * .5),
        wants: (income * .3),
        savings: (income * .2)

    })}
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
        <input name = "incomeInput" onChange={calculations} />


        </>
    )
}
    
export default Calculator;