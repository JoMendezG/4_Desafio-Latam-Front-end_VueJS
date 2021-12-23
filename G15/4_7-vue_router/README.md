# - Implementación de Vue Router y uso de rutas

## Descripción

En este desafío se creará un pequeño Blog dedicado al automovilismo llamado V8, el cual se dividirá en seis (6) partes:

- **Portada:** Primera vista que visualizará el usuario al entrar al sitio web.
- **Sobre mí:** Vista que indicará un breve resumen del propósito del sitio web.
- **Contacto:** Vista que tendrá un formulario de contacto.
- **Último post:** Vista que tendrá el último post creado. De momento, sólo se requiere un solo post.
- **Rutas inexistentes:** Vista para las llamadas a rutas inexistentes.

Para lo anterior, se adjunta un archivo llamado **Apoyo Desafío - Implementación de Vue Router y uso de rutas**, donde encontrarás una serie de archivos que conforman la instalación mediante Vue-CLi, que amerita la instalación de las dependencias con **npm install**, al igual que la instalación de Vue Router como plugin. Para poder ejecutar este proyecto, se debe hacer uso del comando **npm run serve**, tal cual como se indica en el script del archivo package.json.

Adicionalmente, encontrarás en la raíz del proyecto una carpeta llamada /secciones, la cual contiene archivos HTML con el código necesario para cada vista correspondiente. En la primera línea de cada archivo se indica a qué sección corresponde cada contenido, por lo tanto, debes utilizar ese contenido como base dentro del “template” de los componentes creados por cada archivo con la extensión de ".vue".

Considerando que el proyecto se está ejecutando bajo la dirección http://localhost:8080/ se requiere la siguiente estructura de rutas:

- Para la sección **Portada**, la ruta deberá ser: http://localhost:8080/
- Para la sección **Sobre mí**, la ruta deberá ser: http://localhost:8080/sobremi
- Para la sección **Contacto**, la ruta deberá ser: http://localhost:8080/contacto
- Para la sección **Último post**, la ruta deberá ser: http://localhost:8080/post/1, donde 1 representa el número de post y podrá variar dependiendo de lo que ingrese el usuario. Independiente del número de post, se debe mostrar siempre el mismo contenido. Por lo tanto, en este caso, debes utilizar el contenido del post como padre y el contenido del artículo como hijo.
- Para la sección **Rutas inexistentes**, la ruta podrá ser cualquiera que no esté
  registrada.

Como último, deberá modificar la vista principal (**App.vue**) para que cada enlace dentro del menú de navegación apunte a la vista correspondiente, utilizando las rutas nombradas y las rutas estáticas según se indique.

## Requerimiento

1. Crear un proyecto Vue a través de Vue CLI e instalar Vue Router a través de NPM.
1. Crear archivo de rutas e implementar Vue Router como plugin en las dependencias
   existentes
1. Crear los componentes necesarios para visualizar las vistas de **Portada, Sobre Mí, Contacto, Último post y rutas inexistentes.**
1. Crear las rutas en el archivo de rutas estáticas, rutas anidadas y rutas dinámicas necesarias para visualizar correctamente las vistas solicitadas.
1. Modificar la vista principal (**App.vue**) para incluir un menú de navegación a través de las vistas.
1. Crear una vista comodín para páginas inexistentes.

## Consejos

- Descarga primeramente el archivo de apoyo.
- Luego instala las dependencias utilizando **npm install** en la terminal.
- Crea dentro de la carpeta de componentes cada una de las vistas con la extensión
  de vue. Aquí debes ir pasando el contenido mostrado en los archivos html dentro de
  la carpeta secciones.
- Recuerda instalar Vue-Router desde la terminal para que se agregue a las dependencias.
- Crea un archivo con la extensión de js donde se configuraran las rutas mediante
  vue-router.
- Modifica el archivo App.vue agregando las etiquetas necesarias para enlazar las
  rutas con sus vistas.
