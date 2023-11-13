document.addEventListener('DOMContentLoaded', function() {
    const nombreZona = document.getElementById('nombreZona');

    let anchoVentana = window.innerWidth;
    let areas = [];
    // if(anchoVentana > 700) {
    //     areas = document.querySelectorAll('area[id="gran"]');
    //     console.log(areas);
    // } else {
    //     areas = document.querySelectorAll('area[id="peq"]');
    //     console.log(areas);
    // }
    areas = document.getElementsByTagName("area");
    
    for (let i = 0; i < areas.length; i++) {
        console.log(areas[i]);
        areas[i].addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir comportamiento por defecto
            console.log(areas[i].title)
            const nombre = this.getAttribute('title');
            let list = ["Ingle", "Pecho"];
            let list1 = ["Brazo izquierdo", "Brazo derecho", "Pierna derecha", "Pierna izquierda"];
            if (list.includes(areas[i].title)) {
                cambiarColor(0);
                mostrarNombre(nombre, 0);
            } else {
                if (list1.includes(areas[i].title)) {
                    cambiarColor(1);
                    mostrarNombre(nombre, 1);
                } else {
                    cambiarColor(2);
                    mostrarNombre(nombre, 2);
                }
            }
            
        });
    }

    function mostrarNombre(nombre, q) {
        if(q==0) {
            nombreZona.innerText = `Área del cuerpo: ${nombre} 
             !NADIE PUEDE TOCARTE EN ESA ÁREA!`;
            // alert("!NADIE PUEDE TOCARTE EN ESA PARTE DE TU CUERPO!");
        } else {
            if(q==1) {
                nombreZona.innerText = `Área del cuerpo: ${nombre} 
                 !PELIGRO!`;
                // alert("!NADIE PUEDE TOCARTE EN ESA PARTE DE TU CUERPO!");
            } else {
                nombreZona.innerText = `Área del cuerpo: ${nombre}`;
            }
        }
        
    }   
    
    const luzRoja = document.getElementById('luzRoja');
    const luzAmarilla = document.getElementById('luzAmarilla');
    const luzVerde = document.getElementById('luzVerde');


    function cambiarColor(dato) {
        luzRoja.style.opacity = 0.3;
        luzAmarilla.style.opacity = 0.3;
        luzVerde.style.opacity = 0.3;

        switch (dato) {
            case 0:
                luzRoja.style.opacity = 1;
                break;
            case 1:
                luzAmarilla.style.opacity = 1;
                break;
            case 2:
                luzVerde.style.opacity = 1;
                break;
            default:
                break;
        }
    }
});
