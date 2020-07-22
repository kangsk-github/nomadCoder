const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
console.dir(title);
console.log(title);
console.error("Fuck");

function handleClick(){
    console.log("I have been resized")
    title.style.color = "black";
}

const age = prompt("How old are you");
console.log(age);
title.addEventListener( "click", handleClick );