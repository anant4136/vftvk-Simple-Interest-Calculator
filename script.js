function compute() {
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) <= 0) {
        document.getElementById("result").innerHTML = "Please Enter a positive value !!"
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        let final = parseInt(principal) + interest
        
       

        document.getElementById("result").innerHTML = "If you deposit " + final +
            " at an interest rate of " + rate + "%" +
            " You will receive an amount of " + final +
            " in the year " + year;
    }
}
function updateRate(val) {

    document.getElementById("rate_val").innerHTML = val;
}        