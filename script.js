const openButton=document.getElementById("openButton");

const card=document.getElementById("card");

const message=document.getElementById("message");

const typing=document.getElementById("typing");

const question=document.getElementById("question");

const yes=document.getElementById("yes");

const no=document.getElementById("no");

const success=document.getElementById("success");
openButton.onclick=()=>{

    card.classList.add("hidden");

    message.classList.remove("hidden");

    escribir();

}
const texto="Hola mi vida... Hay algo que quería preguntarte desde hace rato 🙊";

let i=0;

function escribir(){

    if(i<texto.length){

        typing.innerHTML+=texto.charAt(i);

        i++;

        setTimeout(escribir,60);

    }else{

        question.classList.remove("hidden");

    }

}
const frases=[

"¿Seguro? 🤔",

"Piénsalo 😅",

"Casi 😜",

"No me atrapas 😂",

"Creo que quieres decir Sí ",

"El otro boton mi amor 🥰",

"Ya, no seas necio 🤨",

"Por eso te enfermas 🫥",

"¿Por que no te quieres bañar mi amor? 🤨",

"No hace falta que llueva para que te bañes 🤣",

"Ya dale que sí, necio 🚿"


];

let contador=0;

no.addEventListener("mouseover",()=>{

    let x=Math.random()*(window.innerWidth-150);

    let y=Math.random()*(window.innerHeight-80);

    no.style.position="absolute";

    no.style.left=x+"px";

    no.style.top=y+"px";

    no.innerHTML=frases[contador%frases.length];

    contador++;

});
yes.onclick=()=>{

    message.classList.add("hidden");

    success.classList.remove("hidden");

}
