let color = document.querySelector(".color");
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=`rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`
    color.innerText =document.body.style.backgroundColor;
    })
const getRandomNumber =()=>Math.round(Math.random()*255)

let btnCopy = document.getElementById("btn-copy");

btnCopy.onclick= ()=> {
    var copyText = document.getElementById("color-code");
    let elementText = copyText.textContent;
    navigator.clipboard.writeText(elementText);
    showSnackbar();
}
function showSnackbar() {
 
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show",""); }, 3000);
  }

