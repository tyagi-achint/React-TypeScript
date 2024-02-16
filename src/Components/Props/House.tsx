type propsHouse = {
  name?: string;
  type: string;
  available: boolean;
  rent: number;
};

export default function House(props: propsHouse) {
  const { name = "Random House" } = props;
  return (
    <>
      <h1>House Details</h1>
      {props.available ? (
        <h3>
          <ul>
            <li>{name}</li>
            <li>{props.type}</li>
            <li>{props.rent}</li>
          </ul>
        </h3>
      ) : (
        <h3>No House Available</h3>
      )}
    </>
  );
}
