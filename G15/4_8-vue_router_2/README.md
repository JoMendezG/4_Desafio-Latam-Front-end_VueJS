# Implementación de Vue Router y uso de rutas

## Descripción

Al blog de noticias y reseñas **V8** (diseñado y construido en el desafío anterior), le han propuesto desarrollar una serie de modificaciones, las cuales consisten en:

- Crear una página de administrador con la ruta **/administrador**. Se requiere que a través de la URL se le pueda entregar el tipo de administrador, los cuales pueden ser de 2 tipos:

  - **Administrador simple:** Se deberá acceder cuando el usuario ingrese la ruta /administrador/simple. Al hacer esto, la página deberá mostrarle un mensaje a través de una etiqueta h1 con el texto “Bienvenido a la página de Administración”.

  - **Administrador avanzado:** Se deberá acceder cuando el usuario ingrese la ruta /administrador/avanzado. Al hacer esto, la página deberá mostrarle un mensaje a través de una etiqueta h1 con el texto “Esta página de administración está en construcción. Intente como administrador simple”.

  - **Dirección equivocada:** Simplemente generar un mensaje indicando que la ruta no existe.

**Tip:** Se sugiere copiar el elemento\* **header** de los otros componentes, pegarlo en el componente de Administrador y agregar el mensaje a la etiqueta **strong\***.\*

- **Generar una redirección:** Cuando el usuario ingrese como ruta **/home**, **/inicio** o **/portada**, el sitio lo redireccione a la página raíz.

- Crear acceso alternativo a las rutas **/contacto** y **/sobremi**:

  - El usuario del blog tendrá la opción de escribir tanto la ruta **/contacto** como **/contactame** para acceder a la página de contacto.

  - El usuario del blog tendrá la opción de escribir tanto la ruta **/sobremi** como **/acerca** para acceder a la página de sobre mi.

- Generar un efecto de transición entre una vista y otra (ej: al pasar de **/portada** a **/contacto**). Para ésto, se requiere que cuando se cargue una vista inicie con opacidad en 0% y, al cabo de 0.1 segundo, la opacidad sea de un 100%.

**Tip:** La transición debe modificar el archivo App.vue, específicamente el elemento router-view que se encarga de desplegar las vistas.

- Para acelerar la carga inicial del sitio, se requiere que las vistas de **Inicio, Sobre mí, Contacto y Último** post se carguen mediante la técnica de Lazy Loading.

## Requerimientos

1. Copia una nueva carpeta el desafío realizado anteriormente en la primera sesión presencial de esta unidad (Desafío - Implementación de Vue Router y uso de rutas), el cual, será la base para realizar este desafío actual. Debido a que se realizarán modificaciones y se agregaran nuevas funcionalidades al sitio web V8.

1. Ahora, sobre la copia de tu desafío anterior, debes crear las rutas de **administrador/simple** y **/administrador/avanzado**, desplegando el mensaje solicitado.

1. Crear redireccionamiento desde las rutas de **/home, /inicio y /portada** hacia la página raíz del sitio.

1. Crear los alias indicados a las rutas de **/contacto** y **/sobremi**. Dichos alias serán contactame para la ruta de **/contacto** y acerca para la ruta **/sobremi**.

1. Crear efectos de transición utilizando la propiedad CSS **opacity** y la propiedad de Vue-Router "transition", para cargar las vistas de **Portada, Sobre mí, Contacto y Último post**

1. Modificar la carga de las vistas de **Portada, Sobre mí, Contacto y Último post** para que utilicen la técnica de Lazy Loading.

## Recursos

El recurso para este desafío es la solución del desafío anterior. Por lo tanto, debes dar respuesta al primer desafío de esta unidad para poder iniciar la solución de este nuevo reto, posteriormente crear una copia del desafío anterior y utilizarla como base o archivo de apoyo. Recuerda, si tienes dudas o inquietudes consulta a tu facilitar, que gustosamente te ayudará a solventar cada una de ellas.
