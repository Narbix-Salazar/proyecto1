document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Crea una etiqueta de imagen para mostrar la vista previa
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            
            // Borra el contenido anterior en el contenedor de vista previa
            const previewContainer = document.getElementById('imagePreview');
            previewContainer.innerHTML = ''; // Limpia el contenedor
            
            // Agrega la nueva imagen al contenedor
            previewContainer.appendChild(imgElement);
        };
        
        // Lee el archivo como una URL de datos (base64)
        reader.readAsDataURL(file);
    }
});
const carreras = {
    bachiller: {
        empresariales: ["Administración de Empresas", "Contabilidad", "Economía", "Marketing"],
        diseño: ["Diseño Gráfico", "Comunicación Visual", "Publicidad"],
        derecho: ["Derecho Civil", "Derecho Penal", "Derecho Notarial y Registral"],
        educación: ["Educación Primaria", "Educación Secundaria"],
        industrial: ["Ingenería Industrial", "Gestión de Calidad"],
        informatica: ["Ingeniería de Software", "Sistemas Computacionales"],
        psicologia: ["Psicología Clínica", "Psicología Organizacional"]
    },
    tecnico: {
        empresariales: ["Técnico en Administración", "Técnico en Marketing"],
        diseño: ["Técnico en Diseño Gráfico", "Técnico en Animación"],
        derecho: ["Asistente Jurídico"],
        educación: ["Asistente Educativo"],
        industrial: ["Técnico en Producción Industrial", "Técnico en Logística"],
        informatica: ["Técnico en Redes", "Técnico en Desarrollo Web"],
        psicologia: ["Asistente de Psicología"]
    }
};
function mostrarFacultades() {
    var nivelEducacion = document.getElementById("nivel-educacion").value;
    var facultadBachiller = document.getElementById("facultad-bachiller");
    var facultadTecnico = document.getElementById("facultad-tecnico");

    if (nivelEducacion === "bachiller") {
        facultadBachiller.style.display = "flex";
        facultadTecnico.style.display = "none";
    } else if (nivelEducacion === "tecnico") {
        facultadBachiller.style.display = "none";
        facultadTecnico.style.display = "flex";
    } else {
        facultadBachiller.style.display = "none";
        facultadTecnico.style.display = "none";
    }
}

function mostrarCarreras(nivelEducacion) {
    var facultadSelectId = nivelEducacion === 'bachiller' ? 'facultad-bachiller-select' : 'facultad-tecnico-select';
    var facultad = document.getElementById(facultadSelectId).value;
    
    // Ocultar todas las opciones de carrera
    var todasLasCarreras = document.querySelectorAll('.carrera-options');
    todasLasCarreras.forEach(function(opcion) {
        opcion.style.display = 'none';
    });

    // Mostrar las carreras correspondientes
    if (nivelEducacion === 'bachiller') {
        if (facultad === 'empresariales') {
            document.getElementById('carreras-bachiller-empresariales').style.display = 'block';
        } else if (facultad === 'derecho') {
            document.getElementById('carreras-bachiller-derecho').style.display = 'block';
        }
        else if (facultad === 'diseño') {
            document.getElementById('carreras-bachiller-diseño').style.display = 'block';
        }
        else if (facultad === 'educacion') {
            document.getElementById('carreras-bachiller-educacion').style.display = 'block';
        }
        else if (facultad === 'industrial') {
            document.getElementById('carreras-bachiller-industrial').style.display = 'block';
        }
        else if (facultad === 'informatica') {
            document.getElementById('carreras-bachiller-informatica').style.display = 'block';
        }
        else if (facultad === 'psicologia') {
            document.getElementById('carreras-bachiller-psicologia').style.display = 'block';
        }
        // Agrega más casos según las facultades de bachillerato
    } else if (nivelEducacion === 'tecnico') {
        if (facultad === 'empresariales') {
            document.getElementById('carreras-tecnico-empresariales').style.display = 'block';
        }else if (facultad === 'diseño') {
            document.getElementById('carreras-tecnico-diseño').style.display = 'block';
        }
        else if (facultad === 'electricidad') {
            document.getElementById('carreras-tecnico-electricidad').style.display = 'block';
        }
        else if (facultad === 'educacion') {
            document.getElementById('carreras-tecnico-educacion').style.display = 'block';
        }
        else if (facultad === 'industrial') {
            document.getElementById('carreras-tecnico-industrial').style.display = 'block';
        }
        else if (facultad === 'informatica') {
            document.getElementById('carreras-tecnico-informatica').style.display = 'block';
        }
        else if (facultad === 'idiomas') {
            document.getElementById('carreras-tecnico-idiomas').style.display = 'block';
        }
        
        // Agrega más casos según las facultades técnicas
    }
}
function mostrarMaterias(nivelEducacion, facultad) {
    // Construir el ID del select de carrera y de materias basándonos en el nivel de educación y facultad seleccionados
    var carreraSelectId = nivelEducacion === 'bachiller' ? 'carrera-bachiller-' + facultad : 'carrera-tecnico-' + facultad;
    var materiasSelectId = nivelEducacion === 'bachiller' ? 'materias-bachiller-' + facultad : 'materias-tecnico-' + facultad;

    // Obtener el valor seleccionado de la carrera
    var carrera = document.getElementById(carreraSelectId).value;

    // Ocultar todas las opciones de materias
    var materiasOptions = document.querySelectorAll('.materias-options');
    materiasOptions.forEach(function(option) {
        option.style.display = 'none';
    });

    // Mostrar las opciones de materias correspondientes a la carrera seleccionada
    var materiasDiv = document.getElementById(materiasSelectId);
    if (materiasDiv) {
        materiasDiv.style.display = 'block';
    }
}
function mostrarMaterias(nivelEducacion, facultad) {
    var carreraSelectId = nivelEducacion === 'bachiller' ? 'carrera-bachiller-' + facultad : 'carrera-tecnico-' + facultad;
    var carrera = document.getElementById(carreraSelectId).value;

    // Ocultar todas las opciones de materias
    var materiasOptions = document.querySelectorAll('.materias-options');
    materiasOptions.forEach(function(option) {
        option.style.display = 'none';
    });

    // Mostrar las opciones de materias correspondientes
    var materiasSelectId = nivelEducacion === 'bachiller' ? 'materias-bachiller-' + facultad : 'materias-tecnico-' + facultad;
    var materiasDiv = document.getElementById(materiasSelectId);
    if (materiasDiv) {
        materiasDiv.style.display = 'block';
    }
}
function calcularTotal() {
    document.getElementById('factura-detalle').innerHTML = '';
    var total = 65000; // Costo fijo de matrícula
    var materiaCheckboxes = document.querySelectorAll('.materias-options input[type="checkbox"]:checked');
    var detalles = "Materias seleccionadas:<br>";

    materiaCheckboxes.forEach(function(checkbox) {
        total += 80000; // Costo de cada materia
        detalles += `- ${checkbox.parentNode.textContent.trim()}<br>`;
    });

    detalles += `Total matrícula: ₡${total.toLocaleString()}`;

    document.getElementById('factura-detalle').innerHTML = detalles;
    document.getElementById('factura').style.display = "block";
}
function registrarInformacion() {
    // Datos personales
    var tipoId = document.getElementById("tipoid").value;
    var identificacion = document.getElementById("identificacion").value;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var genero = document.getElementById("genero").value;

    // Estado civil
    var union = document.getElementById("union").value;

    // Datos de contacto
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var emergencia = document.getElementById("emergencia").value;
    var numEmergencia = document.getElementById("numemergencia").value;
    var provincia = document.getElementById("provincia").value;
    var canton = document.getElementById("canton").value;
    var distrito = document.getElementById("distrito").value;

    // Información educativa
    var nivelEducacion = document.getElementById("nivel-educacion").value;
    var facultadSelect = document.querySelector(`#facultad-${nivelEducacion}-select`);
    var facultad = facultadSelect ? facultadSelect.value : "";
    var carreraSelect = document.querySelector(`#carrera-${nivelEducacion}-${facultad}`);
    var carrera = carreraSelect ? carreraSelect.value : "";
    var materiasSeleccionadas = document.querySelectorAll(`.materias-options input[type="checkbox"]:checked`);
    var materias = Array.from(materiasSeleccionadas).map(cb => cb.parentNode.textContent.trim()).join(", ");
    var colegio = document.getElementById("colegio").value;
    

    var registroDetalles = `
        Tipo de Identificación: ${tipoId}<br>
        Número de Identificación: ${identificacion}<br>
        Nombre: ${nombre}<br>
        Apellidos: ${apellidos}<br>
        Fecha de Nacimiento: ${fechaNacimiento}<br>
        Género: ${genero}<br>
        Estado Civil: ${union}<br>
        Correo Electrónico: ${email}<br>
        Teléfono Personal: ${telefono}<br>
        Emergencia Contacto: ${emergencia}<br>
        Teléfono Emergencia: ${numEmergencia}<br>
        Provincia: ${provincia}<br>
        Cantón: ${canton}<br>
        Distrito: ${distrito}<br>
        Colegio: ${colegio}<br>
        Nivel de Educación: ${nivelEducacion}<br>
        Facultad: ${facultad}<br>
        Carrera: ${carrera}<br>
        Materias Seleccionadas: ${materias}<br>
    `;
    
    document.getElementById('registro-detalle').innerHTML = registroDetalles;
    document.getElementById('registro').style.display = "block";
    
}
function limpiarFormulario() {
    // Limpiar todos los campos de entrada
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);

    // Ocultar secciones
    document.getElementById('facultad-bachiller').style.display = 'none';
    document.getElementById('facultad-tecnico').style.display = 'none';
    document.querySelectorAll('.carrera-options').forEach(option => option.style.display = 'none');
    document.querySelectorAll('.materias-options').forEach(materia => materia.style.display = 'none');

    // Limpiar detalles de factura y registro
    document.getElementById('factura-detalle').innerHTML = '';
    document.getElementById('registro-detalle').innerHTML = '';
    document.getElementById('imagePreview').innerHTML = '';

    // Ocultar secciones de factura y registro
    document.getElementById('factura').style.display = 'none';
    document.getElementById('registro').style.display = 'none';
}
