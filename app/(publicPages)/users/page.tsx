"use client";

import styles from "./page.module.scss";
import { useGetAllUsersQuery } from "@/redux/features/users/usersApiSlice";
import { userType } from "@/types/user";

const UsersPage = () => {
  const {
    data: allUsers,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllUsersQuery({ skip: false });
  console.log(allUsers);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <>
        {allUsers.map((user: userType) => {
          return (
            <>
              <div key={user.email}>
                <p>{user.username}</p>
                <p>{user.email}</p>
              </div>
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    content = <p>There was an error fetching data</p>;
  }

  return <div className={styles.UsersPage}>{content}</div>;
};

export default UsersPage;
