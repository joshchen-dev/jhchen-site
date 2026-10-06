import Link from "next/link";
export default function NotFound() { return <main className="shell flex min-h-[70svh] flex-col items-start justify-center"><p className="meta">404</p><h1 className="page-title mt-3">This page drifted out of service.</h1><p className="mt-6"><Link href="/">Return home</Link></p></main>; }
