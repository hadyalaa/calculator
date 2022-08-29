

var Arr=[]
function key_action(ID)
{
    key=document.getElementById(ID)
    document.querySelector(".display").innerHTML=document.querySelector(".display").innerText+key.innerHTML
 if (key.innerHTML=='+')
 {
    console.log("hp")
 num1=document.querySelector(".display").innerHTML.toString
 document.querySelector(".display").innerText=" "
 }

    
}