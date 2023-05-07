Dejo varias cosas aca porque esta entrega se me complico bastante

-Operador Ternario / AND / OR: se utilizo en este codigo.

-Optimización: se pueden hacer mejoras de rendimiento en el codigo, como por ejemplo, 
evitar el uso de la función querySelector cada vez que se necesita obtener un elemento del DOM, 
y en su lugar guardar una referencia al elemento en una variable. También se podria optimizar 
la función ValoresMonedas para que no tenga que recorrer todo el objeto de valores cada vez que se llama.

-Desestructuración: No se utilizo en este codigo.

-Spread: No se utilizo en este codigo.

-No creo ningún objeto explícitamente en este código para controlar el funcionamiento del simulador. 
Sin embargo, el evento submit del formulario y las funciones getExchangeRate, ValoresMonedas y 
mostrarMensaje son utilizados para controlar el flujo del programa.

No hay un constructor explícito en el codigo, ya que no se esta creando una clase que necesite un constructor. 
En cuanto a las propiedades, las variables form, moneda, criptomoneda, exchangeRate y containerAnswer son 
utilizadas en diferentes partes del código para almacenar y manipular informacion.

Se invoca al objeto form cuando se le agrega el evento submit. Es decir, cuando el usuario realiza la accion 
de enviar el formulario, se ejecuta el codigo asociado al evento submit.

Se utilizan los metodos preventDefault() para evitar que el formulario se envie automaticamente, 
innerHTML para mostrar el resultado de la cotizacion en el contenedor correspondiente, y appendChild() 
y remove() para mostrar mensajes al usuario y luego eliminarlos despues de un tiempo determinado. 
Tambien se utiliza el metodo toLocaleString() para formatear el resultado de la cotizacion con puntos separando los miles.


Dejo estos comentarios porque son las cosas que se pedian en esta entrega y como ven, (algunas cosas habian dicho que no 
hacian falta ponerlas) quise intentar agregar todas las opciones, metodos y propiedades que explicaron en clase.
Tambien corregi los puntos de la entrega anterior.
Dejame en los comentarios si esta bien la cantidad de contenido en esta entrega, porque la verdad no sabia que mas hacer.
Para la proxima entrega voy a agregar una tabla para ver las conversiones de las criptomonedas y una opcion para agregar mas criptomonedas.
