
let image=["IMG-20221205-WA0007.jpg","IMG-20221205-WA0002.jpg","IMG-20221205-WA0008.jpg"];
let count=0;
function slideimage(){
    document.getElementById("imageme").src=image[count];
    {

 if(count<image.length-1){
    count++;

    }else{
        count=0;
    }
    }
    setTimeout("slideimage()",2000)
   
}
window.onload=slideimage;


let check=document.getElementById("check");
let form=document.getElementById("form");
check.addEventListener("click",clickme);
function clickme(){
    if(form.style.display=="none"){
        form.style.display="block";
    }
    else{
        form.style.display="none";
    }
}

let jambme=document.getElementById("input4");
let password=document.getElementById("password1");
let loginme=document.getElementById("loginmee");
loginme.addEventListener("click",loginme2);
function loginme2(){
    if(jambme=="joshua"){
        alert("hello");
    }
    else{

       
    }
}


