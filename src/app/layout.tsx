import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soumil Singh",
  description: "Hi, I am Soumil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,700&display=swap" rel="stylesheet"/> 
        <link href="https://api.fontshare.com/v2/css?f[]=pencerio@50&display=swap" rel="stylesheet"/> 
        <link href="https://api.fontshare.com/v2/css?f[]=chillax@300,400&display=swap" rel="stylesheet"/> 
      </head>
      <body>{children}</body>
    </html>
  );
}
