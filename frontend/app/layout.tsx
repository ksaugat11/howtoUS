import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HowToUS — A warm guide to the F-1 student visa",
  description: "A friendly, step-by-step companion for international students applying to study in the US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}