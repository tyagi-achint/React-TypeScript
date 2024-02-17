import LoggedIn from "./LoggedIn";
import User from "./User";

export default function UseStatePage() {
  return (
    <div className="useStatePage">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        useState
      </h1>
      <LoggedIn />
      <br />
      <User />
    </div>
  );
}
