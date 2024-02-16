type styleProps = {
  style: React.CSSProperties;
};

export default function Style2({ style }: styleProps) {
  return (
    <div style={style}>
      This is Style from Props and it is not using props keyword
    </div>
  );
}
