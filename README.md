# Feliz cumpleaños, Mamá

Página web interactiva creada como un regalo de cumpleaños para mamá.

El proyecto combina fotografías, videos, música y diferentes secciones para crear una pequeña experiencia digital dedicada a ella.

## Estructura del proyecto

```text
/
├── css/
│   ├── components.css
│   ├── reset.css
│   └── variables.css
│
├── img/
│   └── ...
│
├── js/
│   ├── main.js
│   ├── poema.js
│   └── recuerdos.js
│
├── video/
│   ├── party.mp4
│   ├── poema.mp4
│   └── recuerdos.mp4
│
├── index.html
├── unpasito.html
├── recuerdos.html
├── poema.html
├── intro1.mp3
└── README.md
```

## Secciones

### Inicio

`index.html`

Es la pantalla de introducción del proyecto. Utiliza `intro1.mp3` y `party.mp4` como parte de la presentación inicial.

### Un pasito

`unpasito.html`

Página principal con información sobre  mamá y acceso a las diferentes partes de la experiencia.

### Recuerdos

`recuerdos.html`

Sección dedicada a fotografías y momentos especiales.

Incluye:

- Video de fondo.
- Reproducción del video después de presionar **Iniciar**.
- Carrusel interactivo de fotografías.
- Navegación mediante deslizamiento.
- Reflexiones visuales de las fotografías.
- Contador de recuerdos.
- Botón para regresar a la página principal.

Utiliza `recuerdos.js` y `recuerdos.mp4`.

### Poema

`poema.html`

Sección dedicada al poema **"A mi madre"**.

El poema está dividido por estrofas utilizando tarjetas semitransparentes sobre un video de fondo.

Utiliza `poema.js` y `poema.mp4`.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- BEM para la organización de clases CSS
- Google Fonts
- Video y audio HTML5

## Organización del CSS

El proyecto separa los estilos en diferentes archivos:

### `reset.css`

Contiene los estilos base y el reinicio de los estilos predeterminados del navegador.

### `variables.css`

Contiene las variables utilizadas en el proyecto, como colores, tipografías, espacios y sombras.

### `components.css`

Contiene los estilos principales de las diferentes secciones y componentes de la página.

## JavaScript

La funcionalidad está separada según cada sección:

- `main.js` — controla la experiencia de la página de inicio.
- `recuerdos.js` — controla la interacción de la sección de recuerdos.
- `poema.js` — controla el inicio de la experiencia del poema y su video.

## Multimedia

Los recursos multimedia se encuentran organizados en sus respectivas carpetas:

### Imágenes

```text
img/
```

Contiene las fotografías utilizadas en las diferentes secciones.

### Videos

```text
video/
```

Contiene:

- `party.mp4` — video utilizado en la introducción principal.
- `poema.mp4` — video utilizado en la sección del poema.
- `recuerdos.mp4` — video utilizado en la sección de recuerdos.

### Audio

```text
intro1.mp3
```

Audio utilizado durante la introducción principal.

## Características

- Diseño pensado principalmente para dispositivos móviles.
- Navegación entre diferentes secciones.
- Videos como fondos visuales.
- Experiencias activadas mediante interacción del usuario.
- Fotografías y contenido personal.
- Diseño basado en HTML, CSS y JavaScript sin frameworks externos.

## Propósito

Este proyecto fue creado como un regalo personal y como una oportunidad para practicar el desarrollo de una experiencia web interactiva utilizando tecnologías web fundamentales.