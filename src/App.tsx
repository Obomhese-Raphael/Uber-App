import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Mid from "./Pages/Mid/Mid";
import Login from "./Pages/Login/Login";
import Eats from "./Pages/Eats/Eats";
import { useEffect } from "react";


function FaviconAndTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const currentPageUrl = location.pathname;
    window.scrollTo(0, 0);

    const favicon = document.getElementById('favicon') as HTMLLinkElement;

    if (favicon) {
      if (currentPageUrl === '/eats') {
        document.title = 'Uber Eats | Food & Groceries';
        favicon.href = '../public/favicon_2.ico';
      } else {
        document.title = 'Uber';
        favicon.href = '../public/favicon_4.ico';
      }
    }
  }, [location]);

  return null;
}

function App() {

  return (
    <div style={{ backgroundColor: "black", height: "100%" }} className="app">
      <BrowserRouter>
        <FaviconAndTitleUpdater /> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/mid" element={<Mid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eats" element={<Eats />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;