const $menuicon = document.getElementById("menuicon");
const $mobilenav = document.getElementById("mobilenav");
const $exitbtn = document.getElementById("exitbtn");

$menuicon.addEventListener("click", function() {
    $mobilenav.style.display = "block";
}); 

$exitbtn.addEventListener("click", function() {
    $mobilenav.style.display = "none";
});
