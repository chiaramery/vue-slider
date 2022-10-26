/* 
    Slider con Vue
    Bonus:
    [*] 1- al click su una thumb, visualizzare in grande l'immagine corrispondente,
    [*] 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente,
    [] 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/
const {createApp} = Vue;
createApp ({
    data () {
        return {
            hover: false,
            carousel: {
                images: [
                    'img/01.jpg',
                    'img/02.jpg',
                    'img/03.jpg',
                    'img/04.jpg',
                    'img/05.jpg',
                ],
                title: [
                    'Svezia',
                    'Svizzera',
                    'Gran Bretagna',
                    'Germania',
                    'Paradise',
                ],
                text: [
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                    'Lorem ipsum.',
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                ],
                intervallo: null,
            },
            currentSlide: 0
        };
    },
    methods:{
        showNext:function() {
            if (this.currentSlide < this.carousel.images.length - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        },
        showPrev: function() {
            if ( this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.carousel.images.length - 1;
            }
        },
        showClickedSlide (clickedSlide) {
            this.currentSlide = clickedSlide;
        },
        intervalData() {
            this.intervallo = setInterval(() => {
                if (this.currentSlide < this.carousel.images.length - 1) {
                    this.currentSlide++;
                } else {
                    this.currentSlide = 0;
                }
            },3000)
        },
        // stop() {
        //     clearInterval(intervallo);
        // },
    },
    created () {
        this.intervalData();
        // this.stop(hover);
    }
}).mount("#app");