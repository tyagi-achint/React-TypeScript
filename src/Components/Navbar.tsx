type navProps = {
  name: string;
};

export default function Navbar(props: navProps) {
  return (
    <>
      <h1>Hello {props.name} </h1>
    </>
  );
}
