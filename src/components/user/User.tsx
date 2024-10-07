import { Typography, List, ListItem } from "@mui/material";
import theme from "../theme";
import { useAppSelector } from "../../hooks/hooks";
import Card from "../card";

export const UserData = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const userDataContent = (
    <>
      <Typography
        variant="body1"
        sx={{
          fontWeight: theme.typography.fontWeightBold,
          marginLeft: theme.spacing(2),
          marginTop: theme.spacing(6),
        }}
      >
        Technologies used in this project:
      </Typography>
      <List>
        <ListItem>React JS</ListItem>
        <ListItem>Typescript</ListItem>
        <ListItem>Redux - Redux Toolkit for the User Data</ListItem>
        <ListItem>React Query - Fetch the Forex API data</ListItem>
        <ListItem>React Router - Navigation between sections</ListItem>
        <ListItem>Material UI - with Styled Components</ListItem>
        <ListItem>Formik - User Login Form</ListItem>
        <ListItem>Yup - User Login Form Schema Validation</ListItem>
        <ListItem>
          Cypress - Component Tests for the User Login Form and Navigation
        </ListItem>
      </List>
    </>
  );

  return (
    isAuthenticated &&
    user && <Card title="Logged in User Homepage">{userDataContent}</Card>
  );
};
