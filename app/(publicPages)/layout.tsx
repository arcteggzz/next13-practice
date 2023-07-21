import styles from "./layout.module.scss";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Public pages",
  description: "You dont have ot login to view these pages",
};

export default function PublicPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.PublicPageLayout}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
