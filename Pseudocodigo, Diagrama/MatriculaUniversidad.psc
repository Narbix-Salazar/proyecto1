Algoritmo MatriculaUniversidad
	Definir nombre,identificacion,correo,telefono Como Caracter
	Definir cursos Como Cadena
    Definir total Como Real
    Definir curso Como Cadena
    Definir seguir Como Caracter
	
	
	Escribir 'Bienvenido al sistema de matr�cula de la Universidad Polit�cnica Internacional'
	Escribir 'Ingrese su nombre completo: '
	Leer nombre
	Escribir 'Ingrese su n�mero de identificaci�n (c�dula o pasaporte): '
	Leer identificacion
	Escribir 'Ingrese su correo electr�nico: '
	Leer correo
	Escribir 'Ingrese su n�mero de tel�fono: '
	Leer telefono
	
	cursos <- ""  
    total <- 0  
    
    
    Repetir
        
        Escribir "Ingrese el nombre del curso: "
        Leer curso
        
 
        cursos <- cursos + curso + ", "
        

        total <- total + 80000
        
        
        Escribir "�Desea ingresar otro curso? (S/N): "
        Leer seguir
        
    Hasta Que seguir = "N" o seguir = "n"
    
 
    Escribir "Total acumulado: $", total
	

	Escribir 'Resumen de Matr�cula'
	Escribir 'Nombre: ',nombre
	Escribir 'Identificaci�n: ',identificacion
	Escribir 'Correo: ',correo
	Escribir 'Tel�fono: ',telefono
	Escribir "Cursos seleccionados: ", cursos
	Escribir "Total acumulado: ", total

FinAlgoritmo
