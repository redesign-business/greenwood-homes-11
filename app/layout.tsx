import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenwood Homes | Custom Homes Built to Endure",
  description: "Award-winning custom homes across Lake Tahoe, Hawaii, Idaho, and Utah. Quality construction, professionally delivered since 1998.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
