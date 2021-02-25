$('.owl-carousel').owlCarousel({
    loop:true, // Navegar de forma infinita
    margin:10,
    nav:false, // ícones indicando a direção da rotação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{ // Quando a tela tiver 100px ou mais, pode colocar 5 items na tela
            items:5
        }
    }
})