let main = document.querySelector("h1");

let title = document.getElementById("title_input");
let noun = document.getElementById("noun");
let noun2 = document.getElementById("noun2");
let pverb = document.getElementById("pVerb");
let verb = document.getElementById("verb");
let adj = document.getElementById("adjective");

let result = document.querySelector("p");
let submit = document.querySelector("button");

let o = 1;

title.oninput = function() {
    main.innerHTML = title.value;
}

submit.onclick = function(event) {
    event.preventDefault();
    let i = [title.value,noun.value,verb.value,adj.value,pverb.value, noun2.value];
    for(let j=0; j<6; j++) {
        if(i[j]=="") { alert("Please fill in all fields"); return; }
    }
    result.innerHTML=`I can't believe I ${i[4]} the wrong ${i[1]}, and now I have to ${i[2]}. What a ${i[3]} day! Now I need a new ${i[5]}!`;
    setInterval(fade,100);
}

function fade() {
    o -= 0.2;
    document.querySelector("form").style.opacity = `${o}`;
}