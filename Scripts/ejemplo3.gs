* Ejemplo de grafico VARIABLE precipitacion
* Todo comando de GrADS va entre comillas ""
* El archivo DEBE de guardarse con extension .gs
*
* El script grafica precipitacion
* Ambos scripts xcbar y color deben de estar en
* la misma ubicacion
*********************************************

* Se inicia primero con el comando "reinit", este limpia
* y borra variables y graficos hechos anteriormente 
"reinit"

* Abrir el archivo (para un archivo .nc) 
"sdfopen PRECI.nc"

* Para cambiar el fondo, seguido de un "clear" para que tome efecto
"set display color white"
"c"

* Se selecciona la longitud y la latitud de ser necesario
"set lat 0 30"
"set lon -120 -60"

* Para hacer un grafico de contorno relleno (contour fill)
"set gxout shaded"

* Se usa "color" para modificar la barra de color 
* y crear una perzonalizada
"color 0 90 5 -kind mintcream->lightskyblue->skyblue->dodgerblue->royalblue->navy"

* Se despliega la variable:
"d precip"

* Se despliega la barra de color:
"run xcbar"

* Para ponerle un titulo al grafico
"draw title Example PPT"

* Para guardar la imagen generada
"printim out_ejemplo3.png"

* Fin del ejemplo
*******************************************************************

