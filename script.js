const calculate = () => {
    const hourlyPay = document.querySelector("#hourlyPay");
    const hoursPerDay = document.querySelector("#hoursPerDay");
    const daysPerMonth = document.querySelector("#daysInMonth");

    const hourlyPayValue = hourlyPay.value;
    const hoursPerDayValue = hoursPerDay.value;
    const daysPerMonthValue = daysPerMonth.value;

    const salary = hourlyPayValue * hoursPerDayValue * daysPerMonthValue;

    const message = document.querySelector("#salary");
    message.textContent = "Your salary is " + salary

}