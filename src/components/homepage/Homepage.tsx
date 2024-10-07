import { useAppSelector } from "../../hooks/hooks";
import ForexData from "../forex";
import { UserData } from "../user/User";

const HomePage = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return <>{!isAuthenticated ? <ForexData /> : <UserData />}</>;
};

export default HomePage;
