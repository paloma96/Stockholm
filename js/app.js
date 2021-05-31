let foto = 0

$('.slider__punto').on('click',function(){    
    foto = $('.slider__punto').index( $(this) )    
    mover()
})


$('.siguiente').on('click',function(){
    foto++
    if(foto === 4){
        foto=0
    }

    mover()

})

$('.anterior').on('click',function(){
    foto--
    if(foto === -1){
        foto=3
    }

    mover()

})

function mover(){
    $('.slider__imagenes').css('transform',`translateX(-${foto*25}%)`)
    $('.slider__punto').removeClass('activo').eq(foto).addClass('activo')
}

$(window).on('scroll',function(){
    let pixel = $(window).scrollTop()

    if (pixel >= 400){
        $('.subir').addClass('aparecer')
    }else {
        $('.subir').removeClass('aparecer')
    }
})