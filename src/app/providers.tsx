"use client";
import { MantineProvider, createTheme } from "@mantine/core";
import type { ReactNode } from "react";

export const theme = createTheme({ primaryColor: "indigo", defaultRadius: "md" });

export function Providers({ children }: { children: ReactNode }) { return <MantineProvider theme={theme} defaultColorScheme="auto">{children}</MantineProvider>; }
