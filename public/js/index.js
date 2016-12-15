$(function () 
{
    $("[data-toggle='tooltip']").tooltip();
    
    $("#year").text(function()
    {
        var d = new Date();
        var n = d.getFullYear();
        if (n > 2016) { return "2016–" + n }
        else { return n }
    });
    
    $(".contact").on("click", function()
    {
        window.location.href = "mailto:dev@davidjamesknight.com"
    });

})