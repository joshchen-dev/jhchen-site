"use client";
import Link from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";
import type { ReactNode } from "react";
// Mantine's Anchor rendered as a Next.js Link; lives in a client component because `component={Link}` can't cross from a server component.
export function NextAnchor({ href, children, ...props }: AnchorProps & { href: string; children: ReactNode }) { return <Anchor component={Link} href={href} {...props}>{children}</Anchor>; }
