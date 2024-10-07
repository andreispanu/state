import Auth from "./components/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import PageLayout from "./components/pageLayout";
import HomePage from "./components/homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navigation />
        <PageLayout>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageLayout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
