
let cse = document.getElementById("csc318");
let phy = document.getElementById("phy");
let eco = document.getElementById("eco");
let ces = document.getElementById("ces");
let helth = document.getElementById("helth");
let mic = document.getElementById("mic");
let intro = document.getElementById("intro");
let edu = document.getElementById("edu");
let bio = document.getElementById("bio");
let bed = document.getElementById("bed");
let che = document.getElementById("chem");

let sub = document.getElementById("submit");
sub.addEventListener("click", submi);
function submi() {
  if (cse.checked == true) {
    document.getElementById
      ("ansa1").innerHTML = "csc318";

    alert("you have succesfully registered your courses")

    if (maths.checked == true) {
      document.getElementById("ansar").innerHTML = "maths";

    }
    if (phy.checked == true) {
      document.getElementById("phyansa").innerHTML = "physics";
    }
    if (eco.checked == true) {
      document.getElementById("ecoansa").innerHTML = "economics";
    }
    if (ces.checked == true) {
      document.getElementById("cesansa").innerHTML = "ces";
    }
    if (helth.checked == true) {
      document.getElementById("helthansa").innerHTML = "physical and health education";
    }
    if (mic.checked == true) {
      document.getElementById("micansa").innerHTML = "micro teaching";
    }
    if (intro.checked == true) {
      document.getElementById("introansa").innerHTML = "introduction to computer science";
    }
    if (edu.checked == true) {
      document.getElementById("eduansa").innerHTML = "eduction technology";
    }
    if (bio.checked == true) {
      document.getElementById("bioansa").innerHTML = "biology";
    }
    if (bed.checked == true) {
      document.getElementById("bedansa").innerHTML = "BED 201";
    }
    if (che.checked == true) {
      document.getElementById("cheansa").innerHTML = "chemistry";
    }
  }
  else {
    alert("kindly input courses")
  }

}
let printmee=document.getElementsByClassName("print")
printmee.addEventListener("click",printing)

function printing(){
  document.getElementById("allcourse1").remove();
}
function printme(){
  window.print();

}
let year=document.getElementById("year");
let allcourses=document.querySelector("allcourse1");

year.addEventListener("click",years);
function years(){
  if(allcourses.style.display=="none"){
    allcourses.style.display="block";
  }else{
    allcourses.style.display="none";
  }
  

}






