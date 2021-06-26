let btnConfirmar = document.querySelector('.js-botao-matricula');
let tdTotalCursos = document.querySelector('.js-total-cursos');
let tdTotalHoras = document.querySelector('.js-total-horas');
let tabelaCursos = document.querySelector('.js-tabela-cursos');

let totalCursos = 0;
let totalHoras = 0;

tabelaCursos.onchange = function(event) {
    let checkbox = event.target;
    if (checkbox.checked) {
        totalCursos++;
        totalHoras += parseInt(checkbox.value);
    }
    else {
        totalCursos--;
        totalHoras -= parseInt(checkbox.value);
    }

    tdTotalCursos.textContent = totalCursos + " curso(s)";
    tdTotalHoras.textContent = totalHoras + "h";
}

btnConfirmar.onclick = function() {
    if (totalCursos == 0) {
        alert('Por favor, selecione ao menos 1 curso para confirmar sua matricula!');
    }
    else {
        alert('Matricula realizada com sucesso!');
        window.location = 'index.html';
    }
}