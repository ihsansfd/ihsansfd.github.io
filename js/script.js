// var offset = 79;

// $('.navbar li a').click(function(event) {
//     event.preventDefault();
//     $($(this).attr('href'))[0].scrollIntoView();
//     scrollBy(0, -offset);
// });


function displayMessage() {
    alert("This is just for demonstrating purpose :) as Github only supports CSS & JavaScript \n\nSend to ihsannurul@hotmail.com if want to contact me");
}

document.getElementById("button-submit").addEventListener("click", displayMessage);
const form = document.getElementById("my-form"); 
function handleForm(event) { event.preventDefault();} 
form.addEventListener('submit', handleForm);
