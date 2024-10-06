import { useAppSelector } from "../../hooks/hooks";
import { Typography } from "@mui/material";
import ForexData from "../forex";

const HomePage = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <>
      {!isAuthenticated ? (
        <ForexData />
      ) : (
        <>
          <Typography variant="h5">Welcome, {user?.username}!</Typography>
        </>
      )}
    </>
  );
};

export default HomePage;
