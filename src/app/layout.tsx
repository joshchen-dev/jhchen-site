import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const sourceSerif = Source_Serif_4({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-source-serif" });

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: `${siteConfig.name} — ${siteConfig.title}`, template: `%s — ${siteConfig.name}` }, description: siteConfig.intro, authors: [{ name: siteConfig.name }], alternates: { canonical: "/" }, openGraph: { type: "website", locale: "en_US", url: siteConfig.url, siteName: siteConfig.name, title: `${siteConfig.name} — ${siteConfig.title}`, description: siteConfig.intro }, twitter: { card: "summary_large_image", title: `${siteConfig.name} — ${siteConfig.title}`, description: siteConfig.intro } };
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`;
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${sourceSerif.variable}`}><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><a href="#main-content" className="skip-link">Skip to content</a><Header /><div id="main-content">{children}</div><Footer /></body></html>; }
