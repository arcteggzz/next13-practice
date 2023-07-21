"use client";

import styles from "./page.module.scss";
import { FormEvent, useState } from "react";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { loginResponseType } from "@/types/loginResponse";
import { useRouter } from "next/navigation";
import { routePaths, LoadingCover } from "@/utils";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response: loginResponseType = await login({
        email: email.trim(),
        password: password.trim(),
      }).unwrap();

      if (response.accessToken) {
        const { _username, accessToken, _email, _id, _personalCode } = response;
        dispatch(
          setCredentials({
            _username,
            accessToken,
            _email,
            _id,
            _personalCode,
          })
        );
        router.push(routePaths.DASHBOARD);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.LoginPage} onSubmit={handleSubmit}>
        <h1 className="">Welcome Back</h1>

        <label htmlFor="email" className="">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="">
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPasword(e.target.value)}
          required
        />

        <button className="" type="submit">
          Sign in
        </button>
      </form>
      {isLoading ? (
        <>
          <LoadingCover />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginPage;
