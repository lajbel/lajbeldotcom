import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://lajbel.com",
    integrations: [tailwind(), preact(), icon(), sitemap()],
});
