import { Container, Stack, Text, Title } from "@mantine/core";
import { NextAnchor } from "@/components/next-anchor";
import { PageTransition } from "@/components/page-transition";
export default function NotFound() { return <PageTransition><Container component="main" id="main" size="sm" py={64}><Stack gap="sm" className="enter"><Title order={1}>Page not found</Title><Text>There’s nothing at this address. <NextAnchor href="/">Go to the homepage</NextAnchor>.</Text></Stack></Container></PageTransition>; }
