import { Typography, List, ListItem } from "@mui/material";
import theme from "../theme";
import { useAppSelector } from "../../hooks/hooks";
import Card from "../card";

export const UserData = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const technologiesUsed = ['React JS', 'Typescript', 'Redux - Redux Toolkit for the User Data', 'React Query - Fetch the Forex API data', 'React Router - Navigation between sections', 'Material UI - with Styled Components', 'Formik - User Login Form', 'Yup - User Login Form Schema Validation', 'Cypress - Component Tests for the User Login Form and Navigation'];  

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
        {technologiesUsed.map((technology) => (
          <ListItem key={technology}>{technology}</ListItem>
        ))}
      </List>
    </>
  );

  return (
    isAuthenticated &&
    user && <Card title="Logged in User Homepage">{userDataContent}</Card>
  );
};
