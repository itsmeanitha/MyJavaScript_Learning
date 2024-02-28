let displayResult = document.querySelector("#result");
        let result;
//it will show the no entered
        function display(number){
            displayResult.value += number;
            result = displayResult.value;
            
        }
    //eval()=>	Evaluates a string and executes it as if it was script code

        function answer(){
            result = eval(result);
            displayResult.value = result;
            console.log("Answer is:"+result);
        }
        //clears the display

        function clearDisplay(){
            displayResult.value = "0";
            console.log("Display is cleared");
        }