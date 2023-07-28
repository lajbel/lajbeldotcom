import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume({
    src: "./src",
    dest: "./docs",
});

site.use(sass());
site.use(esbuild());

export default site;
