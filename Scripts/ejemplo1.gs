* Ejemplo de grafico de viento Zonal
* Todo comando de GrADS va entre comillas ""
* El archivo DEBE de guardarse con extension .gs

* El script grafica el viento zonal de un archivo .nc en forma de 
* contorno relleno.
*********************************************

* Se inicia primero con el comando "reinit", este limpia
* y borra variables y graficos hechos anteriormente 
"reinit"

* Abrir el archivo (para un archivo .nc) 
"sdfopen U.nc"

* Despliega informacion del archivo entre ellas las varibles
* que contiene, en este caso uwnd es la variable para el viento
* zonal
* "q file"

* Se selecciona la longitud y la latitud de ser necesario
* "set lat 10 25"
* "set lon -110 -85"

* Para cambiar el fondo, seguido de un "clear" para que tome efecto
"set display color white"
"c"

* Para hacer un grafico de contorno relleno (contour fill)
"set gxout shaded"

* Para usar un mapa en alta resolucion
"set mpdset hires"

* Se despliega la variable correspondiente
"d uwnd"

* Para ponerle un titulo al grafico
"draw title Example Zonal Wind (m/s)"

* Poner la barra de color, este script (cbarn.gs) DEBE de estar en la misma ubicacion
* donde se corra este ejemplo
"run cbarn.gs"

* Para guardar la imagen generada con resolucion por defecto
"printim out_ejemplo1.png"

* Fin del ejemplo
*******************************************************************
