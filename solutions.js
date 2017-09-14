// Mission A - Select & Modify: Str8-up H4cked
//grab all the companies
var companies = document.querySelectorAll(".startup-link");
//for each company
for(var i= 0; i < companies.length; i++) {
    //change the text content
    companies[i].textContent = "WDI Rulez: str8-up h4cked";
}

//Mission B - Add the V
//*** The hard part here is discovering HOW to make the icon show up
var pageTitle = document.querySelector(".c-pageHeaderSmall-h1"); // Grab Header
var logo = document.createElement("span"); // Create empty span for logo
logo.className = "fontello-angellist"; // add class that makes the V logo show up
logo.setAttribute("id", "myLogo"); // add an ID to our new logo
pageTitle.appendChild(logo); // add our logo to the page

//Mission C - green V
logo.style.fontSize = "164px";
logo.style.color = "green";

//Mission D - set an event listener
function fundMe(){ alert("Fund Me!") }
logo.addEventListener("click", fundMe)

//Mission E Bonus
function makeMeRed(event){ event.target.style.color = "red";}  
function makeMeGreen(event){ event.target.style.color = "green"}

logo.addEventListener("mouseenter", makeMeRed);
logo.addEventListener("mouseleave", makeMeGreen);