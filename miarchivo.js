class Excursiones {
    constructor(id, nombre, duracion, precio, lugares) {
        this.id = id
        this.nombre = nombre
        this.duracion = duracion
        this.precio = precio
        this.lugares = lugares
    }
}

const excursion1 = new Excursiones(1, "Glaciar Perito Moreno", "1 día", "$12.000 pesos", "18 lugares disponibles")
const excursion2 = new Excursiones(1, "Bar de Hielo", "1/2 día", "$3.000 pesos", "11 lugares disponibles")
const excursion3 = new Excursiones(1, "Chalten", "5 días", "$30.000 pesos", "5 lugares disponibles")
const excursion4 = new Excursiones(1, "Caminata con guía en Chaltén", "día completo", "$4.000 pesos", "3 lugares disponibles")

const excursiones = [excursion1, excursion2, excursion3, excursion4]

const divExcursiones = document.getElementById('Excursiones')

excursiones.forEach(Excursiones => {
    divExcursiones.innerHTML += `
    <div class="card Excursiones" id="Excursion ${Excursiones.id}" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title"> ${Excursiones.nombre} </h5>
    <p class="card-title"> ${Excursiones.duracion} </p>
    <p class="card-title"> ${Excursiones.precio} </p>
    <p class="card-title"> ${Excursiones.lugares} </p>
</div>
</div>
`
})