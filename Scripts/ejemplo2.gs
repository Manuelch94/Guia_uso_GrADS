* Ejemplo de grafico Lineas de Corriente
* Todo comando de GrADS va entre comillas ""
* El archivo DEBE de guardarse con extension .gs

* El script grafica lineas de corriente a partir de dos archivos .nc
*********************************************

* Se inicia primero con el comando "reinit", este limpia
* y borra variables y graficos hechos anteriormente 
"reinit"

* Abrir el archivo (para un archivo .nc) 
"sdfopen U.nc"
"sdfopen V.nc"

* Se selecciona la longitud y la latitud de ser necesario
* "set lat 10 25"
* "set lon -110 -85"

* Para cambiar el fondo, seguido de un "clear" para que tome efecto
"set display color white"
"c"

* Para usar un mapa en alta resolucion
"set mpdset hires"

********************************************************
****** Dandole formato a las Lineas de corriente
* Para Graficar lineas de corriente
"set gxout stream"

* Color de las lineas de corriente de ser necesario.
* Por ejemplo: verde = 3
*"set ccolor 3" 

* Grosor de las lineas de corriente, de 1 a 10:
"set cthick 2"

* Densidad de las lineas de corriente, de 1 a 10:
"set strmden 5"

****** Fin de formato a lineas
**********************************************************

* Se despliega las variables correspondientes
* del archivo 1 uwnd.1
* del archivo 2 vwnd.2 
"d uwnd.1;vwnd.2"

* Para ponerle un titulo al grafico
"draw title Example Streamlines"

* Para guardar la imagen generada
"printim out_ejemplo2.png"


* Fin del ejemplo
*******************************************************************



