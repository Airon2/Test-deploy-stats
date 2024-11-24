import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MyProfile from './Components/MyProfile/MyProfile';
import Login from './Components/Authorization/Login';
import RegistrationContainer from './Components/Authorization/RegistrationContainer';
import GamesContainer from './Components/Games/GamesContainer'; // обновленный импорт
import GameDetail from './Components/GameDetail/GameDetail'; 

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/login', '/register'];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);
  return (
    <div className="App">
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games" element={<GamesContainer />} /> {/* Обновленный путь */}
        <Route path="/Myprofile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationContainer />} />
        <Route path="/games/:gameTitle" element={<GameDetail />} />
      </Routes> 
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
