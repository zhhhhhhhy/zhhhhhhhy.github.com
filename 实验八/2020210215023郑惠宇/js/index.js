$(function() {
  $(".m-picture_wall>.m-enlarge").hide();
  $(".m-change").hide();
  $(".m-to_do_list").hide();

  $(".m-change_button>button").click(function () {
    var i = $(this).index();
    switch(i) {
      case 0:
        $(".m-picture_wall").show();
        $(".m-picture_wall>.m-enlarge").hide();
        $(".m-change").hide();
        $(".m-to_do_list").hide();
        break;
      case 1:
        $(".m-picture_wall").hide();
        $(".m-change").show();
        $(".m-to_do_list").hide();
        break;
      case 2:
        $(".m-picture_wall").hide();
        $(".m-change").hide();
        $(".m-to_do_list").show();
        break;
    }
  });

  $(".m-picture_wall>.m-box>li>img").click(function() {
    $(".m-picture_wall>.m-box>li>").css("opacity","0.5");
    var src = $(this).attr('src'); 
    console.log(src);
    $(".m-picture_wall>.m-enlarge>li>img").css({
      'content':'url('+src+')',
      width: 400,
      height:400
    })
    $(".m-picture_wall>.m-enlarge").show(1000);
  })

    $(".m-picture_wall>.m-enlarge").click(function() {
      $(".m-picture_wall>.m-enlarge").hide();
      $(".m-picture_wall>.m-box>li>").css("opacity","1");
  })

  $(".m-to_do_list>.m-box>button").on('click',function () {

    $(".m-to_do_list>.m-box").append('<li><span></span><button>delete</button></li>');
    $(".m-to_do_list>.m-box").children("li:last").addClass("m-work");
    $(".m-to_do_list>.m-box>li:last>span").addClass("m-xu");
    $(".m-to_do_list>.m-box>li:last>button").addClass("m-delete");
    var x = $(".m-to_do_list>.m-box").children("li").length;
    $(".m-to_do_list>.m-box").children("li:last").children("span").text(x);


    $(".m-to_do_list>.m-box>li>button").on('click',function() {
    

      var n = $(this).parent().parent().children().length;
      $(this).parent().remove();
      console.log($(this).parent().parent().children())
      console.log(n);
      for(var i=0;i<n;i++){
        $('.m-to_do_list .m-box li').eq(i).children('span').text(i+1);
      }

   })

  })

  $(".m-to_do_list>.m-box>li>button").on('click',function() {
    

    var n = $(this).parent().parent().children().length;
    $(this).parent().remove();
    console.log($(this).parent())
    console.log(n)
    for(var i=0;i<n;i++){
      $('.m-to_do_list .m-box li').eq(i).children('span').text(i+1);
    }
  })
  
})