export default {
    theme: {
        extend: {
            colors: {
                accent: "#7d2ca0",
                light: "#EEF2F8",
                dark: "#18191B",
                back: "#e1e3ee",
                'accents': {
                    '50': '#faf5fe',
                    '100': '#f5eafd',
                    '200': '#ead5f9',
                    '300': '#ddb4f3',
                    '400': '#c987eb',
                    '500': '#b058dd',
                    '600': '#9539c0',
                    '700': '#7d2ca0',
                    '800': '#672682',
                    '900': '#58246b',
                    '950': '#370c46',
                },
                
            },
            fontSize: {
                sm: "clamp(1.1rem, 0.13vw + 1.07rem, 1.17rem)",
                base: "clamp(1.38rem, 0.34vw + 1.29rem, 1.56rem)",
                md: "clamp(1.72rem, 0.66vw + 1.55rem, 2.08rem)",
                lg: "clamp(2.15rem, 1.14vw + 1.86rem, 2.78rem)",
                xl: "clamp(2.69rem, 1.85vw + 2.22rem, 3.7rem)",
                "2xl": "clamp(3.36rem, 2.87vw + 2.64rem, 4.93rem)",
                "3xl": "clamp(4.2rem, 4.33vw + 3.11rem, 6.58rem)",
            },
        },
    },
};
