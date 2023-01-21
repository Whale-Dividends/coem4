 
let sub=document.getElementById("submit");
sub.addEventListener("click",clickme34);
function clickme34(){
    let inp=document.getElementById("input1").value;  
let password=document.getElementById("password").value;
 
    if(inp=="foe/ms/19/20/265461" && password=="password"){
        window.location.assign("personalprofile.html");
        alert("login successful");
    }else if(inp!="foe/ms/19/20/265461"&&password!="password"){
        alert("please chech your pasword or matriculation number")
    }   
    else{
        alert("login failed");
    }
}