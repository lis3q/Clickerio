const displayScore = document.querySelector(".score");
const displayCps = document.querySelector(".cps");
const img = document.querySelector(".img");

// Setting score onload
var score = JSON.parse(localStorage.getItem("amount") || 0);
displayScore.innerHTML = score;

// Setting cps onload
var cps = JSON.parse(localStorage.getItem("cps") || 1);
displayCps.innerHTML = "Clicks per second: " + cps;

// Clicking function
function game() {
    score += 1;
    displayScore.innerHTML = score;
    localStorage.setItem("amount", score);
}

// Autoclicking function
function cpsFunc() {
    score += cps;
    displayScore.innerHTML = score;
    localStorage.setItem("amount", score);
}
setInterval(cpsFunc, 1000);


// Buying items
const cpsbuy = document.querySelectorAll(".buy-btn");

// Getting priceCps
var priceCps = JSON.parse(localStorage.getItem("priceCps") || 200);
document.querySelector(".price-cps").innerHTML = priceCps + "$";

// Setting cps title
displayCps.innerHTML = "Clicks per second: " + cps;

// Click per second button
cpsbuy[0].addEventListener("click", () => {
    if (score < priceCps) {
        alert("Masz za mało pieniędzy!");
    }
    else {
        // Setting score
        score -= priceCps;
        localStorage.setItem("amount", score);
        displayScore.innerHTML = score;

        // Setting new price
        priceCps *= 2;
        localStorage.setItem("priceCps", priceCps);
        document.querySelector(".price-cps").innerHTML = priceCps + "$";

        // Setting new value of cps
        cps += 1;
        displayCps.innerHTML = "Clicks per second: " + cps;
        localStorage.setItem("cps", cps);
    }
})

// var priceCpc = JSON.parse(localStorage.getItem("priceCpc" || "200$"));
// document.querySelector(".price-cpc").innerHTML = localStorage.getItem("priceCps") + "$";

// // Click per click button
// cpsbuy[1].addEventListener("click", () => {
//     if (score < priceCpc) {
//         alert("Masz za mało pieniędzy!");
//     }
//     else {
//         // Setting score
//         score -= priceCpc;
//         localStorage.setItem("amount", score);
//         displayScore.innerHTML = score;

//         // Setting new price
//         priceCpc += 700;
//         localStorage.setItem("priceCpc", priceCpc);
//         document.querySelector(".price-cpc").innerHTML = localStorage.getItem("priceCpc") + "$";

//         // Setting new value of score
//         score += 1;
//         displayScore.innerHTML = "Clicks per click: " + score;
//     }
// })


// Open and close shop
const shopBtnOpen = document.querySelector(".shop-btn-open");
const shopBtnClose = document.querySelector(".shop-btn-close");
const shop = document.querySelector(".shop");

shopBtnOpen.addEventListener("click", () => {
    shop.classList.add("active");
})
shopBtnClose.addEventListener("click", () => {
    shop.classList.remove("active");
})

// Open and close menu
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menu = document.querySelector(".menu");

menuBtnOpen.addEventListener("click", () => {
    menu.classList.add("active");
})
menuBtnClose.addEventListener("click", () => {
    menu.classList.remove("active");
})

const themes = document.querySelectorAll(".theme");
themes.forEach(theme => theme.addEventListener("click", () => {
    var colorTheme = theme.dataset.theme;
    if (colorTheme == "green") {
        document.documentElement.style.setProperty('--blue', '#547e4e');
        document.documentElement.style.setProperty('--darkblue', '#3a543c');
    }
    else if (colorTheme == "red") {
        document.documentElement.style.setProperty('--blue', '#7e4e4e');
        document.documentElement.style.setProperty('--darkblue', '#543a3a');  
    }
    else if (colorTheme == "pink") {
        document.documentElement.style.setProperty('--blue', '#7e4e76');
        document.documentElement.style.setProperty('--darkblue', '#543a4d');  
    }
    else if (colorTheme == "orange") {
        document.documentElement.style.setProperty('--blue', '#7e614e');
        document.documentElement.style.setProperty('--darkblue', '#54443a');  
    }
    else {
        document.documentElement.style.setProperty('--blue', '#7e7b4e');
        document.documentElement.style.setProperty('--darkblue', '#53543a'); 
    }
}))