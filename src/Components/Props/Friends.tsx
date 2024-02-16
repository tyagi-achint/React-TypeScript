type friendsProps = {
  friends: { first: string; last: string }[];
};
export default function Friends(props: friendsProps) {
  return (
    <>
      <h2>These are my Friends</h2>
      {props.friends.map((friend) => {
        return (
          <h3 key={friend.first}>
            {friend.first} {friend.last}
          </h3>
        );
      })}
    </>
  );
}
