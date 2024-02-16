import Button from "./Button";
import Cars from "./Cars";
import Cars2 from "./Cars2";
import Friends from "./Friends";
import House from "./House";
import Input from "./Input";
import Person from "./Person";
import Style from "./Style";
import Style2 from "./Style2";

export default function PropsPage() {
  const friendsList = [
    {
      first: "Abcd",
      last: "efgh",
    },
    {
      first: "Abcd",
      last: "efgh",
    },
    {
      first: "Abcd",
      last: "efgh",
    },
  ];
  const StyleBox = {
    margin: "10px",
    padding: "20px",
    border: "2px solid",
    background: "linear-gradient(90deg, wheat, rgb(252, 189, 73))",
  };

  return (
    <div className="PropsPage">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Props
      </h1>
      <Person name="Achint Tyagi" />
      <Friends friends={friendsList} />
      <Cars>These are my cars</Cars>
      <Cars2>
        <Cars>These are my 2nd Cars</Cars>
      </Cars2>
      <House rent={1000} available={true} type="Flat" />
      <House rent={10000} available={false} type="Palace" />
      <Button handleClick={(id) => console.log("Clicked", id)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Style style={StyleBox} />
      <Style2 style={StyleBox} />
    </div>
  );
}
