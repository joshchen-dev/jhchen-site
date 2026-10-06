import { ViewTransition, type ReactNode } from "react";
// Wraps a whole page: React only animates a <ViewTransition> that sits above the DOM nodes a navigation inserts.
// The outgoing page fades out; the incoming page plays its own CSS entrance (see globals.css).
export function PageTransition({ children }: { children: ReactNode }) { return <ViewTransition enter="page-in" exit="page-out" default="none">{children}</ViewTransition>; }
