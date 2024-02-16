type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: inputProps) {
  return <input value={props.value} onChange={props.handleChange} />;
}
