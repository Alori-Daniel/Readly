"use client";

import { AuthUIProvider } from "@neondatabase/auth/react";
import { createAuthClient } from "@neondatabase/auth/next";

const authClient = createAuthClient();
export default function NeonAuthProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthUIProvider authClient={authClient}>{children}</AuthUIProvider>;
}
