import "./style.css";
import "./media.css";


const projectOneImg = document.querySelector('.project_img1');
const projectTwoImg = document.querySelector('.project_img2');
const projectThreeImg = document.querySelector('.project_img3');
const projectFourImg = document.querySelector('.project_img4');

projectOneImg.addEventListener('click', function() {
    window.open("https://school-omzh.netlify.app/", "_blank");
  });
projectTwoImg.addEventListener('click', function() {
    window.open("https://florist-vesna.netlify.app/", "_blank");
});
projectThreeImg.addEventListener('click', function() {
    window.open("https://blog-futuretech.netlify.app/", "_blank");
  });
projectFourImg.addEventListener('click', function() {
    window.open("https://ussgroup-ua.netlify.app/", "_blank");
  });
    
