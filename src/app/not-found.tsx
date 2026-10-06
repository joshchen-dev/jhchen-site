import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
export default function NotFound() { return <div className="page quiet"><SiteHeader /><main id="main" className="reading"><h1>Page not found</h1><p>There’s nothing at this address. <Link href="/">Go to the homepage</Link>.</p></main></div>; }
