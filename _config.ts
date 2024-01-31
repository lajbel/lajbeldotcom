import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sitemap from "lume/plugins/sitemap.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import metas from "lume/plugins/metas.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import feed from "lume/plugins/feed.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import markdownItClass from "npm:@toycode/markdown-it-class";
import tailwindOptions from "./tailwind.config.ts";

// Basic site configuration
// -----------------------------------------------------------------------------------------------
const site = lume({
    src: "./src",
    dest: "./site",
    includes: "_layouts",
    location: new URL("https://www.lajbel.com"),
    components: { variable: "c" },
});

// Static files and ignored files
// -----------------------------------------------------------------------------------------------
site.ignore("README.md");
site.copyRemainingFiles();

// Plugin configuration
// -----------------------------------------------------------------------------------------------
site.use(nunjucks())
    .use(sass())
    .use(esbuild({ options: { minify: true, keepNames: true } }))
    .use(multilanguage({
        languages: ["en", "es"],
        defaultLanguage: "en",
    }))
    .use(slugifyUrls())
    .use(codeHighlight({
        languages: {
            javascript: lang_javascript,
        },
    }))
    .use(feed({
        output: ["/blogs.rss"],
        query: "type=blogs",
        info: {
            title: "=site.title",
            description: "=site.description",
        },
        items: {
            title: "=title",
            description: "=excerpt",
        },
    }))
    .use(picture())
    .use(transformImages())
    .use(tailwindcss({
        options: tailwindOptions,
    }))
    .use(postcss({
        plugins: [],
        useDefaultPlugins: true,
    }))
    .use(sitemap())
    .use(sourceMaps())
    .use(metas())
    .use(minifyHTML());

// Nunjucks Filters
// -----------------------------------------------------------------------------------------------
site.filter("check", (value) => {
    console.log(value);
});

export default site;
