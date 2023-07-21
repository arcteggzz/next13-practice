"use client";

import styles from "./page.module.scss";
import {
  selectCurrentUserName,
  selectCurrentAccessToken,
  selectCurrentUserPhoneNumber,
  resetCredentials,
  updateAccessToken,
} from "@/redux/features/auth/authSlice";
import { routePaths } from "@/utils";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useRefreshAuthTokenQuery } from "@/redux/features/auth/authApiSlice";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectCurrentUserName);
  const accessToken = useSelector(selectCurrentAccessToken);
  const phoneNumber = useSelector(selectCurrentUserPhoneNumber);
  const router = useRouter();
  const refresh = useRefreshAuthTokenQuery({ skip: true });

  const logoutHandler = () => {
    dispatch(resetCredentials());
    router.push(routePaths.LOGINPAGE);
  };

  const refreshHandler = async () => {
    const response = await refresh.refetch();
    const accessToken = response.data.accessToken;
    dispatch(updateAccessToken({ accessToken }));
    console.log(response.data.accessToken);
  };

  useEffect(() => {
    console.log(`dashboard component useEffect : ${accessToken?.slice(-10)}`);
    if (!accessToken) router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.Dashboard}>
      <p>You are logged in as {userName}</p>
      <p>accesstoken: {accessToken?.slice(-10)}</p>
      <p>phone number: {phoneNumber}</p>
      <Link href={routePaths.HOMEPAGE}>Home</Link>
      <Link href={routePaths.CREATEUSERSPAGE}>Creat Users Page</Link>
      <button onClick={logoutHandler}>Logout</button>
      <button onClick={refreshHandler}>Refresh Token</button>
    </div>
  );
};

export default Dashboard;
