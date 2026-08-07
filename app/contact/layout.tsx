import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jovata Interiors",
  description:
    "Start a conversation with Jovata about interior design, smart living integration and modern living spaces.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}