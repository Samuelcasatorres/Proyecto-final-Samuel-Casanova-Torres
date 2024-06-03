Página de Catálogo de Productos (productos.html)
Header: Contiene el logo y el nombre de la empresa "Repuestos LauSam" y un menú de navegación con enlaces a las páginas de registro, buscador y indicaciones.
Cuerpo Principal:
Muestra un catálogo de productos con paginación.
Los productos se cargan dinámicamente desde un archivo JavaScript (script.js) que obtiene los datos almacenados en localStorage.
2. Página de Registro de Productos (registro.html)
Formulario de Registro: Permite a los usuarios registrar nuevos productos ingresando detalles como nombre, categoría, imagen, precio, código del producto, durabilidad, eficiencia y garantía.
Validaciones:
El código del producto debe tener al menos una minúscula, una mayúscula y dos números.
El precio debe estar en pesos y solo debe contener números.
Se proporciona una lista de opciones para la imagen del producto y otros atributos.
3. Página de Buscador de Productos (buscador.html)
Buscador:
Permite buscar productos por nombre, categoría y precio máximo.
Los resultados se muestran dinámicamente y se pueden paginar.
Limpieza de Búsqueda: Botón para limpiar los criterios de búsqueda y mostrar todos los productos.
4. Página de Indicaciones (indicaciones.html)
Información General: Descripción de la empresa y su liderazgo en la venta de repuestos de alta calidad.
Instrucciones: Detalles sobre cómo registrar un producto correctamente.
Ejemplos: Ejemplo de código de producto válido y otras indicaciones útiles.
5. Estilos (styles.css)
Diseño Visual: Estilos para la disposición de elementos en la página, incluyendo el header, el formulario de registro, la lista de productos, y la paginación.
Responsive Design: El diseño es adaptable a diferentes tamaños de pantalla gracias al uso de flexbox y otros estilos.
6. Funcionalidades JavaScript (script.js)
Gestión de Productos:
Almacena productos en localStorage y los muestra en el catálogo.
Permite registrar nuevos productos mediante un formulario.
Función de búsqueda y filtrado de productos.
Paginación de productos.
Validaciones y gestión de errores para asegurar que los datos ingresados son correctos.
Funcionamiento General:
Registro de Productos: Los usuarios pueden agregar nuevos productos mediante un formulario en la página de registro. Los productos se guardan en localStorage.
Catálogo: Los productos registrados se muestran en la página de catálogo, donde se pueden ver detalladamente con su imagen, categoría, precio, código, durabilidad, eficiencia y garantía.
Buscador: Permite a los usuarios buscar productos específicos según diferentes criterios y mostrar los resultados filtrados.
Indicaciones: Proporciona instrucciones detalladas sobre cómo usar la plataforma y registrar productos correctamente.
Logo (logo.png)
El archivo del logo se usa en el encabezado de todas las páginas para mostrar la identidad visual de la empresa.

Este proyecto proporciona una solución integral para gestionar y buscar repuestos de automóviles de manera eficiente.
