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
import transformImages from "lume/plugins/transform_images.ts"
import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import lang_bash from "npm:highlight.js/lib/languages/bash";
import markdownItClass from "npm:@toycode/markdown-it-class";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

// #region Basic site configuration
// -----------------------------------------------------------------------------------------------
const site = lume({
    src: "./src",
    dest: "./site",
    includes: "_layouts",
    location: new URL("https://www.lajbel.com"),
    components: { variable: "c" },
});
// #endregion

// #region Static files and ignored files
// -----------------------------------------------------------------------------------------------
site.ignore("README.md");
site.copyRemainingFiles();
// #endregion

// #region Plugin configuration
// -----------------------------------------------------------------------------------------------
site.use(nunjucks());
site.use(sass());
site.use(sitemap());
site.use(sourceMaps());
site.use(metas());
site.use(esbuild({
    options: {
        minify: true,
        keepNames: true,
    },
}));
site.use(multilanguage({
    languages: ["en", "es"],
    defaultLanguage: "en",
}));
site.use(slugifyUrls());
site.use(codeHighlight({
    languages: {
        javascript: lang_javascript,
        bash: lang_bash,
    },
}));
site.use(feed({
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
}));
site.use(picture());
site.use(transformImages());
site.use(tailwindcss());
site.use(postcss());

// #endregion

// #region Markdown it
// -----------------------------------------------------------------------------------------------
site.hooks.addMarkdownItPlugin(markdownItClass, {
    "h1": "post__h1",
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
// #endregion

// #region Nunjucks Filters
// -----------------------------------------------------------------------------------------------
site.filter("check", (value) => {
    console.log(value);
});
// #endregion

export default site;
