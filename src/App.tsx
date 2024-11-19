// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explanation from './pages/Explanation';
import Demonstration from './pages/Demonstration';
import { useTranslation } from 'react-i18next'; // Import the i18n hook
import LanguageSwitcher from './components/LanguageSwitcher'; // Import LanguageSwitcher

function App() {
  useTranslation(); // Only use the hook to initialize translations

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {/* Add LanguageSwitcher */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explanation" element={<Explanation />} />
          <Route path="/demonstration" element={<Demonstration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
