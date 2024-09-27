// Function to enable profile options
function enableProfileOptions() {
    let x = document.getElementById("profile-pic-options")
    // Get the computed style for visibility
    let computedStyle = window.getComputedStyle(x);

    // Switch because showing the option and not showing the option
    if (computedStyle.display === 'none' || computedStyle.display === '') {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

// Function to open About page
function openAbout() {
    window.open(
        "https:\\about.google.com"
    );
}

// Function to open Store page
function openStore() {
    window.open(
        "https:\\store.google.com"
    );
}

// Function to open a new tab Gmail
function openMail() {
    window.open(
        "https:\\mail.google.com",
        "_blank"
    );
}

// Function to open Google Images
function openGoogleImages() {
    window.open(
        "https:\\images.google.com"
    );
}

// Function to open Google Images
function openDoodle() {
    window.open(
        "https:\\doodles.google"
    );
}

// Function to open the Github page
function openGithub() {
    window.open(
        "https:\\www.github.com/Piyush240604"
    );
}

// Function to toggle to dark mode
function toggleDark() {
    // Change background color
    document.body.style.backgroundColor = "#202124";
    
    // Change all the text to white
    // Assign variable to the top-text class [it contains collection of elements]
    let elements = document.getElementsByClassName("top-text");
    
    // Loop through all the elements 
    for(let element of elements) {
        element.style.color = "white";
    }

    document.getElementById("language").style.color = "white";
    document.getElementById("google-search").style.color="white";
    document.getElementById("feeling-lucky").style.color = "white";

    let lang_links = document.getElementsByClassName("lang");
    for(let lang_link of lang_links) {
        lang_link.style.color = "#99C3FF";
    }

    let option_texts = document.getElementsByClassName("options-text");
    for(option_text of option_texts) {
        option_text.style.color = "white";
    }

    // Change google-apps icon
    let google_apps = document.getElementById("google-apps");
    google_apps.setAttribute("src", "assets/dark-mode-google-apps-icon.png");
    google_apps.style.height = "20px";
    google_apps.style.width = "20px";
    google_apps.style.marginTop = "12px";

    // Change google logo
    document.getElementById("google_icon").setAttribute("src", "assets/dark_mode_google_logo.png");
    
    // Change Search Bar
    let search_bar = document.getElementById("search-bar");
    search_bar.style.border = "1px solid #5f6368";
    search_bar.addEventListener('mouseenter', () => {
        search_bar.style.backgroundColor = "#303134";
        search_bar.classList.remove('hover-effect');
        search_bar.style.cursor = "text";
        search_bar.style.border = "none";
    });
    search_bar.addEventListener('mouseleave', () => {
        search_bar.style.backgroundColor = "transparent";
        search_bar.style.border = "1px solid #5f6368";
    });

    // Change google search and feeling lucky
    document.getElementById("google-search-wrapper").style.backgroundColor = "#303134";
    document.getElementById("feeling-lucky-wrapper").style.backgroundColor = "#303134";

    // Profile Options change
    document.getElementById("profile-pic-options").style.backgroundColor = "#F8F9FA";
    document.getElementById("theme-toggle-wrapper").style.backgroundColor = "#202124";
    document.getElementById("credits").style.backgroundColor = "#202124";
}

function toggleLight() {
    // Change background color
    document.body.style.backgroundColor = "white";

    // Change all the text to white
    // Assign variable to the top-text class [it contains collection of elements]
    let elements = document.getElementsByClassName("top-text");
    
    // Loop through all the elements 
    for(let element of elements) {
        element.style.color = "black";
    }

    document.getElementById("language").style.color = "black";
    document.getElementById("google-search").style.color="black";
    document.getElementById("feeling-lucky").style.color = "black";

    let lang_links = document.getElementsByClassName("lang");
    for(let lang_link of lang_links) {
        lang_link.style.color = "blue";
    }

    let option_texts = document.getElementsByClassName("options-text");
    for(option_text of option_texts) {
        option_text.style.color = "black";
    }

    // Change google-apps icon
    let google_apps = document.getElementById("google-apps");
    google_apps.setAttribute("src", "assets/google_apps_icon.png");
    google_apps.style.height = "30px";
    google_apps.style.width = "30px";
    google_apps.style.marginTop = "8px";

    // Change google logo
    document.getElementById("google_icon").setAttribute("src", "assets/google_icon.png");
    
    // Make changes to the search bar
    let search_bar = document.getElementById("search-bar");
    search_bar.style.border = "1px solid #dadde1";
    search_bar.addEventListener('mouseenter', () => {
        search_bar.classList.add('hover-effect');
        search_bar.style.backgroundColor = "transparent";

    });
    search_bar.addEventListener('mouseleave', () => {
        search_bar.classList.remove('hover-effect');
        search_bar.style.border = "1px solid #dadde1";
    });
    search_bar.addEventListener('focusin', () => {
        search_bar.classList.add('focusin');
    });
    search_bar.addEventListener('focusout', () => {
        search_bar.classList.remove('focus-effect');
    });

    // Change Google Search and feeling lucky
    document.getElementById("google-search-wrapper").style.backgroundColor = "#F8F9FA";
    document.getElementById("feeling-lucky-wrapper").style.backgroundColor = "#F8F9FA";

    // Profile Options change
    document.getElementById("profile-pic-options").style.backgroundColor = "#202124";
    document.getElementById("theme-toggle-wrapper").style.backgroundColor = "#F8F9FA";
    document.getElementById("credits").style.backgroundColor = "#F8F9FA";
}   

/* --- MAIN --- */

// Make changes to the search bar
let search_bar = document.getElementById("search-bar");
search_bar.addEventListener('mouseenter', () => {
    search_bar.classList.add('hover-effect');
});
search_bar.addEventListener('mouseleave', () => {
    search_bar.classList.remove('hover-effect');
});
search_bar.addEventListener('focusin', () => {
    search_bar.classList.add('focusin');
});
search_bar.addEventListener('focusout', () => {
    search_bar.classList.remove('focus-effect');
});

// Assign the toggle to a variable
const toggleSwitch = document.getElementById("toggle-theme");

// Add an event Listener
toggleSwitch.addEventListener('change', function() {
    // Debug
    console.log("Checked Function check state: ", this.checked);
    if (!this.checked) {
        console.log("Light Theme");

        // Toggle to Light Theme
        toggleLight();
    } else {
        console.log("Dark Theme");

        // Toggle to Dark theme
        toggleDark();
    }
});
