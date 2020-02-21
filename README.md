

# Wallasport Frontend V 1.0

Frontal desarrollado en React en el contexto de la práctica final del bootcamp de Desarrollo de Aplicaciones Web de Keepcoding. Año 2019/2020. --> [wsfrontend.codinglab.es](https://wsfrontend.codinglab.es/)

Wallasport es una plataforma que permite la compra y venta de productos de segunda mano relacionados con el deporte.


**Tabla de Contenidos**

[TOCM]

[TOC]


## Detalles del desarrollo
### Consideraciones generales
* La arquitectura seleccionada es de tipo API/REST, donde este frontal está desarrollado con React. La parte de [backend](https://wsbackend.codinglab.es/) está desarrollada con express en node, y usa una base de datos basada en MongoDB.
* Todo el sistema está alojado en una instancia EC2 de Amazon Web Service bajo el dominio codinglab.es.
* Wallasport tiene integrados dos idiomas, inglés y español. Está perfectamente preparada preparada para añadir cuantos idiomas sean necesarios en el futuro.

### Detalles técnicos a destacar
#### Relativos a la infraestructura
* Se ha llevado especial atención en la securización del sistema.
	* Cambio de puerto por defecto de SSH
	* Uso de proxys inversos en nginx con el fin de no abrir puertos innecesarios al exterior.
	* El usuario que maneja las aplicaciónes no tiene posibilidad de login desde fuera.
	* Base de datos Mongo securizada a nivel administración. Además, tiene un usuario específico para manejar la conexión a la base de datos.
	* Certificado de seguridad configurado con let's encrypt y certbot.
	* Despliegue automático de las aplicaciones con pm2.
	* Scripts de shell preparados para un despliegue semi-continuo.

#### Relativos a REACT
* Diseño basado en componentes
	* Se ha tratado de reaprovechar algunos componentes como el de Login/Registro o el Crear/Editar anuncio para evitar duplicar código.
* Amplio uso de Redux. 
	* Se ha tratado de llevar la lógica común de la aplicación a Redux para aliviar lógica a los componentes.
	* Se ha usado combine reducer para diferenciar las diferentes partes del estado.
	* Amplia variedad de acciones, entre las que cabe destacar las asíncronas de tipo Thunk.
	* Se ha tratado de estructurar toda esta parte de la mejor manera para que la aplicación pueda seguir evolucionando de manera escalabale.
* Uso de hooks en prácticamente todos los componentes.

#### Relativos a la parte público/privada
* Se ha implementado un sistema de login mediante JWT
* Se ha hecho uso de LocalStorage del nevador para persistir el usuario.
* Se ha definido dos roles.
	* Usuario anónimo, el cual puede acceder a la zona pública.
	* Miembro de la plataforma, el cual puede acceder a funcionalidades privadas, entre las que se encuentran:
		* Administración de su perfil
		* Administración de sus productos
		* Posibilidad de interactuar con los productos de otros miembros.

#### Completa batería de tests
* Completa batería de tests usando Jest.
	* Se han hecho tests para testear Redux.
		* Acciones
		* Reducers
		* Selectores
	* Se han hecho test de componentes
		* Funcionales
		* De tipo snapshots

#### Otros
* La paginación se hace desde la parte del frontal usando la potencia de redux. Aún así, la API está preparada para devolver anuncios limitando en número entre otras cosas. Queda pendiente valorar en siguientes versiones si esto merece un cambio. 
* Integración de librería material UI de React para el diseño.
* Las traducciones se han implementado con la ayuda de i18n.
* Se hace uso de un fichero .env para almacenar las variables de entorno privadas.


### Historias de usuario completadas (backend + frontend)
#### Zona pública
1. Registro de usuario
	* Un usuario se registra indicando username, email, password y photo.
	* El usuario y el email son campos únicos. No pueden repetirse en base de datos.
	* En esta versión no hay limitación de registro de usuarios ni ningún sistema de tipo captcha. Sería importante para futuras versiones.
2. Login de usuario
	* Un usuario se loguea indicando username y password.
3. Ver listado de últimos anuncios
	* El listado de los productos se muestra en páginas de 8 anuncios cada vez. 
	* Se muestran por orden cronológico, por defecto los más recientes primero.
	* El listado es consistente con los demás listados de productos de la aplicación.
4. Buscar (y encontrar) anuncios
	* Hay un desplegable debajo del header que permite acceder a las opciones de filtrado.
	* Se puede filtrar por nombre, rango de precio y etiqueta.
	* El rango de precio se indica como: [min-max]. Para ello se ha usado una exreg que hace que en el campo precio no se pueda escribir nada que no vaya en línea con lo previsto.
	* La búsqueda por etiqueta permite sólo una a la vez. 
	* El resultado de la búsqueda de nuevo es en orden cronológico, consistente y paginado.
5. Ver deatalle de un anuncio
	* Cada producto tiene su propia URL en la que se muestran todos los detalles del mismo.
	* La URL es SEO-friendly. Se usa el slugName para identificar el producto.
	* Se permite compartir el auncio en redes sociales idependientemente del tipo de usuario.
	* Se permite interactuar (marcar como favorito, reservado, vendido) con el producto siempre y cuando el usuario sea de tipo miembro.
6. Compartir un anuncio en redes sociales
	* Desde la vista detalle de producto se permite compartir el mismo en twitter y facebook. 
7. Ver anuncios de un miembro
	* Pinchando en el nombre de un miembro (mostrado en los productos, tanto en el listado como en el detalle), se listan todos sus productos.
	* La URL del miembro es su nombre de usuario.
	* Al igual que en el resto de listados, se muestran en orden cronológico, de manera consistente y paginados.
8. Ver anuncios más antiguos o más recientes
	* En el desplegable de filtrado se ha incluido la posibilidad de escoger el orden en el que se listan los anuncios. 
		* Decreciente (por defecto)
		* Creciente

#### Zona privada
9. Baja de usuario
	* Un miembro se puede dar de baja desde la vista principal de usuario.
	* Se borra completamente de base de datos así como, por supuesto, del LS y del estado de Redux.
10. Actualización de datos de usuario
	* Un usuario puede acceder a su perfil para editar todos sus parámetros, incluida la foto y la contraseña.
	* Sin embargo, no puede cambiar ni su usario ni su email por alguno que ya esté usado en la plataforma.
11. Logout de usuario
	* Un usaurio puede hacer logout de la aplicación, elimnando así todo rastro de él mismo en el navegador y en la propia aplicación.
12. Ver listado de todos mis anuncios
	* Un usario puede acceder a un listado de todos sus productos desde el menu de usuario.
13. Crear un anuncio
	* Un usuario de tipo miembro es el único que puede crear productos, en este caso con una opción en la cabecera.
14. Editar un anuncio
	* Un usuario de tipo miembro puede editar el producto siempre y cuando lo haya creado él.
15. Borrar un anuncio
	* Un usuario de tipo miembro puede eliminar el producto siempre y cuando lo haya creado él.
	* Dado que la operación es irreversible, se advierte antes de proceder a ejecutarla.
16. Marcar/desmarcar anuncio como reservado
	* Un usuario puede marcar/desmarcar un producto como reservado siempre y cuando lo haya creado él.
17. Marcar/desmarcar anuncio como vendido
	* Un usuario puede marcar/desmarcar un producto como vendido siempre y cuando lo haya creado él.
18. Ver anuncios favoritos
	* Un usuario puede ver un listado de sus productos favoritos desde el menu de usuario.
19. Guardar anuncio como favorito
	* Un usuario de tipo miembro puede marcar/desmarcar un producto como favorito idependientemente del autor del mismo.
20. Eliminar un anuncio como favorito
	* Un usuario puede eliminar un producto siempre y cuando lo haya creado él.
	* Dado que la operación es irreversible, se advierte antes de proceder a ejecutarla.


### Limitaciones
* Aunque está preparado en la API, no se ha implementado un servicio de envío de emails por el momento. Esto implica que hay varias funcionalidades que quedan pendientes:
	* No se puede recuperar contraseña.
	* No hay notificaciones de ningún tipo. Ni para favoritos, ni para cambios de precio ni para chats)
	* No se reciben email de anuncios de interés.
* El chat se deja para una versión posterior.



## Información detallada sobre la aplicación REACT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Licencia
[Pablo Ruiz Molina] Repositorio público para el Bootcamp de Desarrollo Web de Keepcoding.