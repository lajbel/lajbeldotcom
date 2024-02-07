import { useState, useEffect } from "preact/hooks";

export default function ThemeController() {
	const [isDefaultThemeDark, setDefaultTheme] = useState();
	const [theme, setTheme] = useState();
  
	useEffect(() => {
		let userPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		const defTheme = localStorage.getItem("theme") ?? (userPrefersDark ? "dark" : "light");
		
		setTheme(defTheme);
		setDefaultTheme(defTheme);
	}, [])
	
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);


	return (
		<div class="join block">
			<label class="swap swap-rotate">
				<input
					type="checkbox"
					// If is dark, the checkbox is for light, and vice versa
					value={isDefaultThemeDark ? "light" : "dark"}
					class="theme-controller"
					checked={isDefaultThemeDark ? theme === "light" : theme === "dark"}
					onChange={(e) => {
						if(e.target.checked) {
							setTheme(isDefaultThemeDark ? "light" : "dark")
						}
						else {
							setTheme(isDefaultThemeDark ? "dark" : "light")
						}
					}}

				/>
				<i class={(isDefaultThemeDark ? "swap-off" : "swap-on") + " w-10 h-10 text-3xl ljicon-sun"} />
				<i class={(isDefaultThemeDark ? "swap-on" : "swap-off") + " w-10 h-10 text-3xl ljicon-moon"} />
			</label>
		</div>
	);
}
