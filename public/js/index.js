$(function (){
    const slider = document.querySelector("#controls input");
    
    $("[data-toggle='tooltip']").tooltip();
    
    $("#year").text(function(){
        const d = new Date();
        const n = d.getFullYear();
        if (n > 2016) { return "2016–" + n }
        else { return n }
    });
    
    $(".contact").on("click", function(){
        window.location.href = "mailto:dev@davidjamesknight.com"
    });
    
    function rotateSunburst(){
      const suffix = this.dataset.sizing || "";
      document.documentElement.style.setProperty("--rotate", this.value + suffix); // Change the value of the CSS variable
    }

    slider.addEventListener('change', rotateSunburst);
    slider.addEventListener('mousemove', rotateSunburst);
})