import Auth from "./components/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import theme from "./components/theme";
import Navigation from "./components/navigation";
import PageLayout from "./components/pageLayout";
import { useAppSelector } from "./hooks/hooks";

const HomePage = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <>
      <h1>Home Page</h1>
      {isAuthenticated && (
        <>
          <Typography variant="h5">Welcome, {user?.username}!</Typography>
          <Typography variant="body1">Email: {user?.email}</Typography>
        </>
      )}
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <PageLayout>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
