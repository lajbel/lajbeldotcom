import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sitemap from "lume/plugins/sitemap.ts";
import mdx from "lume/plugins/mdx.ts";
import markdownItClass from "npm:@toycode/markdown-it-class";


// Site
const site = lume({
    src: "./src",
    dest: "./docs",
});

// Plugins
site.use(sass());
site.use(esbuild());
site.use(sitemap());

site.hooks.addMarkdownItPlugin(markdownItClass, {
    "h1": "post__title",
    "h2": "post__h2",
    "h3": "post__h3",
    "h4": "post__h4",
    "h5": "post__h5",
    "h6": "post__h6",
    "p": "post__p",
    "a": "post__a",
});

// Filters
site.filter("check", (value) => {
    console.log(value);
});

// Events
site.addEventListener("afterBuild", (event) => {
    const data: Record<string, unknown> = {};
    const textEncoder = new TextEncoder();

    for (const page of event.pages) {
        if (page.data.url.toString().startsWith("/content/")) {
            data[page.data.title?.toString() || ""] = {
                "title": page.data.title?.toString() || "",
                "url": page.data.url.toString(),
                "content": page.data.children?.toString() || "",
            };
        }
    }

    Deno.createSync("./docs/content.json").write(textEncoder.encode(JSON.stringify(data)));
});

export default site;
