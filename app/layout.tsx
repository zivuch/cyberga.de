import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyberga | Test Automation & Security Consultancy",
  description: "Cyberga ensures the reliability and security of critical applications through professional test automation and quality engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
