Algoritmo MatriculaUniversidad
	Definir nombre,identificacion,correo,telefono Como Caracter
	Definir cursos Como Cadena
    Definir total Como Real
    Definir curso Como Cadena
    Definir seguir Como Caracter
	
	
	Escribir 'Bienvenido al sistema de matrícula de la Universidad Politécnica Internacional'
	Escribir 'Ingrese su nombre completo: '
	Leer nombre
	Escribir 'Ingrese su número de identificación (cédula o pasaporte): '
	Leer identificacion
	Escribir 'Ingrese su correo electrónico: '
	Leer correo
	Escribir 'Ingrese su número de teléfono: '
	Leer telefono
	
	cursos <- ""  
    total <- 0  
    
    
    Repetir
        
        Escribir "Ingrese el nombre del curso: "
        Leer curso
        
 
        cursos <- cursos + curso + ", "
        

        total <- total + 80000
        
        
        Escribir "¿Desea ingresar otro curso? (S/N): "
        Leer seguir
        
    Hasta Que seguir = "N" o seguir = "n"
    
 
    Escribir "Total acumulado: $", total
	

	Escribir 'Resumen de Matrícula'
	Escribir 'Nombre: ',nombre
	Escribir 'Identificación: ',identificacion
	Escribir 'Correo: ',correo
	Escribir 'Teléfono: ',telefono
	Escribir "Cursos seleccionados: ", cursos
	Escribir "Total acumulado: ", total

FinAlgoritmo
