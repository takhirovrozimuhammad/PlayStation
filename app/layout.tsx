import "./globals.css";

export const metadata = {
  title: "Reception Panel",
  description: "PS + PC reception panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
