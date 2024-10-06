import Auth from "./components/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import PageLayout from "./components/pageLayout";
import HomePage from "./components/homepage";

function App() {
  return (
    <Router>
      <Navigation />
      <PageLayout>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
