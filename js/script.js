function displayMessage() {
    alert("This is just for demonstrating purpose :) as Github only supports CSS & JavaScript \n\nSend to ihsannurul@hotmail.com if want to contact me");
}

document.getElementById("button-submit").addEventListener("click", displayMessage);
const form = document.getElementById("my-form"); 
function handleForm(event) { event.preventDefault();} 
form.addEventListener('submit', handleForm);

document.addEventListener("DOMContentLoaded", () => {
let options = {
  root: null,
  rootMargin: "-60px 0px",
  threshold: 0.05
};
let observer = new IntersectionObserver(beTouching, options);
document.querySelectorAll(".progress").forEach(p => {
  observer.observe(p);
});
});

function handleBeTouching(v) {

    let nilai = 1;
    const nilaiDefault = v.getAttribute("data-nilai");
    let id = setInterval(frame, 100);

    function frame() {
      if (nilai >= nilaiDefault ) {
        clearInterval(id);
      } else {
        nilai++;
        v.style.width = nilai*10 + "%";
        v.innerHTML = nilai  + "/10";
          }
    }
}

          

function beTouching(entries, ob) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
            let progressBar = entry.target.children[0];
            setTimeout(() => handleBeTouching(progressBar),500);
            ob.unobserve(entry.target);

  }
});
}
