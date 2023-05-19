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

const { createApp } = Vue;

createApp({
    data(){
        return{
            interval: undefined,
            counter : 2,
            indexImmagineAttiva : 0,
            images: ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"],
            title: ["Marvel's Spiderman Miles Morale", 'Ratchet & Clank: Rift Apart', 'Fortnite', 'Stray', "Marvel's Avengers",],
            text: ['Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 'Go dimension-hopping with        Ratchet and Clank as they take on an evil emperor from another reality.', "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",]
        }
    },
    methods:{
        arrowUp (){
            this.indexImmagineAttiva--;
            if(this.indexImmagineAttiva < 0){
                this.indexImmagineAttiva = this.images.length - 1;
            }
        },
        arrowDown (){
            this.indexImmagineAttiva++;
            if(this.indexImmagineAttiva === this.images.length){
                this.indexImmagineAttiva = 0;
            }
        },
        autoPlay(){
            if(this.interval == undefined){
                console.log(this.interval);
                return this.interval = setInterval(this.arrowDown, 3000);
            }
            
        },
        autoPlayReverse(){
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
        },
        stopAutoPlay(){
            clearInterval(this.interval);
            this.interval = undefined;
        }
    },
    beforeMount(){
        console.log(this.interval);
    },
    mounted(){
        // this.interval = this.autoPlay();
        // this.autoPlay();
    
    }

}).mount('#app')














// // Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.





// // stop button

// let buttonInteractionStop = document.getElementById("stop-button");

// buttonInteractionStop.addEventListener('click', () => {
//     clearInterval(clock);
//     buttonInteractionStop.className = "hidden";
//     buttonInteractionStart.className = "active";
// }


// );

// //start button

// let buttonInteractionStart = document.getElementById("start-button");

// buttonInteractionStart.addEventListener('click', () => {
//     clock = autoPlay();
//     buttonInteractionStop.className = "active";
//     buttonInteractionStart.className = "hidden";
// });


// //reverse button

// let buttonInteractionReverse = document.getElementById("reverse-button");

// buttonInteractionReverse.addEventListener('click', () => {
//     counter++;
//     clearInterval(clock);
//     clock = autoPlayReverse();
//     buttonInteractionStop.className = "active";
//     buttonInteractionStart.className = "hidden";

// });