// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l’immagine corrispondente
// 2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d’oro: riciclare ovunque possibile!
// Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe

const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

let indexImmagineAttiva = 0;

let containerSelector = document.getElementById("container");

const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];




images.forEach((immagine) => {

// creazione div ed immagini dentro id = container

    containerSelector = document.getElementById("container");

    containerSelector.innerHTML += `<div class="img-container"> 
                                        <img src="${immagine.image}" alt="static-test-img">
                                        <div class="title-text">
                                            <h2>
                                            ${immagine.title}
                                            </h2>
                                            <p>
                                            ${immagine.text}
                                            </p>
                                        </div>
                                    </div>
                             
                                    `;
    
    // creazione div ed immagini dentro id = thumb-nail

    containerSelector = document.getElementById("thumb-nail");


    containerSelector.innerHTML += `<div class="img-thumb-nail"> 
                                        <img src=${immagine.image} alt="static-thumb-nail-test-img">
                                    </div>
                                    ` ;
                                    


});



// seleziono container poi seleziono tutti i div con classe img-container e aggiungo alla prima active per visualizzare il div 

let container = document.getElementById("container");
let immagini = container.querySelectorAll("div.img-container");
immagini[indexImmagineAttiva].classList.add("active");

// seleziono tutti i div con classe img-thumb-nail e aggiungo alla prima active per visualizzare il div 

let immaginiThumbNail = container.querySelectorAll("div.img-thumb-nail");
immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected")

// bottone down per muovermi da un'immagine verso l'altra dall'alto verso il basso

let  buttonInteractionUp = document.getElementById("arrow-down-carousel");
buttonInteractionUp.addEventListener('click', arrowUp);

function arrowUp (){

        immagini[indexImmagineAttiva].classList.remove("active");

        immaginiThumbNail[indexImmagineAttiva].classList.remove("thumb-nail-selected");
        indexImmagineAttiva++;

        if(indexImmagineAttiva == imageList.length ){
            indexImmagineAttiva = 0;

        }
        immagini[indexImmagineAttiva].classList.add("active");

        immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected");

        console.log(indexImmagineAttiva);
};

// bottone down per muovermi da un'immagine verso l'altra dal basso verso l'alto

let  buttonInteractionDown = document.getElementById("arrow-up-carousel");

buttonInteractionDown.addEventListener('click', arrowDown);
    


function arrowDown(){

        immagini[indexImmagineAttiva].classList.remove("active");

        immaginiThumbNail[indexImmagineAttiva].classList.remove("thumb-nail-selected");

        if(indexImmagineAttiva == 0 ){
            indexImmagineAttiva = imageList.length;

        }

        indexImmagineAttiva--;

        immagini[indexImmagineAttiva].classList.add("active");

        immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected");
        
        console.log(indexImmagineAttiva);
};

// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.


function autoPlay(){
return setInterval(arrowDown, 3000);
}

let counter = 2;

function autoPlayReverse(){
    return setInterval(function(){
        
        console.log(counter + "counter");
        if (counter % 2 == 0){

            arrowDown();
            
        }
        else if(counter % 2 == 1){

           arrowUp();
     
        }  
    }
    , 3000);
    }

let clock = autoPlay();

// stop button

let buttonInteractionStop = document.getElementById("stop-button");

buttonInteractionStop.addEventListener('click', () => {
    clearInterval(clock);
    buttonInteractionStop.className = "hidden";
    buttonInteractionStart.className = "active";
}


);

//start button

let buttonInteractionStart = document.getElementById("start-button");

buttonInteractionStart.addEventListener('click', () => {
    clock = autoPlay();
    buttonInteractionStop.className = "active";
    buttonInteractionStart.className = "hidden";
});


//reverse button

let buttonInteractionReverse = document.getElementById("reverse-button");

buttonInteractionReverse.addEventListener('click', () => {
    counter++;
    clearInterval(clock);
    clock = autoPlayReverse();
    buttonInteractionStop.className = "active";
    buttonInteractionStart.className = "hidden";

});