import type { Metadata } from "next";

const siteConfig = {
  name: "IARA Brand Manual",
  title: "IARA Brand Manual | Design System",
  description:
    "Design guidelines, typography, colors, and components for the IARA brand. Your complete guide to building consistent IARA experiences.",
  url: "https://brand.iara.app.br", // Update with actual domain
  locale: "pt_BR",
  creator: "Mermaid Company",
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator }],
  generator: "Next.js",
  keywords: [
    "IARA",
    "brand manual",
    "design system",
    "brand guidelines",
    "typography",
    "colors",
    "components",
    "AI assistant",
    "virtual assistant",
    "style guide",
  ],
  referrer: "origin-when-cross-origin",
  creator: siteConfig.creator,
  publisher: siteConfig.creator,

  // Icons
  icons: {
    icon: [{ url: "/assets/FAVICON.svg", type: "image/svg+xml" }],
    apple: "/assets/FAVICON.svg",
    shortcut: "/assets/FAVICON.svg",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/assets/iara-login-hero.jpg`,
        width: 1024,
        height: 1024,
        alt: "IARA - Assistente Virtual de IA",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/assets/iara-login-hero.jpg`],
    creator: "@iara_ia_br", // Update with actual Twitter handle
  },

  // Robots
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

  // Verification (add your codes when available)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // Alternate languages (if applicable)
  // alternates: {
  //   canonical: siteConfig.url,
  //   languages: {
  //     "pt-BR": siteConfig.url,
  //     "en-US": `${siteConfig.url}/en`,
  //   },
  // },

  // Category
  category: "technology",

  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Export for use in other pages if needed
export { siteConfig };
