import "@mantine/core/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/posts";
import { Providers } from "./providers";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: `${siteConfig.name} — ${siteConfig.title}`, template: `%s — ${siteConfig.name}` }, description: siteConfig.description, authors: [{ name: siteConfig.name }], alternates: { canonical: "/" }, openGraph: { type: "website", locale: "en_US", url: siteConfig.url, siteName: siteConfig.name, title: `${siteConfig.name} — ${siteConfig.title}`, description: siteConfig.description } };

export default function RootLayout({ children }: LayoutProps<"/">) {
  const showWriting = getAllPosts(false).length > 0;
  return <html lang="en" {...mantineHtmlProps}>
    <head><ColorSchemeScript defaultColorScheme="auto" /></head>
    <body>
      <Providers>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteHeader showWriting={showWriting} />
        {children}
        <SiteFooter />
      </Providers>
    </body>
  </html>;
}
