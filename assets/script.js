$(document).ready(function() {
    $(`.expanded`).hide();
    $(".expanded a, .collapsed a").click(function(eve) {
        var $container = $(this).parents("p");
        eve.preventDefault();
        $container.children(".expanded, .collapsed").toggle();
    });

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(`.navbar`).addClass("sticky");
        }else{
            $(`.navbar`).removeClass("sticky");
        }
        if(this.scrollY > 500){
           $(`.scroll-up-btn`).addClass("show");
        }else{
           $(`scroll-up-btn`).removeClass("show");
    }
});  

$(`.scroll-up-btn`).click(function(){
    $(`html`).animate({scrollTop: 0});
});
/*  navbar   */
$(`.menu-icon`).click(function(){
  $(`.navbar .menu`).toggleClass("active");
$(`.menu-icon i`).toggleClass("active");
});
});