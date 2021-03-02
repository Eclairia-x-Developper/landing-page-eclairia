let images = document.querySelectorAll(".ellipse-3 .image");
let hamburgerButton = document.querySelector(".hamburger-button");
let navBar = document.querySelector("nav");
let bulb = document.querySelector(".bulb");
/*
    -> Lorsdu click sur une des images du tableau, 
        -> si l'image a déja la classe active, on ne fais rien
        -> sinon on lui ajoute la claase active et on la retire sur celui qui la possède
*/
images.forEach(image => {
    image.addEventListener("click", function(){
        if(image.classList.contains("active")) {
            return 0;
        } else {
            let imageActive = image.parentElement.querySelector(".active");
            imageActive.classList.remove("active");
            this.classList.add("active");
        }
    });
});

/*
    Lors du click sur le button hamburger
    -> afficher par dessus le menu
*/
hamburgerButton.addEventListener("click", function(){
    if(document.body.classList.contains("light")){
        navBar.classList.add("light");
    }else {
        navBar.classList.remove("light");
    }
    navBar.classList.toggle("active");
    document.body.classList.toggle("active");
});

bulb.addEventListener("click", function(){
    let allDark = document.querySelectorAll(".dark");
    let dropdownIcon = document.querySelector(".dark-dropdown");
    let searchIcon = document.querySelector(".search-icon img");
    let appLink = document.querySelector(".eclairia-app-link img");
    let downloadButton = document.querySelector(".download-button img");
    let emailIcon = document.querySelector(".email-icon");
    let phoneIcon = document.querySelector(".phone-icon");
    let voiceIcon = document.querySelector(".voice-icon");

    allDark.forEach(el => {
        el.classList.toggle("light");
        if(!el.classList.contains("light")){
            dropdownIcon.src = "svgs/arrow-down.svg";
            searchIcon.src = "svgs/Search-icon.svg";
            appLink.src = "images/app-download.png";
            downloadButton.src= "svgs/download.svg";
            emailIcon.src = "svgs/email-icon.svg";
            phoneIcon.src = "svgs/phone-icon.svg";
            voiceIcon.src = "svgs/voice-icon.svg";
        } else {   
            dropdownIcon.src = "svgs/arrow-down-light.svg";
            searchIcon.src = "svgs/Search-light.svg";
            appLink.src = "images/app-download-light.png";
            downloadButton.src= "svgs/download-light.svg";
            emailIcon.src = "svgs/frame49-light.svg";
            phoneIcon.src = "svgs/frame50-light.svg";
            voiceIcon.src = "svgs/voice-light.svg";
        }
        console.log(el);
        

    });
});