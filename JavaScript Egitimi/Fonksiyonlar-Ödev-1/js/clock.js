let Myname=document.querySelector('.Myname');
let clock=document.querySelector('.clock');
let fullname=prompt('Please enter your full name');
document.querySelector("#myName").innerHTML = fullname
//* Saat gosterimi
function time(){
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let second=date.getSeconds();
    clock.innerText=`${hour}:${min}:${second}`;
}
setInterval(time,1000);



