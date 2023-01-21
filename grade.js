let math1=document.getElementById("math1");
let math2 = document.getElementById("math2");
let math3 = document.getElementById("math3");
let math4 = document.getElementById("math4");
let math5 = document.getElementById("math5");


let english=document.getElementById("english1");
let english2 = document.getElementById("english2");
let english3 = document.getElementById("english3");
let english4 = document.getElementById("english4");
let english5 = document.getElementById("english5");


let physics1 = document.getElementById("physics1");
let physics2 = document.getElementById("physics2");
let physics3 = document.getElementById("physics3");
let physics4 = document.getElementById("physics4");
let physics5 = document.getElementById("physics5");



let edu2011 = document.getElementById("edu2011");
let edu2012 = document.getElementById("edu2012");
let edu2013 = document.getElementById("ecu2013");
let edu2014 = document.getElementById("edu2014");
let edu2015 = document.getElementById("edu2015");


document.getElementById("submit").addEventListener("click",function(){
    let a,b,c,d,f,total;
    a=3*5;
    b=3*4;
    c=3*3;
    d=3*1;
    f=3*0;
    let ae, be, ce, de, fe, totale;
    ae = 2 * 5;
    be = 2 * 4;
    ce = 2 * 3;
    de = 2 * 1;
    fe = 2 * 0;

if (math1.checked==true){
  let a1=  document.getElementById("return").innerHTML=a; 
   
}

else if (math3.checked == true) {
    let c1=  document.getElementById("return").innerHTML=c ;
}

else if (math4.checked == true) {
     let d1=   document.getElementById("return").innerHTML=d;
}

else if (math5.checked == true) {
    let f1=  document.getElementById("return").innerHTML=f ;
}
else if (english.checked == true) {
    let a2=  document.getElementById("return").innerHTML=a ;
}

else if(english2.checked==true){
    b2=document.getElementById("return").innerHTML=b;
}
else if (english3.checked == true) {
   c2= document.getElementById("return").innerHTML = c;
}
else if (english4.checked == true) {
    d2 = document.getElementById("return").innerHTML = d;
}
else if (english5.checked == true) {
    f2 = document.getElementById("return").innerHTML = f;
}
else if (physics1.checked == true) {
    a3 = document.getElementById("return").innerHTML = a;
}
else if (physics2.checked == true) {
    b3= document.getElementById("return").innerHTML = b;
}
else if (physics3.checked == true) {
    c3 = document.getElementById("return").innerHTML = c;
}
else if (physics4.checked == true) {
    d3= document.getElementById("return").innerHTML = d;
}
else if (physics5.checked == true) {
    a4 = document.getElementById("return").innerHTML = f;
}
else if (edu2011.checked == true) {
    b4 = document.getElementById("return").innerHTML = ae;
}
else if (edu2012.checked == true) {
    c4= document.getElementById("return").innerHTML = be;
}
else if (edu2013.checked == true) {
    d4 = document.getElementById("return").innerHTML =ce;
}
else if (edu2014.checked == true) {
    f4 = document.getElementById("return").innerHTML = de;
}
else if (edu2015.checked == true) {
    f5= document.getElementById("return").innerHTML = fe;
}

if(math1&&english.checked==true){
    document.getElementById("return").innerHTML=a*2;

}
else if(math1&&english2.checked==true){
    document.getElementById("return").innerHTML=a+12;
}

 



}
)
