import Auth from './components/auth';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './components/theme';
import Navigation from './components/navigation';
import PageLayout from './components/pageLayout';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
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
            <Route path="/login" element={<Auth /> } />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageLayout>
      </Router>
    </ThemeProvider>

      
  );
}

export default App;
