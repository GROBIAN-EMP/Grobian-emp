/* Verificamos que el DOM este completamente cargado */
		$(document).ready(function(){
			/* Declaramos un nuevo arreglo para almacenar las imagenes */
			var imagenes = new Array();
			/* Variable para almacenar la posicion que se muestra (número de imagen del arreglo) */
			var position = 0;
			/* Establecer el tamaño del contenedor de las imagenes en base al tamaño de la imagen mediante CSS */
			$('section').css({
				'position' : 'relative', /* Establecemos posicionamiento relativo para el div.slide ya que contendra elementos con posicionamiento absoluto */
				'width' : $('section img').width(), /* Obtenemos el ancho de la imagen que esta dentro del div.slide */
				'height' : $('section img').height(), /* Obtenemos el alto de la imagen que esta dentro del div.slide */
			});
			/* Propiedades CSS para las imagenes del slide */
			$('section').find('img').css({
				'position' : 'absolute', /* Se vuelve absoluto el posicionamiento para que se visualicen en el mismo lugar todas */
			}).hide(); /* Usamos hide() para ocultar todas las imagenes */
			/* Obtenemos las imagenes */
			$('section img').each(function(index){ /* El valor index funciona como contador para establecer el número de elementos que esta recorriendo */
				imagenes[index] = $(this); /* Almacenamos como objeto cada una de las imagenes en el arreglo */
			}); /* Utilizamos la funcion each() para recorrer todos los elementos img que se encuentren dentro del div.slide */
			/* Tamaño del arreglo */
			var images_length = imagenes.length;
			/* Hacemos visible con show() el primer elemento del arreglo para que no se muestre el bloque vacio durante los primeros segundos */
			$(imagenes[0]).show();
			/* Utilizamos setInterval para repetir la funcion */
			setInterval(function(){
				/* Utilizamos fadeOut() para desvanecer la imagen */
				$(imagenes[position]).fadeOut();
				/* Incrementamos en uno la posición para utilizar el siguiente elemento */
				position = position + 1;
				/* Verificamos que la posicion sea menor que el tamaño de nuestro arreglo de imagenes */
				if(position < images_length)
				{
					/* Utilizamos fadeIn() para mostrar la siguiente imagen */ 
					$(imagenes[position]).fadeIn('slow');
				}
				else
				{
					/* En caso de que el valor de position sea igual al tamaño del arreglo lo volvemos cero para mostrar la primera imagen otra vez */
					position = 0;
					/* Utilizamos fadeIn() para mostrar la siguiente imagen */ 
					$(imagenes[position]).fadeIn('slow');
				}
			}, 5000);
		});
