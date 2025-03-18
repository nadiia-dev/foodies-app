import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata: Metadata = {
  title: "NextLevel food",
  description: "Delecious meals, shared by a food-loving community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
