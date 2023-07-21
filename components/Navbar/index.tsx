import styles from "./Navbar.module.scss";
import Link from "next/link";
import { routePaths } from "@/utils";

const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <Link href={routePaths.SPLASHPAGE}>Splash</Link>
        <Link href={routePaths.HOMEPAGE}>Home</Link>
        <Link href={routePaths.ABOUTPAGE}>About</Link>
        <Link href={routePaths.LOGINPAGE}>Login</Link>
        <Link href={routePaths.DASHBOARD}>Dashboard</Link>
        <Link href={routePaths.USERSPAGE}>Users</Link>
      </nav>
    </>
  );
};

export default Navbar;
