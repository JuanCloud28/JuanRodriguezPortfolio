function downloadResume() {
    window.open("assets/resume/DEV Resume Juan Rodriguez.pdf", "_blank");
}

function sendEmail() {
    document.location = "mailto:juanrodriguezf18@gmail.com?subject=Hi Juan!&body=";
}

function showFrameworks() {
    let i;
    let frameworkNames = document.getElementsByClassName("framework-name");
    let frameworkIcons = document.getElementsByClassName("icon");

    for (i = 0; i < frameworkNames.length; i++) {
        frameworkNames[i].style.display = "none";
    }

    for (i = 0; i < frameworkIcons.length; i++) {
        frameworkIcons[i].className = "icon";
    }

    slideIndex++;
    if (slideIndex > frameworkNames.length) { slideIndex = 1 }
    frameworkNames[slideIndex - 1].style.display = "block";
    frameworkIcons[slideIndex - 1].className += " active";
    technologiesElement.style.backgroundColor = screenColors[slideIndex - 1];
    technologiesElement.style.boxShadow = `-20px 20px 20px 20px ${screenColors[slideIndex - 1]}26`;
    setTimeout(showFrameworks, 2000);
}

let technologiesElement = document.getElementById("technologies");
let screenColors = ["#f44336", "#4e94d3", "#db8d3c", "#ffcd36", "#6fa8dc", "#48bf91", "#2986cc", "6fa8dc"];
let slideIndex = 0;
showFrameworks();