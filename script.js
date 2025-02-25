document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
// let resume = document.getElementById("resume");
// resume.addEventListener("click",function(){
//   window.open= ("https://drive.google.com/file/d/1RXqLm2_jL_Mklq940t4TUMQJqrtg2M1h/view?usp=sharing",'_blank')
// })
function openResume() {
    // Open the resume URL in a new tab
    window.open('https://drive.google.com/file/d/1vADmWWsajglj-T3S3jqLxOuLVJer2Sdk/view?usp=sharing', '_blank');
}
function linkaction() {
    // Open the resume URL in a new tab
    window.open('https://github.com/aisha072/project', '_blank');
}
function pagesaction() {
    // Open the resume URL in a new tab
    window.open('https://aisha072.github.io/project/', '_blank');
}


// script.js
document.getElementById('resumebtn').addEventListener('click', function() {
    // Get the download link
    var downloadLink = document.getElementById('downloadLink');
  
    // Simulate a click to download the file
    downloadLink.click();
  
    // Open the file in a new tab
    window.open(downloadLink.href, '_blank');
  });
  function github(){
    window.open("https://github.com/aisha072","_blank")
}
function email(){
    window.open("aishaghazi644@gmail.com","_blank")
}
function Linkedin(){
    window.open("https://www.linkedin.com/in/aisha-ghazi-708208317/","_blank")
};