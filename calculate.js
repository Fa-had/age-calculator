
document.querySelector('.calculate').addEventListener("click", ()=> {
    const dob = document.getElementById("dobinput").value;
    let date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
    const totalFromCurrentDays = currentYear*365 + (currentMonth * 30) + currentDay;
    const dobArr = dob.split("-");
    const dobYear = parseInt(dobArr[0]);
    const dobMonth = parseInt(dobArr[1]);
    const dobDay = parseInt(dobArr[2]);
    const totalFromDobDays = dobYear*365 + (dobMonth * 30) + dobDay;

    const ageDay = totalFromCurrentDays - totalFromDobDays;
    if (ageDay > -1) {
        const year = Math.floor(ageDay/365);
        const month = Math.floor((ageDay%365)/30);
        const day = Math.floor(((ageDay%365)%30));
        let text = "";
        if (year > 0){
            text += year + " year "; 
        }
        else{
            text += "";
        }
        if (month > 0){
            text += month + " month "; 
        }
        else{
            text += "";
        }
        if (day > 0){
            text += day + " day "; 
        }
        else{
            text += "";
        }
        document.getElementById("age").innerText = text + " old";
    }
    else if(isNaN(ageDay)){
        document.getElementById("age").innerText = "First input your Birthday!";
    }
    else{
        document.getElementById("age").innerText = "Birthday can not be future date!";
    }
});