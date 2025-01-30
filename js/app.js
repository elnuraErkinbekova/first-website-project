const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");

    console.log("it worked");
});

// Function to make logos move
const logoTrack =document.querySelector(".rotating-logos__track").cloneNode(true);
if (logoTrack) {
    const logos = logoTrack.cloneNode(true);
    document.querySelector(".rotating-logos").appendChild(logos);
}

//Function to toggle the monthly yearly plan
function switchPricing() {
    const checkbox = document.getElementById("pricing-toggle-checkbox");
    const monthlyPrices = document.querySelectorAll(".monthly-price");
    const yearlyPrices = document.querySelectorAll(".yearly-price");
    const yearlyDiscount = document.querySelector(".save-percentage");

    if (checkbox && monthlyPrices.length && yearlyPrices.length && yearlyDiscount) {
        if(checkbox.checked) {
            monthlyPrices.forEach((price) => price.classList.add("hidden"));
            yearlyPrices.forEach((price) => price.classList.remove("hidden"));
            yearlyDiscount.style.display = "inline";
        }else{
            monthlyPrices.forEach((price) => price.classList.remove("hidden"));
            yearlyPrices.forEach((price) => price.classList.add("hidden"));
            yearlyDiscount.style.display = "none";
        }
    }
}

const pricingToggle = document.getElementById("pricing-toggle-checkbox");
if (pricingToggle) {
    pricingToggle.addEventListener("change", switchPricing);
}



window.addEventListener("load", () => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
})