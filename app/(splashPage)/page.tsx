"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { routePaths } from "@/utils";
import { useSelector } from "react-redux";
import { selectCurrentUserName } from "@/redux/features/auth/authSlice";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(routePaths.HOMEPAGE);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userName: string | null = useSelector(selectCurrentUserName);

  return (
    <main className={styles.main}>
      <p>Splash Page</p>
      <Link href={routePaths.HOMEPAGE}>Home</Link>
      <Link href={routePaths.ABOUTPAGE}>About</Link>
      <p>{userName}</p>
    </main>
  );
}
