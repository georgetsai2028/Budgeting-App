import { useState } from 'react';


function Calculator({income}){
let needs = 0;
let wants = 0;
let savings = 0;

    function handleTextChange(e){
        income = e.target.value;
        console.log(income);
    }

    function calculations(e){
        income = e.target.value;
        needs = (income * .5)
        console.log(needs);
        wants = (income * .3)
        console.log(wants);
        savings = (income * .2)
        console.log(savings);

    }
    return (
        <>
        <label for="incomeInterval">How often do you get paid</label>
        <select name ="incomeInterval">
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