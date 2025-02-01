import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
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

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased h-screen`}
      >
        <Header />
        <div className="flex mt-8 px-8 gap-6 max-w-page-max w-full mx-auto">
          <ConversationProvider>
            <ConversationList />
            {children}
          </ConversationProvider>
        </div>
      </body>
    </html>
  );
}
