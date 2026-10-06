import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Literata } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const literata = Literata({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-literata" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: `${siteConfig.name} — ${siteConfig.title}`, template: `%s — ${siteConfig.name}` }, description: siteConfig.description, authors: [{ name: siteConfig.name }], alternates: { canonical: "/" }, openGraph: { type: "website", locale: "en_US", url: siteConfig.url, siteName: siteConfig.name, title: `${siteConfig.name} — ${siteConfig.title}`, description: siteConfig.description } };
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`;
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en" suppressHydrationWarning className={`${literata.variable} ${plexSans.variable} ${plexMono.variable}`}><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><a href="#main" className="skip-link">Skip to content</a>{children}</body></html>; }
