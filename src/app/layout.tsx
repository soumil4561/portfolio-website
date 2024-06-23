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
      <body>{children}</body>
    </html>
  );
}
