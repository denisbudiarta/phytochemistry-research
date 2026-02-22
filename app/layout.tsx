import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phytochemistry & Bioactivity Research",
  description: "Personal research page on Phytochemistry and Bioactivity",
  icons: {
    icon: "/icon.svg", // Next.js akan otomatis mencari di folder public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
