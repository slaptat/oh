

let showbtn = document.getElementById("showbtn"); 

// close button 
let closebtn = document.getElementById("closebtn"); 

let test = document.getElementById("test")
let popup = document.querySelector(".popup"); 
let subp = document.getElementById("sub-p"); 

//show the popup 
showbtn.addEventListener("click", () => { 
	popup.style.display = "block"; 
	showbtn.style.display = "none"; 
	 
	subp.style.display = "none"; 
}); 

//close 
closebtn.addEventListener("click", () => { 
	popup.style.display = "none"; 
	showbtn.style.display = "block"; 
	 
	subp.style.display = "block"; 
});

//counter 
let count = 0;
let displayCount = document.getElementById("count");





showbtn.addEventListener('click',function () {
    count++;
    displayCount.innerHTML = count;
    if (count == 3) {
        window.confirm("Dang good button there.");
    }
    if (count == 4) {
        window.confirm("See! I learned something.");
    }
    if (count == 5) {
        window.confirm("Never trust Greg.");
    }
    if (count == 9) {
        window.confirm("Oh, youre still clicking...ok..cool.");
    }
    if (count == 10) {
        window.confirm("No need to keep clicking...nothing else to click to.");
    }
    if (count == 12) {
        window.confirm("Unless you're bored, then I guess keep clicking. No harm no fowl.");
    }
    if (count == 14) {
        window.confirm("Ok, I guess im going to head home.");
    }
    if (count == 20) {
        window.alert("20! go head. look at you. A real Champion. OK for real, Im out.");
    }
    if (count == 73) {
        window.confirm("Sheesh, still going huh. No plans tonight?");
    }
    if (count == 107) {
        window.confirm("Alright, go play a real game or something, this thing isnt even keeping high score. Go. Bye. No more clicks.");
    }
    if (count == 666) {
        window.alert("Gregs literally the devil");
    }
    if (count == 1000) {
        window.confirm("Incredible. Go touch grass.");
    }
});

count.addEventListener('click', function () {

});
       
