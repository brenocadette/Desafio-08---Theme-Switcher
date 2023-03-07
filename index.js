let altering_circle = document.querySelector(".circle")
let altering_theme_switcher = document.querySelector(".theme_switcher")

 altering_circle.addEventListener("click", function() { 
    console.log("Clicou");
    console.log(altering_circle.style);


    if (altering_circle.style.left === "30px")
    {

        altering_circle.style.left = "180px";
        altering_theme_switcher.style.backgroundColor =  "white";

        console.log("Entrou if1");
    }


    else   { 
        altering_circle.style.left = "30px";
        altering_theme_switcher.style.backgroundColor = "gray";
        console.log("Entrou if2");
    
    }

    }
     )    
