---
id: how-to-separate-files-kbmjs
url: /content/blogs/how-to-separate-my-files-in-kaboomjs/
type: blog
title: How to separate my files in Kaboom.js
lang: en
description: A tutorial on how to separate your files in Kaboom.js
public: true
image: /images/banners/kaboombean.png
tags: [
    "blog",
    "kaboomjs",
    "games"
]
metas: {
    description: "$ .post__p",
}
---

It's normal that as our games grow in size, we want to maintain better file
organization. In this post, you'll learn a practical way to apply it to your
projects.

## Initial Project

First, let's put ourselves in the situation of a newly started project:

```js
// main.js
// Initialize our Kaboom instance
const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [0, 0, 0],
});

// Load assets
k.loadSprite("player", "sprites/player.png");
k.loadSprite("enemy", "sprites/enemy.png");
k.loadSound("shoot", "sounds/shoot.wav");
// ...

// Our scenes
k.scene("main", () => {
    // main scene code
});

k.scene("gameover", () => {
    // gameover scene code
});

// Initial scene
k.go("main");
```

You can already imagine how much code these files can end up having.

## Exporting our Instance

Before we start separating our files, we should begin by exporting our Kaboom
instance. I will do this using `export` `k`:

```js
// main.js
export const k = kaboom();
// ...
```

### If you don't use the prefix

If you use global functions, it is equally necessary to perform the export step.
Then you can continue using global functions (e.g., `add()` instead of
`k.add()`).

## Separating our Asset Loading

The easiest way to start is by separating the file imports; it will take a lot
of lines off our shoulders. We will create a file where we will have the asset
loading, for example, `loader.js`

```js
// loader.js
import { k } from "./main";

// It is important to export our function
export const loadAssets = () => {
    k.loadSprite("player", "sprites/player.png");
    k.loadSprite("enemy", "sprites/enemy.png");
    k.loadSprite("bullet", "sprites/bullet.png");
    k.loadSprite("gun", "sprites/gun.png");
    k.loadSound("shoot", "sounds/shoot.wav");
};
```

Now, we import it into our `main.js` file

```js
// main.js
import kaboom from "kaboom.js";
import { loadAssets } from "./loader.js";

export const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [0, 0, 0],
});

loadAssets();

k.scene("main", () => {/*...*/});
k.scene("gameover", () => {/*...*/});

k.go("main");
```

This way, we are already loading our assets from a different file. We use a
function because we need to execute that code after the Kaboom instance is
created; you will see that it is a pattern that repeats.

## Separating our Scenes

The next logical step will be to separate our scenes, inside a folder, for
example, `scenes/`, and from here, we will put our files. Let's see an example
with the main scene.

```js
// scenes/main.js
import { k } from "../main";

// Export a function, which will simply create the scene
export const loadMainScene = () =>
    k.scene("main", () => {
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

And we can replicate this for multiple scenes. Now, we simply load them in our
main file.

```js
// main.js
import kaboom from "kaboom.js";
import { loadAssets } from "./loader.js";
import { loadMainScene } from "./scenes/main.js";
import { loadGameOverScene } from "./scenes/gameover.js";

export const k = kaboom({
    width: 320,
    height: 240,
    scale: 2,
    background: [0, 0, 0],
});

loadAssets();
loadMainScene();
loadGameOverScene();

k.go("main");
```

This way, we have modularized our different scenes; our code starts to be more
organized.

I will write a blog about how to separate objects soon since I think it's an
extensive topic, and there are many ways to organize it. This is my first
tutorial blog; I hope you can support it.
