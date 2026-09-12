import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppFloat from "@/components/FloatingWhatsapp";
import Script from "next/script";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Jovata Interiors",
  description:
    "Premium interior design and smart living solutions in Nigeria.",

  keywords: [
    "Interior Design Nigeria",
    "Interior Designer Nigeria",
    "Modern Interiors",
    "Luxury Interiors",
    "Residential Interior Design",
    "Hospitality Interiors",
    "Smart Living",
    "Smart Home Design",
    "Interior Design Studio",
    "Jovata Interiors",
  ],

  openGraph: {
    title: "Jovata Interiors",
    description:
      "Thoughtful interiors and integrated smart living environments.",
    url: "https://jovata.design",
    siteName: "Jovata Interiors",
    locale: "en_US",
    type: "website",
    images: [
  {
    url: "https://jovata.design/images/project-1.jpg",
    width: 1200,
    height: 630,
    alt: "Jovata Interiors",
  },
],
  },

  metadataBase: new URL("https://jovata.design"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4EMC8SRBWN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4EMC8SRBWN');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yh7jaeurea");
          `}
        </Script>

        {children}
        <WhatsAppFloat />
      </body>
      
    </html>
  );
}