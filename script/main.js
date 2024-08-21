$(function(){

    // gnb(nav)

    $('.gnb>li').on('mouseenter',function(){
        $(this).children('.depth2').stop().slideDown()
    })
    $('.gnb>li').on('mouseleave',function(){
        $(this).children('.depth2').stop().slideUp()
    })


    // slide
    // 매 초마다 반복
    setInterval(function(){
        $('main ul li:last-child').insertBefore('main ul li:first-child')
        $('main ul').css({'margin-left':-1200})
        $('main ul').animate({'margin-left':0})
    },3000)


    // contents 공지사항&갤러리
    $('.tab>li').on('click',function(){
        let num = $(this).index()
        $('.tab>li').removeClass('on')
        $(this).addClass('on')

        // 클릭한 번호에 맞는 박스만 보이기
        $('.box').hide()
        $('.box').eq(num).show()
    })

    // popup cover 보여주기
    $('.notice>li:first-child').on('click',function(){
        $('.popup').show()
        $('.cover').show()
    })

    $('.popup .close').on('click',function(){
        $('.popup').hide()
        $('.cover').hide()
    })

})