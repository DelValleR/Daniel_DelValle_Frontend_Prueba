# Documentación de la prueba

En este README pueden encontrar la documentación respectiva a la prueba de Desarrollador Frontend React con el fin de facilitar el entendimiento y la ejecución.

## Estructura del proyecto

El proyecto se organizó en tres carpetas principales dentro del source:

- `src/`: Carpeta que contiene el código fuente.
- `src/pages`: Carpeta que contiene las páginas web a desarrollar, cada una de ellas cuenta con su archivo base y el respectivo modulo de estilos.
- `src/components`: Carpeta que contiene los componentes que se usan dentro de las páginas, para fines de este proyecto únicamente se encuentran los del Home, cada uno de ellos cuenta con su archivo base y el respectivo modulo de estilos.
- `src/utils`: Carpeta que contiene los estilos y funciones que son comunes para paginas y componentes.

## Configuración de estilos del proyecto

Para asegurar desde el inicio la reusabilidad y escalabilidad del proyecto se implementó el preprocesador SASS, creando modulos para las variables transversales al proyecto asi como para cada página y componente de forma que sea mas fácil realizar cambios, ajustes o identificar clases especificas que se esten aplicando.

# Posibles mejoras de la prueba

Para fines de la prueba se pensó en un MVP (Minimum Viable Product) con el funcionamiento basico de cada uno de los componentes, sin embargo en caso de contar con mas tiempo o continuar con el desarrollo de la prueba implementaria las siguientes mejoras

## Navbar

- La información del menú la trabajaría a traves de un objeto o archivo JSON que permitiera modificarse para no tener que hacer los cambios directamente en el componente.
- Para el diseño responsive de la Navbar utilizaria un "Hamburguer Menu" que permitiera una mejor experiencia para el usuario.

## Contenido

- El contenido idealmente deberia ser manejado desde archivos JSON para hacer mas facil una posible integración con Base de Datos

## Estilos

- Se buscó seguir en la medida de lo posible el principio de mobile-first, sin embargo todavia se puede mejorar el responsive general de la aplicación.

# Ejecutando el proyecto

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.
