import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import ClientLayout from "@/components/shipfast/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// SEO Metadata for Personal Trainer website
export const metadata = {
  title: {
    default: `${config.appName} - Entrenamiento Personal Profesional`,
    template: `%s | ${config.appName}`,
  },
  description: config.appDescription,
  keywords: [
    "entrenador personal",
    "entrenamiento personalizado",
    "fitness",
    "gimnasio",
    "planes de entrenamiento",
    "nutrición deportiva",
    "pérdida de peso",
    "musculación",
    "online coaching",
    "entrenamiento en casa",
  ],
  authors: [{ name: "Alvaro" }],
  creator: "Alvaro",
  metadataBase: new URL(`https://${config.domainName}`),
  alternates: {
    canonical: `https://${config.domainName}`,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `https://${config.domainName}`,
    siteName: config.appName,
    title: `${config.appName} - Entrenamiento Personal Profesional`,
    description: config.appDescription,
    images: [
      {
        url: "/Entrenamiento.jpg",
        width: 1200,
        height: 630,
        alt: config.appName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.appName} - Entrenamiento Personal Profesional`,
    description: config.appDescription,
    images: ["/Entrenamiento.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// LocalBusiness Schema for SEO (Rich Snippets)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FitnessCenter",
  "name": config.appName,
  "description": config.appDescription,
  "url": `https://${config.domainName}`,
  "logo": `https://${config.domainName}/Entrenamiento.jpg`,
  "image": `https://${config.domainName}/Entrenamiento.jpg`,
  "telephone": "+34-625-672-358",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ES",
    "addressLocality": "España",
  },
  "priceRange": "€€",
  "areaServed": {
    "@type": "Place",
    "name": "España y Online",
  },
  "sameAs": [
    "https://instagram.com/alvaropersonaltrainer",
    "https://facebook.com/alvaropersonaltrainer",
    "https://youtube.com/@alvaropersonaltrainer",
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": config.appName,
  "url": `https://${config.domainName}`,
  "logo": `https://${config.domainName}/Entrenamiento.jpg`,
  "sameAs": [
    "https://instagram.com/alvaropersonaltrainer",
    "https://facebook.com/alvaropersonaltrainer",
    "https://youtube.com/@alvaropersonaltrainer",
  ],
};

// WebSite Schema with Search capability
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": config.appName,
  "url": `https://${config.domainName}`,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `https://${config.domainName}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

function SEOJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
          <SEOJsonLd />
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

