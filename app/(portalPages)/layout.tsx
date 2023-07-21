"use client";

import styles from "./layout.module.scss";
import type { Metadata } from "next";
import { useEffect, useState } from "react";
import {
  selectCurrentAccessToken,
  updateAccessToken,
  resetCredentials,
} from "@/redux/features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRefreshAuthTokenQuery } from "@/redux/features/auth/authApiSlice";

export const metadata: Metadata = {
  title: "Dashboard pages",
  description: "You dont have ot login to view these pages",
};

export default function PortalPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  const userAccessTokenCurrent = useSelector(selectCurrentAccessToken);
  const refresh = useRefreshAuthTokenQuery({ skip: true });
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await refresh.refetch();
        console.log(response);
        dispatch(updateAccessToken({ accessToken: response.data.accessToken }));
      } catch (error) {
        console.log(error);
        dispatch(resetCredentials());
      } finally {
        setLoading(false);
      }
    };

    !userAccessTokenCurrent ? verifyToken() : setLoading(false);
  }, []);

  return (
    <html lang="en">
      <body className={styles.PublicPageLayout}>
        {loading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <>
            {" "}
            <p>This is the dashboard and you are logged in</p>
            <div>{children}</div>
          </>
        )}
      </body>
    </html>
  );
}
