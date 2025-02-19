

function Calculator(){

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
        <input name="income" />
        </>
    )
}
    
export default Calculator;