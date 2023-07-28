import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
    src: "./src",
    dest: "./docs",
});

site.use(sass());
site.use(jsx());

export default site;
