import { usCollection } from "react-firebase-hooks";

export default function Posts() {
  const [realtimePosts, loading, error] = usCollection(
    db.collection("nextjsposts").orderBy("timestamp", "desc")
  );

  return <div>
    {realtimePosts.docs.map(post => (
      <Post/>
    ))}
  </div>;
}
