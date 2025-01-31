import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConversationList from "@/components/ConversationList/ConversationList";
import { ConversationProvider } from "@/context/ConversationContext";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Chat App Bot",
  description: "This is a Chat Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <Header />
        <div className="flex">
          <ConversationProvider>
            <ConversationList />
            {children}
          </ConversationProvider>
        </div>
      </body>
    </html>
  );
}
