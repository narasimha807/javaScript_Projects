let Billamount = document.getElementById("billAmount");
let Percentagetip = document.getElementById("percentageTip");
let errorMessageElement = document.getElementById("errorMessage");
let Tipamount = document.getElementById("tipAmount");
let Totalamount = document.getElementById("totalAmount")
function calculateTip(){
    let billAmountInputValue  = Billamount.value;
    let PercentagetipInputValue = Percentagetip.value;
    if (billAmountInputValue === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    }
    else if (PercentagetipInputValue === ""){
        errorMessageElement.textContent = "Please Enter a Valid Input";
}
    else{
        errorMessageElement.textContent = "";
        let billamount = parseInt(billAmountInputValue);
        let percentagetip = parseInt(PercentagetipInputValue);

        let calculatetip = ((percentagetip / 100) * billamount);
        let calculatetotal = billamount + calculatetip;

        Tipamount.value = calculatetip;
        Totalamount.value = calculatetotal;


    }
}
