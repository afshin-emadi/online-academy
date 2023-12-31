/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iranSans: ["IRANSans", "sans-serif"],
      },
      colors: {
        "myGray-10": "#F9F6FF",
        "myGray-20": "#F0E8FF",
        "myGray-30": "#E8E7FF",
        "myGray-40": "#D7D5FF",
        "myGray-70": "#7A7AAB",
        "myGray-80": "#6F699D",
        "myGray-90": "#4A4A84",
        "myGray-100": "#4B4769",
        "myLightBlue-10": "#D0CDFF",
        "myLightBlue-30": "#B4B4FF",
        "myLightBlue-50": "#595FE4",
        "myBlue-20": "#A29CFF",
        "myBlue-30": "#8C80F6",
        "myBlue-40": "#7A50FF",
        "myBlue-50": "#3F40EA",
        "myBlue-60": "#3B3CA7",
        "myBlue-70": "#2E11B7",
        "myBlue-80": "#210654",
        "myBlue-90": "#090050",
        "myBlue-100": "#121242",
        "myDarkBlue-60": "#2C007F",
        "myDarkBlue-70": "#121242",
        "myIndigo-45": "#732AFF",
        "myIndigo-50": "#6D20FF",
        "myIndigo-60": "#3D00B1",
        "myIndigo-80": "#4D357A",
        "myPurpule-40": "#8735F5",
        "myPurpule-50": "#820CDF",
        "myRose-70": "#C40F50",
      },
      keyframes: {
        slideDown: {
          "0%": { "transform-origin": "0 0", transform: "translateY(-40%)" },
          "100%": { "transform-origin": "0 0", transform: "translateY(0%)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s linear 1",
      },
    },
  },
  plugins: [],
};
