import "./globals.css";

export const metadata = {
  title: "Reception UI",
  description: "PS + PC reception interface"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
