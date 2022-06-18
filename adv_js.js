/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var truth = true;
function toggleNav(open_2) {
    if (truth && open_2) {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        truth = false;
    }
    else if (open_2) {
        document.getElementById("mySidebar").style.width = "100px";
        document.getElementById("main").style.marginLeft = "150px";
        document.getElementsByClassName("tabs").style.display="none";
        truth = true;
       
    }

    else {
        document.getElementsByClassName("tabs").style.display="none";
    }
  }
  
