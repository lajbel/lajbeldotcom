const allThemes = {
	"--rounded-box": "4px",
	"--rounded-btn": "4px",
	"--rounded-badge": "4px",

	"--animation-btn": ".25s",
	"--animation-input": ".2s",

	"--btn-text-case": "uppercase",
	"--navbar-padding": ".5rem",
	"--border-btn": "1px",
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			// Default: 700
			accents: {
				50: "#faf5fe",
				100: "#f5eafd",
				200: "#ead5f9",
				300: "#ddb4f3",
				400: "#c987eb",
				500: "#b058dd",
				600: "#9539c0",
				700: "#7d2ca0",
				800: "#672682",
				900: "#58246b",
				950: "#370c46",
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		logs: false,
		themes: [
			{
				light: {
					primary: "#a21caf",
					secondary: "#be185d",
					accent: "#37cdbe",
					neutral: "#3b424e",
					"base-100": "#f5f1f1",
					...allThemes,
				},
				dark: {
					...require("daisyui/src/theming/themes")["coffee"],
					...allThemes,
				},
			},
		],
	},
};
