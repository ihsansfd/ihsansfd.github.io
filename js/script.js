const tagCloudContainer = ".tagcloud";
const texts = [
  "NPM",
  "Maven",
  "Nuget",
  "Kotlin",
  "GitHub",
  "Gitlab",
  "Linux",
  "Git",
  "MSIX",
  "Python",
  "Mockito",
  "ASP.NET",
  "Material UI",
  "Dapper",
  "NodeJS",
  "C#",
  "MongoDB",
  "Spring",
  "PHP",
  "Entity Framework",
  "xUnit",
  "JavaScript",
  "Java Swing",
  "Sqlite",
  "MySQL",
  "React",
  "Docker",
  "Laravel",
  "TailwindCSS",
  "WPF",
  "Nginx",
  "Bootstrap",
  "Moq",
  "Odoo",
  "CSS",
  "XAML",
];
// const options = { radius: "150" };

// TagCloud(container, texts, options);

function generateTagCloud(x) {
  document.querySelector(tagCloudContainer).innerHTML = "";
  if (x.matches) {
    const options = { radius: "200" };
    TagCloud(tagCloudContainer, texts, options);
  } else {
    const options = { radius: "150" };
    TagCloud(tagCloudContainer, texts, options);
  }
}

const minSmallMedia = window.matchMedia("(min-width: 768px)");

generateTagCloud(minSmallMedia);

minSmallMedia.addEventListener("change", generateTagCloud);

const menuToggler = document.querySelector(".menu-toggler");
const menuItems = document.querySelector(".menu-items");

menuToggler.addEventListener("click", () => {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
});
