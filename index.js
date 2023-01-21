let clickme=document.getElementById("clickme");
let hap = document.getElementById("hap");

clickme.addEventListener("click",click);
function click(){
    if (hap.style.visibility=="visible"){
        hap.style.visibility="hidden";

}
else{
        hap.style.visibility="visible";
}
}

 var images = ['IMG-20221205-WA0010.jpg', 'IMG-20221205-WA0001.jpg','IMG-20221205-WA0003.jpg'];

 var i = 0;

 function slideshow() {
     document.getElementById("image").src = images[i];
    if (i < images.length-1) {
         i++;
    } else {
         i = 0;
    }
     setTimeout("slideshow()", 5000);

  } window.onload = slideshow;

  let clickmee=document.getElementById("clickmee");
   let hcd=document.getElementById("hcd");

   clickmee.addEventListener("click",clickmeee);
   function clickmeee(){
     if(hcd.style.visibility=="hidden"){
          hcd.style.visibility="visible";

     }

     else{

          hcd.style.visibility="hidden";

     }
   }

   