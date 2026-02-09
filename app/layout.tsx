import "./globals.css";

export const metadata = {
  title: "Phytochemistry & Bioactivity Research",
  description:
    "Personal research page on Phytochemistry and Bioactivity of Biological Materials",
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
