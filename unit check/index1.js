
let ferenteh=document.getElementById("ferenteh");
let submit=document.getElementById("submit");
let allsubmit=document.getElementById("allsubmit");
submit.addEventListener("click",clickme);
function clickme(){
    let temp;

    if(document.getElementById("celcius").checked){
 temp=document.getElementById("inputall").value;
    temp=Number(temp);
    temp=celcius(temp)
    document.getElementById("allsubmit").innerHTML=temp;
    }
    else if(document.getElementById("ferenteh").checked){
        let temp;
        temp=document.getElementById("inputall").value;
        temp=Number(temp);
        temp=fern(temp);
        document.getElementById("allsubmit").innerHTML=temp;
    }
    else{
        alert("kinfly input a value")
    }
   
}
function celcius(temp){
    return (temp-32)*(3/5);
}
function fern(temp){
    return (temp*9/5+32);
}

let sub=document.getElementById("sub");
 let rad=Math.floor(Math.random()*5);
    let guess=0;
sub.addEventListener("click",clickall);
function clickall(){
       guess++;
    let input=document.getElementById("inpu").value;
 
    
 if(input==rad){
         document.getElementById("allsub").innerHTML=" you win";

    }
    else{
document.getElementById("allsub").innerHTML="you lose";
    }
}


let submit1=document.getElementById("submit1");
submit1.addEventListener("click", function(){
     let name1=document.getElementById("name").value;
let password=document.getElementById("password").value;
   
    if(name1=="document"&&password=="joe"){
    window.location.assign("me.html")
    }
    else{
        alert("no hello")
    }
})







