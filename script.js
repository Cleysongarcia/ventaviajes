import {barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elemEntos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// agregar UN EVENTO CLICK A CADA ENLACE
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){

        //REMOVER LA CLASE "active" de TODOS LOS ENLACES
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });
        //AGREGAR LA CLASE "active" al enlace actual
           this.classList.add('active')

        //OBTENER EL CONTENIDO CORRESPONDIENTE SEGUN EL ENLACE
        let contenido = obtenerContenido(this.textContent)

        //MOSTAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
        
    });
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}
