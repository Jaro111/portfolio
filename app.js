const aboutMeContainer = document.getElementById("aboutMeContainer");
const aboutMeClick = document.getElementById("aboutMetext");
const contactClick = document.getElementById("contact");
const socialCintainer = document.getElementById("socialCintainer");
const socialIcon = document.querySelector(".socialIcon");
const soclialItem = document.querySelectorAll(".soclialItem");
const myList = document.getElementById("myList");
const educationText = document.getElementById("educationText");
const projectContent = document.getElementById("projectContent");
//

const projectsContainer = document.getElementById("projectsContainer");
const projectListItemOrganiser = document.getElementById(
  "projectListItemOrganiser"
);
const organiserContainer = document.getElementById("organiserContainer");
const projectListItemManicure = document.getElementById(
  "projectListItemManicure"
);
const manicureContainer = document.getElementById("manicureContainer");

//
const showFunction = (element) => {
  element.style.display = "flex";
  setTimeout(() => {
    element.style.opacity = "1";
    element.style.left = "8%";
    element.style.transition = "1.5s";
  }, 500);
};

const hideFunction = (element) => {
  element.style.left = "3000px";
  element.style.opacity = "0";
  element.style.transition = "1.5s";
  setTimeout(() => {
    element.style.display = "none";
  }, 500);
};
//
aboutMeClick.addEventListener("click", () => {
  showFunction(aboutMeContainer);
  hideFunction(myList);
  hideFunction(projectsContainer);
});

educationText.addEventListener("click", () => {
  showFunction(myList);
  hideFunction(aboutMeContainer);
  hideFunction(projectsContainer);
});

projectContent.addEventListener("click", () => {
  showFunction(projectsContainer);
  hideFunction(aboutMeContainer);
  hideFunction(myList);
});

// ------------------------------------- Projects
projectListItemOrganiser.addEventListener("click", () => {
  manicureContainer.style.display = "none";
  projectListItemManicure.style.backgroundColor = "transparent";
  //
  organiserContainer.style.display = "block";
  projectListItemOrganiser.style.backgroundColor = "blueviolet";
});

projectListItemManicure.addEventListener("click", () => {
  manicureContainer.style.display = "block";
  projectListItemManicure.style.backgroundColor = "blueviolet";
  //
  organiserContainer.style.display = "none";
  projectListItemOrganiser.style.backgroundColor = "transparent";
});

// ------------------------------------- Footer

contactClick.addEventListener("click", () => {
  for (let i = 0; i <= soclialItem.length; i++) {
    soclialItem[i].style.opacity = "0.8";
    contactClick.style.display = "none";
  }
});

const courses = {};
