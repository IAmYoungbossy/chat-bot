// Styling
import "./globals.css";

// External Packages
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

// Providers
import { ConversationProvider } from "@/context/ConversationContext";

// Components
import Header from "@/components/Header/Header";
import ConversationList from "@/components/ConversationList/ConversationList";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ChatBot Application",
  description: "This is a ChatBot Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased h-screen`}
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
