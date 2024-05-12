/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // primary colors
        instagram:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        ToggleDark:
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
      colors: {
        // social icons colors
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",

        // Actual colors
        toppattern: "hsl(var(--TopPattern))",
        mainbody: "hsl(var(--MainBody))",
        txtcolor: "hsl(var(--TextColor))",
        cardbg: "hsl(var(--CardBg))",
        togglebg: "hsl(var(--ToggleBg))",
        cardhover: "hsl(var(--CardHover))",
        followers: "hsl(var(--FollowersTxt))",

        limeGreen: "hsl(var(--Lime-Green))",
        brightRed: "hsl(var(--Bright-Red))",
        toggleButton: "hsl(var(--ToggleLight))",
      },
    },
  },
  plugins: [],
};
