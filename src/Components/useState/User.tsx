import { useState } from "react";
type authUser = {
  name: string;
  email: string;
};

export default function User() {
  const [userloggedin, setuserLoggedIn] = useState<authUser | null>(null);

  const handlelogin = () => {
    setuserLoggedIn({
      name: "Achint Tyagi",
      email: "achint@tyagi.com",
    });
  };
  const handlelogout = () => {
    setuserLoggedIn(null);
  };
  return (
    <>
      <button onClick={handlelogin}>Login</button>
      <button onClick={handlelogout}>Logout</button>

      {userloggedin !== null ? (
        <>
          <h3>Username is {userloggedin.name}</h3>
          <h3>Email is {userloggedin.email}</h3>
        </>
      ) : (
        <h3>You are logged out</h3>
      )}
    </>
  );
}
