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

      document.addEventListener("DOMContentLoaded", () => {
        let options = {
          root: null,
          rootMargin: "-60px 0px",
          threshold: 0.05
        };
        let observer = new IntersectionObserver(beTouching, options);
        document.querySelectorAll(".progress").forEach(p => {
          observer.observe(p);
          //console.log("watching", p.textContent);
        });
      });

     function handleBeTouching(v) {
        let i = 0;
              if (i == 0) {
                i = 1;
                let nilai = 1;
                const widthDefault = v.style.width.replace(/\%/g, "");
                const nilaiDefault = v.getAttribute("data-nilai");

                let id = setInterval(frame, 100);
                function frame() {
                  if (nilai >= nilaiDefault ) {
                    clearInterval(id);
                    i = 0;
                  } else {
                    nilai++;
                    v.style.width = nilai*10 + "%";
                    v.innerHTML = nilai  + "/10";
                  }
            }
        }
    }
                  

      function beTouching(entries, ob) {
        //entries all 30 paragraphs
        entries.forEach(entry => {
          if (entry.isIntersecting) {
                console.log("inersecting");
                let progressBar = entry.target.children[0];
                console.dir(progressBar);
                setTimeout(() => handleBeTouching(progressBar),500);
                ob.unobserve(entry.target);

          }
        });
      }
