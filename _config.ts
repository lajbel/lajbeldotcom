import type { Page } from "lume/core.ts";
import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sitemap from "lume/plugins/sitemap.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import markdownItClass from "npm:@toycode/markdown-it-class";

// Site
const site = lume({
    src: "./src",
    dest: "./docs",
});

// Plugins
site.use(sass());
site.use(esbuild({
    options: {
        keepNames: true,
    }
}));
site.use(sitemap());
site.use(sourceMaps());

// Hooks
site.hooks.addMarkdownItPlugin(markdownItClass, {
    "h1": "post__title",
    "h2": "post__h2",
    "h3": "post__h3",
    "h4": "post__h4",
    "h5": "post__h5",
    "h6": "post__h6",
    "p": "post__p",
    "a": "post__a",
    "img": "post__img",
    "ul": "post__ul",
    "li": "post__li",
});

// Filters
site.filter("check", (value) => {
    console.log(value);
});

// Events
const data: Record<string, any> = {};

function createContentJSON(pages: Page[]) {
    const textEncoder = new TextEncoder();

    for (const page of pages) {
        if (page.data.url.toString().startsWith("/content/")) {
            data[page.data.title?.toString() || ""] = {
                "title": page.data.title?.toString() || "",
                "url": page.data.url.toString(),
                "content": page.data.children?.toString() || "",
                "theme": page.data.theme,
                "image": page.data.image,
            };
        }
    }

    Deno.createSync("./docs/content.json").write(textEncoder.encode(JSON.stringify(data)));
}

site.addEventListener("afterBuild", (event) => {
    createContentJSON(event.pages);
});

site.addEventListener("afterUpdate", (event) => {
    createContentJSON(event.pages);
});

// site.process([".html"], (page) => {
//     console.log(page.src.path);
//     if (page.src.path != "/index") return;
//     const spacePost = page.document?.querySelector(".space__post");
//     console.log(spacePost?.id, spacePost?.classList);

//     if (spacePost) {
//         spacePost.innerHTML = data[spacePost.id]?.content?.toString() || "";
//     }
// });

export default site;
