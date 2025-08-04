
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers"; 

export const metadata: Metadata = {
  title: "Tara Chain",
  description: "Tara Cahin price tracker code test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="page-background text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
