import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Splash screen",
  description: "Splash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
