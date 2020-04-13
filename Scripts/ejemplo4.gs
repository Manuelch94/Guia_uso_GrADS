* Ejemplo de uso GSL
* Todo comando de GrADS va entre comillas ""
* El archivo DEBE de guardarse con extension .gs
* Abriendo multiples archivos
*********************************************

* Se inicia primero con el comando "reinit", este limpia
* y borra variables y graficos hechos anteriormente 
"reinit"

*** Usando GLS para leer cada unda de las variables uwnd del conjunto de archivos

file = 1
while (file < 5) 
* Se abren los archivos
    "sdfopen U"file".nc"

* Para cambiar el fondo, seguido de un "clear" para que tome efecto
    "set display color white"
    "c"
* Para hacer un grafico de contorno relleno (contour fill)
    "set gxout shaded"

* Para usar un mapa en alta resolucion
    "set mpdset hires"
        

* Se despliega la variable correspondiente a cada uno de los archivos
    "d uwnd"

* Para ponerle un titulo al grafico
    "draw title Example 4 Zonal Wind (m/s) File"file

* Poner la barra de color, este script (cbarn.gs) DEBE de estar en la misma ubicacion
* donde se corra este ejemplo
    "run cbarn.gs"

* Para guardar la imagen generada con resolucion por defecto
    "printim out_ejemplo4_archivo"file".png"
    "c"
    "close "file
    "reinit"
    file=file+1 

endwhile
