import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lamor | Less swiping, more meeting",
  description:
    "A modern matchmaking experience designed for real, intentional connection.",
  openGraph: {
    title: "Lamor | Less swiping, more meeting",
    description:
      "A modern matchmaking experience designed for real, intentional connection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
