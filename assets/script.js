$(document).ready(function() {
    $("#moreinfo_skills").hide();
    $("#readmore_skills").show()
    $("#readmore_skills").click(function(e){
        $("#readmore_skills").hide()
        $("#moreinfo_skills").show();
    })

    $("#readless_skills").click(function(e){
        $("#moreinfo_skills").hide();
        $("#readmore_skills").show()
    })

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