import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jdgayagoy.is-a.dev'),
  title: {
    default: "John David Gayagoy — FullStack & Automation Developer",
    template: "%s | John David Gayagoy",
  },
  description: "John David Gayagoy is a FullStack Developer and Automation Practitioner based in the Philippines. Building web apps, automation tools, and robotics projects.",
  keywords: ["John David Gayagoy", "FullStack Developer", "Automation Developer", "Philippines", "Web Developer", "Robotics"],
  authors: [{ name: "John David Gayagoy", url: "https://jdgayagoy.is-a.dev" }],
  openGraph: {
    type: "website",
    url: "https://jdgayagoy.is-a.dev",
    title: "John David Gayagoy — FullStack & Automation Developer",
    description: "John David Gayagoy is a FullStack Developer and Automation Practitioner based in the Philippines. Building web apps, automation tools, and robotics projects.",
    siteName: "John David Gayagoy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "John David Gayagoy — FullStack & Automation Developer",
    description: "John David Gayagoy is a FullStack Developer and Automation Practitioner based in the Philippines.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/images/icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "John David Gayagoy",
              "url": "https://jdgayagoy.is-a.dev",
              "jobTitle": "FullStack Developer",
              "description": "FullStack Developer, Automation Practitioner, and Robotics Enthusiast based in the Philippines.",
              "sameAs": [
                "https://linkedin.com/in/johndavidgayagoy",
                "https://github.com/JDgayagoy"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
