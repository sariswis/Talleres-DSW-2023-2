import { series } from './data.js';
function hacerTabla() {
    const tabla = document.querySelector('.table tbody');
    if (tabla) {
        series.forEach((serie) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `<th scope="row">${serie.id}</th>
                            <td class="show-card">${serie.nombre}</td>
                            <td>${serie.canal}</td>
                            <td>${serie.temporadas}</td>`;
            const card = document.querySelector('#details');
            const show = fila.querySelector('.show-card');
            if (show) {
                show.addEventListener('click', () => {
                    if (card) {
                        card.innerHTML = `<div class="card">
                                            <img class="card-img-top" src="${serie.imagen}" alt="${serie.nombre} picture">
                                            <div class="card-body">
                                                <h5 class="card-title">${serie.nombre}</h5>
                                                <p class="card-text">${serie.descripcion}</p>
                                                <a href="${serie.link}" target="_blank">${serie.link}</a>
                                            </div>
                                        </div>`;
                    }
                });
            }
            tabla.appendChild(fila);
        });
    }
    else {
        console.error("No se encontró ningún elemento de tipo table");
    }
}
function hacerPromedio() {
    const resumen = document.querySelector('span');
    if (resumen) {
        let promedio = 0;
        series.forEach((serie) => {
            promedio += serie.temporadas;
        });
        promedio = promedio / series.length;
        resumen.innerHTML = `${promedio}`;
    }
    else {
        console.error("No se encontró ningún elemento de tipo span");
    }
}
hacerTabla();
hacerPromedio();
