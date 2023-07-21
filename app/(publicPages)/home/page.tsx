"use client";

import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { selectCurrentUserName } from "@/redux/features/auth/authSlice";

const HomePage = () => {
  const userName = useSelector(selectCurrentUserName);

  return (
    <div className={styles.HomePage}>
      <p>Homepage</p>
      <p>{userName}</p>
    </div>
  );
};

export default HomePage;
