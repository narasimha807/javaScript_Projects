let Firstnumber = document.getElementById("firstNumber");
let Secondnumber = document.getElementById("secondNumber");
let UserInput = document.getElementById("userInput");
let Gameresult = document.getElementById("gameResult");
let successAdd = "Congratulations! You Got it Right";
let wrongAnsMsg = "Please Try Again!";
function restartButtonFunction(){
    let FirstnumberRandom = Math.ceil(Math.random() * 10)
    Firstnumber.textContent = FirstnumberRandom

    let SecondnumberRandom = Math.ceil(Math.random() * 10)
    Secondnumber.textContent = SecondnumberRandom

    UserInput.value = "";
    Gameresult.textContent = "";
}
restartButtonFunction();

function checkButtonFunction(){
    let FirstNumberConvertInt = parseInt(Firstnumber.textContent);
    let SecondNumberConvertInt = parseInt(Secondnumber.textContent);
    let UserInputElement = parseInt(UserInput.value)
    let SumOfTwoNumbers = FirstNumberConvertInt + SecondNumberConvertInt;

    if (UserInputElement === SumOfTwoNumbers){
        Gameresult.textContent = successAdd;
        Gameresult.style.backgroundColor = "#028a0f";
    }

    else{
        Gameresult.textContent = wrongAnsMsg;
        Gameresult.style.backgroundColor = "#1e217c";
    }
    console.log(SumOfTwoNumbers);
}
