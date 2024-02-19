/*6.a. Create a variable called "hour" and save the current hour of the day (use 24-hour format and save it as a number b/w 0 and 23).
- If hour is b/w 6 and 12, display "good morning".
- If hour is b/w 13 and 17, display "good afternoon".
- If hour is b/w 17+, display "good night".*/
//creating a date object and getting current hour using getHours();
let hour=new Date().getHours();
if(hour>=6 && hour<12 ){
    console.log("good morning");
}
else if(hour>=13 && hour<17 ){
    console.log("good afternoon");
}
else(hour>17) {
    console.log("good night");
}