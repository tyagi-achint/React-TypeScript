type navProps = {
  name: string;
};

export default function Person(props: navProps) {
  return (
    <>
      <h1>Hello {props.name} </h1>
    </>
  );
}
