import localFont from "next/font/local";

const SatoshiFont = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const ChillaxFont = localFont({
  src: [
    {
      path: "./fonts/Chillax-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

export default { SatoshiFont, ChillaxFont };
