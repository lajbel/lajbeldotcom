import { useEffect, useState } from "preact/hooks";
// FIXME: This is not accessible, and should be replaced with a more accessible method of do an swap

export default function ThemeController() {
    const [isDefaultThemeDark, setDefaultTheme] = useState();
    const [theme, setTheme] = useState();

    useEffect(() => {
        let userPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        const defTheme = localStorage.getItem("theme")
            ?? (userPrefersDark ? "dark" : "light");

        setTheme(defTheme);
        setDefaultTheme(defTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div class="join block">
            <label
                class="swap btn btn-ghost btn-square"
                aria-label={"Theme swapper"}
            >
                <input
                    type="checkbox"
                    // If is dark, the checkbox is for light, and vice versa
                    value={isDefaultThemeDark ? "light" : "dark"}
                    class="theme-controller"
                    checked={isDefaultThemeDark
                        ? theme === "light"
                        : theme === "dark"}
                    onChange={(e) => {
                        if (e.target.checked) {
                            setTheme(isDefaultThemeDark ? "light" : "dark");
                        } else {
                            setTheme(isDefaultThemeDark ? "dark" : "light");
                        }
                    }}
                />
                <i
                    class={(isDefaultThemeDark ? "swap-off" : "swap-on")
                        + " w-10 h-10 text-3xl ljicon-sun align-middle flex items-center justify-center"}
                    aria-label={"Toggle light theme"}
                />
                <i
                    class={(isDefaultThemeDark ? "swap-on" : "swap-off")
                        + " w-10 h-10 text-3xl ljicon-moon align-middle flex items-center justify-center"}
                    aria-label={"Toggle dark theme"}
                />
            </label>
        </div>
    );
}
