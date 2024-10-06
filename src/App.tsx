import Auth from "./components/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/theme";
import Navigation from "./components/navigation";
import PageLayout from "./components/pageLayout";
import HomePage from "./components/homepage";

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
