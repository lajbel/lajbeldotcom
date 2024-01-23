---
id: how-to-separate-files-kbmjs
layout: space.njk
url: /content/blogs/como-separar-mis-archivos-en-kaboomjs/
type: blog
title: Como separar mis archivos en Kaboom.js
lang: "es"
description: Tutorial acerca de separar tus archivos en Kaboom.js
public: true
image: https://cdn.glitch.global/6dc82ede-830f-4296-b221-d0f185e0cf50/ea1106d2-a4eb-49db-837a-c49b3a3a1bdc.image.png?v=1705955046911
tags: [
    "blog",
    "kaboomjs",
    "games",
    "juegos",
    "español"
]
metas: {
    description: "$ .post__p",
}
---
Es normal que a medida que nuestros juegos crecen en tamaño, queramos mantener una mejor organización de archivos. En este post aprenderás una manera práctica de aplicarlo en tus proyectos.

## Proyecto inicial

Primero, vamos a ponernos en la situación de un proyecto recién iniciado:

```js
// main.js
// Iniciamos nuestra instancia de Kaboom
const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [ 0, 0, 0, ],
});

// Cargamos assets
k.loadSprite("player", "sprites/player.png");
k.loadSprite("enemy", "sprites/enemy.png");
k.loadSound("shoot", "sounds/shoot.wav");
// ...

// Nuestras escenas
k.scene("main", () => {
    // main scene code
});

k.scene("gameover", () => {
    // gameover scene code
});

// Escena inicial
k.go("main");
```

Ya podrás imaginar cuanto código pueden llegar a tener estos archivos.

## Exportando nuestra instancia

Antes de empezar a separar nuestros archivos, deberíamos empezar exportando nuestra instancia de Kaboom, yo lo haré usando `export` `k`:

```js
// main.js
export const k = kaboom();
// ...
``` 
### Si no utilizas el prefijo
Si usas las funciones globales, es igualmente necesario que hagas el paso de la exportación, luego puedes continuar usando las funciones globales, (ej: `add()` en vez de `k.add()`)

## Separar nuestra carga de assets

Lo más fácil para iniciar, es separar la importación de archivos, nos va a quitar muchas líneas de encima. Crearemos un archivo donde tendremos la carga de assets, por ejemplo, `loader.js`

```js
// loader.js
import { k } from "./main";

// Es importante exportar nuestra función
export const loadAssets = () => {
    k.loadSprite("player", "sprites/player.png");
    k.loadSprite("enemy", "sprites/enemy.png");
    k.loadSprite("bullet", "sprites/bullet.png");
    k.loadSprite("gun", "sprites/gun.png");
    k.loadSound("shoot", "sounds/shoot.wav");
}
```

Ahora, importaremos en nuestro archivo `main.js`

```js
// main.js
import kaboom from "kaboom.js";
import { loadAssets } from "./loader.js";

const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [ 0, 0, 0, ],
});

loadAssets();

k.scene("main", () => { /*...*/ });
k.scene("gameover", () => { /*...*/ });

k.go("main");
```

De esta manera ya estaremos cargando nuestros assets desde un archivo diferente. Utilizamos una función, ya que necesitamos ejecutar ese código luego de la creación de la instancia de Kaboom, vas a ver que es un patrón que se repite. 

## Separar nuestras escenas

El siguiente paso lógico será separar nuestras escenas, dentro de una carpeta, por ejemplo `scenes/`, de aquí, pondremos nuestros archivos, veamos un ejemplo con la escena main.

```js
// scenes/main.js
import { k } from "../main";

// Exportamos una función, la cual simplemente creara la escena
export const loadMainScene = () => k.scene("main", () => {
    const bean = k.add([
        k.pos(20, 20),
        k.sprite("bean"),
    ]);

    const gun = bean.add([
        k.pos(0, 0),
        k.sprite("gun"),
    ]);
});
```

Y esto mismo lo podemos replicar en múltiples escenas. Ahora simplemente las cargamos en nuestro archivo principal.

```js
// main.js
import kaboom from "kaboom.js";
import { loadAssets } from "./loader.js";
import { loadMainScene } from "./scenes/main.js";
import { loadGameOverScene } from "./scenes/gameover.js"

const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [ 0, 0, 0, ],
});

loadAssets();
loadMainScene();
loadGameOverScene();

k.go("main");
```

De esta manera, ya tendremos modulados nuestras distintas escenas, nuestro código empieza a ser más ordenado.

Haré un blog acerca de como separar objetos próximamente, ya que creo que es un tema extendido, ya que hay muchas formas de organizarlo. Este es mi primer blog tutorial, espero puedas darle apoyo.

