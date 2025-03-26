---
title: How to separate files in Kaboom.js
image: /blog-banners/kaboomtutorial.png
tags: [kaboom.js, javascript, game development, tutorial, english, beginner]
date: 2024-01-17
---

It's normal that as our games grow in size, we want to maintain better file
organization. In this post, you'll learn a practical way to apply it to your
projects.

## Initial Project

First, let's put ourselves in the situation of a newly started project:

```js
// main.js
// Initialize our engine instance
const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [0, 0, 0],
});

// Load assets
k.loadSprite("player", "sprites/player.png");
k.loadSprite("enemy", "sprites/enemy.png");
k.loadSprite("bullet", "sprites/bullet.png");
k.loadSprite("gun", "sprites/gun.png");
k.loadSound("shoot", "sounds/shoot.wav");

// Our scenes
k.scene("play", () => {
    // play scene code
});

k.scene("gameover", () => {
    // gameover scene code
});

// Initial scene
k.go("main");
```

You can already imagine how much code these files can end up having.

## Separating our engine

Before we start separating your files, you should separate the engine from the
rest of the code. This way, you can import it into other files and use it
without having to worry about the initialization of it.

```js
// engine.js

import kaboom from "kaboom.js";

export const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [0, 0, 0],
});
```

This separates `engine.js` from `main.js`.

## Separating our Asset Loading

Now, the easiest way to start separating our game is by separating the file
imports; it will take a lot of lines off our shoulders. We will create a file
where we will have the asset loading, for example, `loader.js`

```js
// loader.js
import { k } from "./engine.js";

k.loadSprite("player", "sprites/player.png");
k.loadSprite("enemy", "sprites/enemy.png");
k.loadSprite("bullet", "sprites/bullet.png");
k.loadSprite("gun", "sprites/gun.png");
k.loadSound("shoot", "sounds/shoot.wav");
```

Now, we import it into our `main.js` file

```js
// main.js
import { k } from "./engine.js";
import "./loader.js"; // This will run the content of the file, importing all assets

// rest of scenes code
k.scene("play", () => {
    // play scene code
});
```

This way, we are already loading our assets from a different file. The import
statement will run the code inside the file, so we don't need to call any
function, only be sure of import `engine.js` before all, because it initializes
the engine.

## Separating our Scenes

The next logical step will be to separate our scenes, inside a folder, for
example, `scenes/`, and from here, we will put our files. Let's see an example
with the main scene.

```js
// scenes/play.js
import { k } from "../engine.js";

// Create the scene
k.scene("play", () => {
    const bean = k.add([k.pos(20, 20), k.sprite("bean")]);

    const gun = bean.add([k.pos(0, 0), k.sprite("gun")]);
});
```

And we can replicate this for multiple scenes. Now, we simply load them in our
main file.

```js
// main.js
import "./engine.js";
import "./loader.js";
import "./scenes/play.js";
import "./scenes/gameover.js";

k.go("play");
```

As before, the import statement will run the code inside the file, so the scenes
are created and ready to be used.

## Finishing

This way, we have modularized our different scenes; our code starts to be more
organized.

I will write a blog about how to separate objects soon since I think it's an
extensive topic, and I have a tool for all you.
