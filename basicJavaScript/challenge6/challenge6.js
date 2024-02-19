/*6.a. Create a variable called "hour" and save the current hour of the day (use 24-hour format and save it as a number b/w 0 and 23).
- If hour is b/w 6 and 12, display "good morning".
- If hour is b/w 13 and 17, display "good afternoon".
- If hour is b/w 17+, display "good night".*/
//creating a date object and getting current hour using getHours();
let hour=new Date().getHours();
//let hour = prompt('Enter the hour');
if(hour>=6 && hour<12 ){
    console.log("good morning");
    alert("good morning");
}
else if(hour>=13 && hour<17 ){
    console.log("good afternoon");
    alert("good afternoon");
}
else if(hour>17) {
    console.log("good night");
    alert("good night");
}else {
    console.log("Invalid input");
    alert("Invalid input");
  }
  //6.b. Continue with 6.a., store the variable called 'name' and save your name inside as a string. (e.g. -> Good morning James)
  let name=prompt('Enter your name : ');
if(hour>=6 && hour<12 ){
    console.log(`good morning ${name}`);
    alert(`good morning ${name}`);
}
else if(hour>=13 && hour<17 ){
    console.log(`good afternoon ${name}`);
    alert(`good afternoon ${name}`);
}
else if(hour>17) {
    console.log(`good night ${name}`);
    alert(`good night ${name}`);
}
/*6.c. Imagine a park that has a discount for children (6 years and younger) or senior(65years+)
- You need to display "disount" and "no discount" in console according to condition.
- [Add-on in same qos]: Now, let's say the discount is only available if it is not a holiday. You just need to update above code with this new code with the same display in console. */
let age=parseInt(prompt("Enter the age: "))
if(age<=6 || age>65){
    console.log("You have discount!\n *Discount applicable only if it is not a holiday")
    alert("You have discount!\n\n*Discount applicable only if it is not a holiday")
}
else{
    console.log("Sorry, no discount")
    alert("Sorry,no discount");
}
/*6.d. Create a Coin-flip game: 
- Generate a random_number and save it in a variable.
- If the no > 0.5 then display 'heads' else 'tails'.
- [Add-on]: Now create a variable and save the user's response (head/tail) and match with the computer_choice (basically from the random_number)(just need to add your code in bullet point 1).
- [Challenge]: Instead of using if-else try to use ternery operators for the same question. */
//generating the random number
var number=Math.random().toFixed(2);
console.log("The random number is: "+number);
//ternery operators
(number>0.5)?console.log('heads'):console.log('tails');

