var cuadrito = document.querySelector("#cuadrito");
var mundo = document.querySelector("#world");
var gravity = 20;


setInterval(function() {
    var isIsOnAir = false;
    var worldRectangle = mundo.getBoundingClientRect();
    var characterRectangle = cuadrito.getBoundingClientRect();
    var actualPosition = parseInt(cuadrito.style.top);

    if(characterRectangle.bottom <= (worldRectangle.top - 10)) {
        isIsOnAir = true;
    }

    if(isIsOnAir) {
        cuadrito.style.top = (actualPosition + gravity) + "px";
    } 
}, 1000/gravity);




document.addEventListener("keydown", function(event) {
    if(event.code == "Space") {
        cuadrito.classList.add("jumping");
        gsap.to(cuadrito, {
            "duration" : 0.5,
            top : parseInt(cuadrito.style.top) - 50,
    
            onComplete : function() {
                cuadrito.classList.remove("jumping");
                cuadrito.classList.add("idle");
            }
        });
    }
})

document.addEventListener("keydown", function(event) {
    cuadrito.classList.remove("idle");
    var finalPosition = parseInt(cuadrito.style.left);
    var velocity = 30;
    cuadrito.classList.add("walkingFirst");
    // Condicion si gira a la izquierda
    if(event.code == "ArrowLeft") {
        finalPosition -= velocity;
        cuadrito.style.transform = "rotateY(180deg)"
    }

    // Condicion si gira a la derecha.
    if(event.code == "ArrowRight") {
        finalPosition += velocity;
        cuadrito.style.transform = "rotateY(0deg)"
    }

    // Codigo para animacion.
    gsap.to(cuadrito, {
        "duration" : 0.5,
        left : finalPosition,

        onComplete : function() {
            cuadrito.classList.remove("walkingFirst");
            cuadrito.classList.add("idle");
        }
    });
})