"use client";
import { AuthContextProvider } from "@/context/AuthContext";
export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
