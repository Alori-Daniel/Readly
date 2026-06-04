"use client";

import { NeonAuthUIProvider } from "@neondatabase/auth/react";
import { createAuthClient } from "@neondatabase/auth/next";

const authClient = createAuthClient();
export default function NeonAuthProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      {children}
    </NeonAuthUIProvider>
  );
}
