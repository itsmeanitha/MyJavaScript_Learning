//7.a. Create a function called 'greet' that displays the message "hello!" in the console. 
function greet(){
    console.log("hello!");
}
/*7.b. Continue from 7.a, add a parameter called 'name' to the 'greet' function and display the message: Hello (your name). 
e.g. -> Hello James*/
let name= prompt("Enter your name: ");
function greetwithname(name){
    
    console.log(`Hello ${name}!`);
}
/*7.c. Now, try calling greet() without a name (it will display 'Hello undefined()). 
So, you need to modify the function so that if 'name' is undefined, it will display "hi there!", else.. display "Hey name".*/
greetwithname(name)
if(name=="undefined"){
    console.log("hi there!")
}
else{
    console.log(`Hey ${name}`); 
}
/*7.d. Create a function 'convertTemperature(degree,unit)' that takes a number and a unit (c or f) and converts it into the other unit. 
<> convertTemperature(25,c)=> 77F
<> convertTemperature(86,f)=> 30C*/
let degree=parseFloat(prompt("Enter Degree to convert: "));
    let unit=prompt("Enter unit to convert in ('c' or 'F'): ");
   
function convertTemperature(degree,unit){
    
    if (unit.toLowerCase()=="c"){
        console.log(`Temperature in C is: ${((degree-32)*(5/9)).toFixed(2)}`)
    
    }
    else if(unit.toLowerCase()=="f"){
        console.log(`Temperature in F is: ${((degree*(9/5))+32).toFixed(2)}`)
    
    }
    else{
        console.log("Invalid unit! Enter unit to convert in ('c' or 'F')")
    }
}
convertTemperature(degree,unit);
/*{Add-on, in this same question} -> 
1) You need to take the input from the user in both degree and units. 
2) And while taking the input from unit, user should not be allowed to give input more than 1 character in input box. 
e.g. -> f (is correct input) 
	fah (is not correct input: because it's taking more than 1 character). */
    do {
        degree = parseFloat(prompt("Enter Degree to convert: "));
        unit = prompt("Enter unit to convert in ('c' or 'F'): ");
    
        if (unit.length !== 1) {
            alert("Invalid input. Please enter a single character.");
        }
    } while (unit.length !== 1);
    
    function convertTemperature(degree, unit) {
        if (unit.toLowerCase() === "c") {
            console.log(`Temperature in Celsius is: ${((degree - 32) * (5 / 9)).toFixed(2)}`);
        } else if (unit.toLowerCase() === "f") {
            console.log(`Temperature in Fahrenheit is: ${((degree * 9 / 5) + 32).toFixed(2)}`);
        } else {
            console.log("Invalid unit! Enter unit to convert in ('c' or 'F')");
        }
    }
    
    convertTemperature(degree, unit);
    
    /*Challenger exercise: 
<-> Create a simple To-Do List. 
Things to add: 
1. Users can add, edit, and delete tasks.
2. Implement checkboxes to mark tasks as completed. 
3. Integrate functions to set custom reminders for tasks (using browser popups)*/