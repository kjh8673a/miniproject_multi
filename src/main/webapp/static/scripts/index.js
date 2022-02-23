$(function() {
    var $items = $("#newtab>ul>li");
    $items.mouseover(function(){
        $items.removeClass('selected');
        $(this).addClass('selected');
    
        var index = $items.index($(this));
        $("#newtab>div").hide().eq(index).show();
    }).eq(1).mouseover();
});