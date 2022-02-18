$(function(){
    $(".nav_main_bsc").on("click", function(){
        $(".nav_main_ethereum_wrap").toggleClass("show")
    });
})

$(".main_governance_table_body").eq(4).nextAll().css("display", "none");
$(function(){
    $('.main_governance_more').on("click",function(){
        $(".main_governance_table_body").eq(4).nextAll().toggle();;
    });
})

$(function() {
    $('.main_governance_more').click( function() {
      if( $(this).html() == '접기' ) {
        $(this).html('더보기');
      }
      else {
        $(this).html('접기');
      }
      $('.main_governance_more').css("font-size","2rem")
      $('.main_governance_more').css("border-top","1px solid #f0f0f1")
      $('.main_governance_more').css("cursor","pointer")
    });
  });

$(function(){
    $('.main_governance_btn1').on("click", function(){
        $('.main_governance_btn1').css("border","1px solid #00bfff")
        $('.main_governance_btn1>h2').css("color","#333")
        $('.main_governance_btn2').css("border","1px solid #f0f0f1");
        $('.main_governance_btn2>h2').css("color","#888")
    })
    $('.main_governance_btn2').on("click", function(){
        $('.main_governance_btn2').css("border","1px solid #00bfff")
        $('.main_governance_btn2>h2').css("color","#333")
        $('.main_governance_btn1').css("border","1px solid #f0f0f1");
        $('.main_governance_btn1>h2').css("color","#888")
    })
})

$(function(){
    $('.footer_lang').on("click", function(){
        $('.footer_lang_eng').toggle()
    })

})


const button=()=>{
    const burger = document.querySelector(".nav_btn_burger")
    burger.addEventListener("click", ()=>{
        burger.classList.toggle('toggle')
    })
}
button()


$(function() {

    $(".nav_btn_burger").on("click", function() {

        $(".nav_btn_link_list").toggle(); 
    });
});

setTimeout(function(){
    document.querySelector(".start_fade").style.display="none"
    document.querySelector(".container").style.display="block"
}, 3000)