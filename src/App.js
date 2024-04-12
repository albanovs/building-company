import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Projects from "./components/Projects/projects";
import Footer from "./components/Footer/footer";
import ApplicationPage from "./pages/applicationPage/applicationPage";
import { RegisterPage } from "./pages/register-page/register-page";
import { CalculatorPage } from "./pages/calculator-page/calculator-page";
import { DetailPage } from "./pages/detail-page/detail-page";
import Homepage from "./pages/homepage/homepage";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PersonalAccount from "./pages/personalAccount-page/personalAccount-page";
import AdminPanel from "./pages/admin-panel/adminPanel";

function App() {

  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    scrollToTop()
  }, [location])
  

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes location={location}>
          <Route path="/" element={<Homepage />} />
          <Route path="/applicationPage" element={<ApplicationPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/detail-page" element={<DetailPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/personalAccount" element={<PersonalAccount />} />
          <Route path="/*" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
