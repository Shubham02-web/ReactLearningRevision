import { useParams } from "react-router-dom";
const User = () => {
  const params = useParams();
  return <div>Hey i am user {params.username}</div>;
};

export default User;
