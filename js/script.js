const {createApp} = Vue;

createApp ({
    data () {
        return {
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
                ]
            },
            currentSlide: 0
        };
    },
    methods:{
        showNext: function () {
            if(this.currentSlide < this.carousel.images.lenght -1) {
                this.currentSlide++;
            }else {
                this.currentSlide = 0;
            }
        },
        showPrev: function () {
            if(this.currentSlide > 0 ){
                this.currentSlide--;
            } else {
                this.currentSlide = this.carousel.images.lenght - 1;
            }
        },
        showClickedSlide (clickedSlide) {
            this.currentSlide = click
        }
    }
}).mount("#app");