import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PHOTOAUTOMAT",
  description: "Romantic photo booth in the heart of Budapest.",
  icons: {
    icon: "/IMG_4252.JPEG",
    apple: "/IMG_4252.JPEG",
  },
  openGraph: {
    title: "PHOTOAUTOMAT",
    description: "Romantic photo booth in the heart of Budapest.",
    images: [
      {
        url: "/IMG_4252.JPEG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHOTOAUTOMAT",
    description: "Romantic photo booth in the heart of Budapest.",
    images: ["/IMG_4252.JPEG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
