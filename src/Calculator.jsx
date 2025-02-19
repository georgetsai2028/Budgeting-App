import { useState } from 'react';


function Calculator(){
    let income = 0;

    function handleTextChange(e){
        income = "incomeInput";
        console.log(income);
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
        <input name = "incomeInput" onChange={handleTextChange} />


        </>
    )
}
    
export default Calculator;