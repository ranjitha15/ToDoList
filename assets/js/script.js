//Click events
$("ul").on("click","li",function(){
  $(this).toggleClass("completed")
});
//Delete Todo
$("ul").on("click","span",function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  e.stopPropogation();
});
$("input[type='text']").keypress(function(event){
  if(event.which===13){
    var todoText = $(this).val();
    $(this).val('');
    $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> "+todoText+"</li>");
}
});
