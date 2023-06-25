let checkNum = document.getElementById("sub").addEventListener("click", (event) => {
event.preventDefault();
let inp = +document.querySelector("#inpval").value;
if(inp % 2 === 0){
    document.getElementById("result").innerHTML = inp + " is Even Number";
}
else if(inp % 2 === 1){
    document.getElementById("result").innerHTML = inp + " is Odd Number";
}else{
    document.getElementById("result").innerHTML = "Enter only values in numbers form";
}
//console.log (inp % 2);

});