$(function (){
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
    
    const inputs = document.querySelectorAll("#controls input");

    function rotateSunburst() {
      const suffix = this.dataset.sizing || "";
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', rotateSunburst));
    inputs.forEach(input => input.addEventListener('mousemove', rotateSunburst));

})