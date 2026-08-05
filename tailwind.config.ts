import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#181E4B",
          800: "#14183E",
          700: "#1E1D4C",
          600: "#212832",
        },
        body: "#5E6282",
        muted: "#84829A",
        accent: "#DF6951",
        accentDeep: "#F15A2B",
        yellow: "#F1A501",
        star: "#F0BB1F",
        purpleDeco: "#D5AEE4",
        blueDeco: "#B5DCFF",
        creamDeco: "#FFF1DA",
        subtle: "#F5F5F5",
      },
      fontFamily: {
        display: ["var(--font-volkhov)", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
        open: ["var(--font-open-sans)", "sans-serif"],
      },
      backgroundImage: {
        "cta-gradient":
          "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)",
        "hero-fade":
          "linear-gradient(180deg, #FFFFFF 0%, #FFF6F1 40%, #FFF1E9 100%)",
        "card-gradient":
          "linear-gradient(105deg, #747DEF 0%, #5E3BE1 100%)",
      },
      boxShadow: {
        card: "0px 25px 50px rgba(47, 45, 91, 0.1)",
        "card-lg": "0px 40px 80px rgba(47, 45, 91, 0.12)",
        btn: "0px 15px 30px rgba(223, 105, 81, 0.35)",
        btnYellow: "0px 15px 30px rgba(241, 165, 1, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        planeFly: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(15px, -10px) rotate(5deg)" },
          "50%": { transform: "translate(-5px, -20px) rotate(-3deg)" },
          "75%": { transform: "translate(10px, -8px) rotate(2deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        floatSlow: "floatSlow 7s ease-in-out infinite",
        planeFly: "planeFly 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
