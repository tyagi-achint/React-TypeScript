type propsCars = {
  children: string;
};
export default function Cars(props: propsCars) {
  return (
    <>
      {props.children}
      <h3>Abcd</h3>
    </>
  );
}
