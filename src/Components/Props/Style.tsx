type styleProps = {
  style: React.CSSProperties;
};

export default function Style(props: styleProps) {
  return <div style={props.style}>This is Style from Props</div>;
}
