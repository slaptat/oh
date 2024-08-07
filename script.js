

let showbtn = document.getElementById("showbtn"); 

// close button 
let closebtn = document.getElementById("closebtn"); 


let popup = document.querySelector(".popup"); 
let subp = document.getElementById("sub-p"); 

//show the popup 
showbtn.addEventListener("click", () => { 
	popup.style.display = "block"; 
	showbtn.style.display = "none"; 
	document.body.style.backgroundColor = "#9EA9B1"; 
	subp.style.display = "none"; 
}); 

//close 
closebtn.addEventListener("click", () => { 
	popup.style.display = "none"; 
	showbtn.style.display = "block"; 
	document.body.style.backgroundColor = "#09dbd450"; 
	subp.style.display = "block"; 
});

//counter 
var count = 0;
var displayCount = document.getElementById("count");

var incrementElement = document.getElementById("increment");
var decrementElement = document.getElementById("decrement");
var resetElement = document.getElementById("reset");

incrementElement.addEventListener('click',function () {
    if (count < "1") {
        count++;
        displayCount.innerHTML = count;
    } else {
        count++;
        displayCount.innerHTML = count;
    }   
});
decrementElement.addEventListener('click',function () {
    if (count != "0") {
        count--;
        displayCount.innerHTML = count;
    }   
});
resetElement.addEventListener('click',function () {
    displayCount.innerHTML = "0";   
});