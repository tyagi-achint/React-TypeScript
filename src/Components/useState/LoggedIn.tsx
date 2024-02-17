import { useState } from "react";

export default function LoggedIn() {
  const [isloggedin, setLoggedIn] = useState(false);

  const handlelogin = () => {
    setLoggedIn(true);
  };
  const handlelogout = () => {
    setLoggedIn(false);
  };
  return (
    <>
      <button onClick={handlelogin}>Login</button>
      <button onClick={handlelogout}>Logout</button>
      <h3>User is {isloggedin ? "Logged In" : "Logged Out"}</h3>
    </>
  );
}
