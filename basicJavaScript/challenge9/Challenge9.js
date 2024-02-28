//10.c
let element=document.querySelector("#js");
if(element.classList.contains("js-button")){

 console.log("The classList contains js-button")
}
else{
 console.log("The classList does not contain js-button")
}
//10.d
function isToggled(buttonId){
    var toggleId=document.querySelector('buttonId');
    if(buttonId=='gameId')
    {
     untoggle();
        document.getElementById("gameId").classList.toggle("isToggled");
    }
    else if(buttonId=='musicId')
    {
        untoggle();
        document.getElementById("musicId").classList.toggle("isToggled");
    }
    else if(buttonId=='techId')
    {
        untoggle();
        document.getElementById("techId").classList.toggle("isToggled");
    }
}

function untoggle(){
    var untoggleButton=document.querySelector('.isToggled');

    if(untoggleButton){
    untoggleButton.classList.remove('isToggled');
}
}
        // Event listener for Calculate button
        document.querySelector('.calculate').addEventListener('click', function () {
            errorMessage();
        });

        // Function to handle error messages
        function errorMessage() {
            const amazonValue = document.getElementById("amazonValue").value;
            const errorMessageElement = document.getElementById("ErrorMessage");

            if (amazonValue < 0) {
                errorMessageElement.textContent = 'Error: cost cannot be less than $0';
            } else {
                errorMessageElement.textContent = '';
            }
        }
