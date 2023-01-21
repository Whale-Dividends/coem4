let clickme21=document.getElementById("clickme21");
   let nce=document.getElementById("nce1");
   clickme21.addEventListener("click",click2);
   function click2(){
     if(nce.style.visibility=="hidden"){
          nce.style.visibility="visible";

     }
     else{
          nce.style.visibility="hidden";
     }
   }