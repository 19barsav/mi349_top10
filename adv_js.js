/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var truth = false;
function toggleNav() {
    if (truth) {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        truth = false;
    }
    else {
        document.getElementById("mySidebar").style.width = "50px";
        document.getElementById("main").style.marginLeft = "50px";
        truth = true;
    }
  }
  
