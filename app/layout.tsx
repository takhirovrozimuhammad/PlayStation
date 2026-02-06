import "./globals.css";

export const metadata = {
  title: "PS + PC Club",
  description: "Public info + staff dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
