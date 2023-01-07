const dark = document.querySelector(".toggle-darkmode");

const text = document.querySelector(".toggle-text");


let DarkMode = localStorage.getItem("darkMode");


//  Set Dark Mode
const enableDarkMode = () => {
   document.body.classList.add("darkmode");  
   text.textContent = "Light";
   localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    text.textContent = "Dark";
    localStorage.setItem("darkMode", null);
}

// Save DarkMode  History
if (DarkMode === "enabled") {
    enableDarkMode();
}



// Add Event Listener
dark.addEventListener("click", () => {
    let DarkMode = localStorage.getItem("darkMode");

    if(DarkMode !== "enabled") {
       enableDarkMode();
      
    }  else {
        disableDarkMode();
        console.log("greta!");
    }
});























