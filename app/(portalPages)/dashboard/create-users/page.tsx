"use client";

import styles from "./page.module.scss";
import { FormEvent, useState } from "react";
import { LoadingCover } from "@/utils";
import { useCreateMockUserMutation } from "@/redux/features/users/usersApiSlice";

const CreateUsersPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [returnMessage, setReturnMessage] = useState("");
  const [createMockUser, { isLoading }] = useCreateMockUserMutation();

  const resetForm = () => {
    setEmail("");
    setUserName("");
    setUserImage("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response: { message: string } = await createMockUser({
        username: userName.trim(),
        email: email.trim(),
        userImage: userImage.trim(),
      }).unwrap();

      if (response.message) {
        setReturnMessage(response.message);
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.CreateUsersPage} onSubmit={handleSubmit}>
        <h1 className="">Create user</h1>

        <label htmlFor="email" className="">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="userImage" className="">
          UserImage
        </label>
        <input
          name="userImage"
          id="userImage"
          type="userImage"
          placeholder="Enter your userImage"
          value={userImage}
          onChange={(e) => setUserImage(e.target.value)}
          required
        />

        <label htmlFor="userName" className="">
          userName
        </label>
        <input
          name="userName"
          id="userName"
          type="userName"
          placeholder="Enter your userImage"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <button className="" type="submit">
          Create Users
        </button>

        <p>{returnMessage}</p>
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

export default CreateUsersPage;
